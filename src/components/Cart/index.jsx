import React from 'react';
import { VStack, Center, Text, Image, HStack, Button } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    return (
        <Center>
            <VStack>
                {cartList.map(prod =>
                    <HStack key={prod.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg='organe'>
                        <Image src={prod.image} w='100px'></Image>
                        <Text as='b'>{prod.product}</Text>
                        <Text as='b'>Cantidad: {prod.quantity}</Text>
                        <Text as='b'>Precio: {prod.price * prod.quantity}</Text>
                        <Button colorScheme='orange' size='sm' onClick={() => removeProduct(prod.id)}>X</Button>
                    </HStack>
                )}
                {!cartList.length ?
                    <Text> El carrito está vacío</Text>
                    :
                    <>
                        <Text>Total: ${totalPrice()}</Text>
                        <Button colorScheme='orange' size='sm' onClick={cleanCart}>Vaciar Carrito</Button>
                    </>
                }   
            </VStack>
        </Center>
    );
};

export default Cart;    