import {React, useState} from 'react';
import { VStack, Center, Text, Image, HStack, Button } from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
import  CompraForm  from '../CompraForm';


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()
    const [ userData, setUserData ] = useState({})
    const [ mostrarFormulario, setMostrarFormulario] = useState(false)


    const finalizarCompra = () => {
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            userData,
            items: cartList,
            date: serverTimestamp(),
            total: totalPrice(),
            
        })
        .then(result=>{
            alert(`El id de la compra es: ${result.id}`);
            cleanCart();
            setMostrarFormulario(false);
        });
    }


    // const actualizarStock = () =>{
    //     const updateStock = doc(db, 'products', id); // antes de hacer el cleanCart, deberia hacer un siclo repetitivo (min: 1.00.00) el stock de cada uno menos lo que se está llevando el usuario (stock - cantidad)
    //     updateDoc(updateStock,{stock: 50});

    // } 


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
                        <Button colorScheme='orange' size='sm' onClick={() =>{setMostrarFormulario(true)}}>Finalizar Compra</Button>
                    </>
                }  
                {mostrarFormulario ? 
                
                <CompraForm setUserData={setUserData} finalizarCompra={finalizarCompra}/>
                :
                <></>
                } 
                
            </VStack>
            
            

        </Center>
    );
};

export default Cart;    