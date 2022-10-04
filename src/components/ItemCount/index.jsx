import { useState } from 'react';
import { HStack, Button, Text, Stack, Box, Heading, Center } from '@chakra-ui/react';

const ItemCount = ({ initial, stock, onAdd }) => {
 
    const [count, setCount] = useState(initial);

    const increase = () => count < stock && setCount(count + 1);
    const decrease = () => count > initial && setCount(count - 1);

    return (
        <HStack>
            <Stack spacing={8} direction='row'>
                <Box p={5} shadow='md' borderWidth='1px'>
                    <Heading fontSize='xl' pb={3} textAlign='center'></Heading>
                    <Center>
                        <HStack>
                            <Button variant='outline' colorScheme='orange' size='sm' onClick={decrease}>-</Button>
                            <Text>{count}</Text>
                            <Button variant='outline' colorScheme='orange' size='sm' onClick={increase}>+</Button>
                        </HStack>
                    </Center>
                    <Box py={6}>
                        <Button colorScheme='orange' size='sm' onClick={() => onAdd(count)}>Agregar al carrito</Button>
                    </Box>
                </Box>
            </Stack>
            
        </HStack>
    );
};

export default ItemCount;