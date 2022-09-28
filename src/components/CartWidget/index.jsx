import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';


const CartWidget = () => {
    return (
        <NavLink to="/cart">
            <Button colorScheme='orange'>
                <ShoppingCartIcon/>
            </Button>
        </NavLink>
        
    );
};

export default CartWidget;