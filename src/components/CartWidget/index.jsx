import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


const CartWidget = () => {

    const { totalQuantity } = useCartContext ();

    return (
        <NavLink to="/cart">
            <Button colorScheme='orange'>
                <ShoppingCartIcon/>
                <Text className='badge' fontSize='xs'>{totalQuantity()}</Text>
            </Button>
        </NavLink>
        
    );
};

export default CartWidget;