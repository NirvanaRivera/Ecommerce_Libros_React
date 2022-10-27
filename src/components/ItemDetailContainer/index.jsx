import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";
import { Center, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase'
import { getDoc, collection, doc } from 'firebase/firestore';



const ItemDetailContainer = () => { 

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [error404, setError404] = useState(false);



    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc)
        .then((result)=>{
            if (result.data() === undefined) {
                setError404(true);
            }
            setProduct({
                id:result.id,
                ...result.data()
            });
        })
        .catch((e)=>{
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        })
        ;

    }, [id]);

    if (error404) {
        return <Center m='60px' fontSize='40px'>El producto {id} no existe.</Center>;
    }

    if (error) {
        return <div>Hay un error! :C</div>;
    }

    return (
        <>
            {!loading ? <ItemDetail listProduct={product}/> : 
            <Center m='60px'>
                <Spinner color='orange.500' emptyColor='gray.200' size='xl' speed='0.65s' />
            </Center>}
        </>
    );
};

export { ItemDetailContainer };