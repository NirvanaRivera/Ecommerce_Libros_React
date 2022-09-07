import React from 'react';
import { Center, Heading } from '@chakra-ui/react';
import ItemCount from '../ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <Heading>
                <Center as='ins'>Hola {greeting} ! Bienvenido</Center>
            </Heading>
            <ItemCount initial={1} stock={7} onAdd={() => {}}/>
        </>
        
    );
};

export default ItemListContainer;