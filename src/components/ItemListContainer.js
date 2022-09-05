import React from 'react';
import { Center } from '@chakra-ui/react';

const ItemListContainer = ({nombre}) => {
    return (
        <div>
            <Center fontSize='3xl' as='ins'>Hola {nombre} ! Bienvenido</Center>
        </div>
    );
};

export default ItemListContainer;