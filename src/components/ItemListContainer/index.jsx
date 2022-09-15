import { useState, useEffect } from 'react';
import { Center, Heading, Text } from '@chakra-ui/react';
// import ItemCount from '../ItemCount';
import{ ItemList } from '../ItemList'
import { products } from '../../utils/products';
import { customFetch } from '../../utils/customFetch';

const ItemListContainer = ({greeting}) => {

    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        customFetch(products)
            .then (res => {
                setLoading(false);
                setListProduct(res);
            })

    }, []);

    return (
        <>
            <Heading>
                <Center as='ins'>Hola {greeting} ! Bienvenido</Center>
            </Heading>
            {!loading
            ?
            <ItemList listProduct={listProduct} />
            :
            <Text>Cargando...</Text>
            }
            {/* <ItemCount initial={1} stock={7} onAdd={() => {}}/>  */}
        </>
        
    );
};

export default ItemListContainer;