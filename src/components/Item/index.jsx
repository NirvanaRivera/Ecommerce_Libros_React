import { VStack, Button, Text, Image, Link } from "@chakra-ui/react";

const Item = ({product}) => {
    return (
        <VStack boxShadow={'lg'} p='6' rounded='md' bg='#F1B37B' m='15px' minWidth='300px'>
            <Image src={product.image} alt={product.product} w='250px'/>
            <Text>{product.product}</Text>
            <Text>${product.price}</Text>
            <Button colorScheme={'orange'} size='xs'>
                <Link>Ver Detalles</Link>
            </Button>
        </VStack>
    );
};

export {Item};