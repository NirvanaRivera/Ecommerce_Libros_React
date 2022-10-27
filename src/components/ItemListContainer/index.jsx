import { useState, useEffect } from 'react';
import { Center, Heading, Spinner } from '@chakra-ui/react';
import{ ItemList } from '../ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


const ItemListContainer = ({greeting}) => {

    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { category } = useParams();

    useEffect(() => {
        
        const productsCollection = collection(db, 'products');

        getDocs(category 
            ? query(productsCollection, where('category', '==', category)) 
            : productsCollection)
        .then((data) => {
            const listProduct = data.docs.map((product) => {
                return {
                    ...product.data(), id: product.id
                };
            })

            setLoading(false);
            setListProduct(listProduct);
        }).catch((e)=>{
            setError(true);
        } ); 

    }, [category]);

    if (error) {
        return <div>Hay un error! :C</div>;
    }

    return (
        <>
            <Heading>
                <Center m='60px' fontSize='40px'>Hola {greeting} ! Bienvenido {'<3'} </Center>
            </Heading>
            {!loading
            ?
            <ItemList listProduct={listProduct} />
            :
            <Center m='60px'>
                <Spinner color='orange.500' emptyColor='gray.200' size='xl' speed='0.65s' />
            </Center>
            }


        </>
        
    );
};

export default ItemListContainer;