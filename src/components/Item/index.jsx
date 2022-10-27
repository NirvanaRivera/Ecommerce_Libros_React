import { VStack, Button, Text, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Item = ({product}) => {
    return (
        <VStack boxShadow={'lg'} p='6' rounded='md' bg='#F1B37B' m='15px'>
            <Image src={product.image} alt={product.product} w='250px'/>
            <Text>{product.product}</Text>
            <Text>${product.price}</Text>
            <Button colorScheme='orange' size='xs'>
                <NavLink to={`/product/${product.id}`}>Ver Detalles</NavLink>
            </Button>
        </VStack>
    );
};

export {Item};