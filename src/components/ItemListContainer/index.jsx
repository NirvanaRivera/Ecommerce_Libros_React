import { useState, useEffect } from 'react';
import { Center, Heading, Spinner } from '@chakra-ui/react';
import{ ItemList } from '../ItemList'
import { products } from '../../utils/products';
import { customFetch } from '../../utils/customFetch';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {

    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        customFetch(products)
            .then (res => {
                if (category) {
                    setLoading(false);
                    setListProduct(res.filter(prod => prod.category === category)); 
                } else {
                    setLoading(false);
                    setListProduct(res);
                };
            })

    }, [category]);

    return (
        <>
            <Heading>
                <Center as='ins'>Hola {greeting} ! Bienvenido {'<3'} </Center>
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