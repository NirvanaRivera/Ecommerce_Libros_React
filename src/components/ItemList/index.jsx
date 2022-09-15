import { Item } from '../Item'
import { HStack } from '@chakra-ui/react';

const ItemList = ({listProduct}) => {
    return (
        <HStack> 
        {listProduct.map(product => <Item key={product.id} product={product}/>)}
        </HStack>
    );
};

export {ItemList};