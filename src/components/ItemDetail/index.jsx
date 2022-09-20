import { Stack, Text, Image, Button, Link, Box} from "@chakra-ui/react";

const ItemDetail = ({listProduct}) => {

    return (
        <Stack direction='row' boxShadow={'lg'} p='6' rounded='md' bg='#F1B37B' m='15px' minWidth='300px'>
                <Image src={listProduct.image}/>
                <Stack>
                    <Text fontSize='3xl' as='b'>{listProduct.product}</Text>
                    <Text pt='8' pb='8'>{listProduct.description}</Text>
                    <Text fontSize='lg' as='u'>Categoría: {listProduct.category}</Text>
                    <Box pt='8'>
                        <Button colorScheme={'orange'}>
                            <Link>Comprar</Link>
                        </Button>
                    </Box> 
                </Stack>
                
        </Stack>
    );
};

export { ItemDetail };