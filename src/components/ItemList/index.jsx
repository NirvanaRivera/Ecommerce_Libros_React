import { Item } from '../Item'
import { Grid } from '@chakra-ui/react';

const ItemList = ({listProduct}) => {
    return (
        <div>
            <Grid templateColumns='repeat(4, 1fr)' justifyItems='center' spacing='24px'> 
            {listProduct.map(product => <Item key={product.id} product={product}/>)}
            </Grid>
        </div>
    );
};

export {ItemList};