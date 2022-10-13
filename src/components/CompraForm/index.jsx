import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Radio,
    RadioGroup,
    HStack,
    Button,
    Box,

  } from '@chakra-ui/react'



const CompraForm = ({setUserData, finalizarCompra}) => {

    
    const submitForm = () => {
        setUserData({nombreCompleto, email, pagos});
        setMostrarBoton(true);
    }
   

    const [nombreCompleto, setNombreCompleto] = useState('');
    const [email, setEmail] = useState();
    const [pagos, setPagos] = useState();
    const [mostrarBoton, setMostrarBoton] = useState(false);

    return (
        <Box p='20px'>
            <form>
                <FormControl isRequired >
                    <FormLabel>Nombre Completo</FormLabel>
                    <Input name='nombreCompleto' placeholder='Ingrese su Nombre Completo' onChange={(event) => {setNombreCompleto(event.target.value)}}/>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input name='email' placeholder='Ingrese su Email' type='email' onChange={(event) => {setEmail(event.target.value)}} />
                    <FormHelperText></FormHelperText>
                </FormControl>
                <FormControl as='fieldset'>
                    <FormLabel as='legend'>Seleccione la cantidad de pagos</FormLabel>
                    <RadioGroup name='pagos' onChange={setPagos}>
                        <HStack spacing='24px'>
                        <Radio name='pago' value='1'>1</Radio>
                        <Radio name='pago' value='3'>3</Radio>
                        <Radio name='pago' value='6'>6</Radio>
                        <Radio name='pago' value='12'>12</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                {!mostrarBoton &&
                <Button mt={4} colorScheme='orange' onClick={() => {submitForm()}}>
                Confirmar
                </Button>
                }
                
                {mostrarBoton && 
                <Button mt={4} colorScheme='orange' onClick={() => {finalizarCompra()}}>
                Finalizar Compra
                </Button>
                }
            </form>
        </Box>
    );
};

export default CompraForm;