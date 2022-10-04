import { Stack, Text, Image, Box, Button} from "@chakra-ui/react";
import { useState } from "react";
import ItemCount from "../ItemCount";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ listProduct }) => {

    const [isAdded, setIsAdded] = useState(false)

    const { addToCart } = useCartContext ()

    const onAdd = (quantity) => {
        addToCart(listProduct, quantity);
        setIsAdded(true);
    }

    return (
        <Stack direction='row' boxShadow={'lg'} p='6' rounded='md' bg='#F1B37B' m='15px' minWidth='300px'>
                <Image src={listProduct.image}/>
                <Stack>
                    <Text fontSize='3xl' as='b'>{listProduct.product}</Text>
                    <Text pt='8' pb='8'>{listProduct.description}</Text>
                    <Text fontSize='lg' as='u'>Categoría: {listProduct.category}</Text>
                    <Box pt='8'>
                        {
                            isAdded ?
                            <NavLink to="/cart">
                                <Button colorScheme='orange' size='sm'> Ir al Carrito </Button>
                            </NavLink>
                            :
                            <ItemCount initial={1} stock={listProduct.stock} onAdd={onAdd}/>

                        }

                    </Box> 
                </Stack>
                
        </Stack>
    );
};

export { ItemDetail };