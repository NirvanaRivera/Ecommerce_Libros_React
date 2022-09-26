import { useState, useEffect } from "react";
import { products } from "../../utils/products";
import { customFetch } from "../../utils/customFetch";
import { ItemDetail } from "../ItemDetail";
import { Center, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        customFetch(products)
            .then(res => {
                setLoading(false);
                setListProduct(res.find(item => item.id === parseInt(id)));
            })
    }, [id]);

    return (
        <>
            {!loading ? <ItemDetail listProduct={listProduct}/> : 
            <Center m='60px'>
                <Spinner color='orange.500' emptyColor='gray.200' size='xl' speed='0.65s' />
            </Center>}
        </>
    );
};

export { ItemDetailContainer };