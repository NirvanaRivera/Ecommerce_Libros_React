import React from 'react';
import { Center, Heading } from '@chakra-ui/react';

const ItemListContainer = ({greeting}) => {
    return (
        <Heading>
            <Center as='ins'>Hola {greeting} ! Bienvenido</Center>
        </Heading>
    );
};

export default ItemListContainer;