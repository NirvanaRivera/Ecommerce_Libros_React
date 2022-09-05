import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@chakra-ui/react';

const CartWidget = () => {
    return (
        <Button colorScheme='orange'>
            <ShoppingCartIcon/>
        </Button>
    );
};

export default CartWidget;