import { useState, useRef } from 'react';
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
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
  } from '@chakra-ui/react'


const CompraForm = ({setUserData, finalizarCompra}) => {
    const [formError, setFormError] = useState(null);
    const [modalOpen, setModalOpen] = useState(true);

    const [nombreCompleto, setNombreCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [confirmacionEmail, setConfirmacionEmail] = useState('');
    const [pagos, setPagos] = useState();
    const [mostrarBoton, setMostrarBoton] = useState(false);

    const finalRef = useRef(null);
    
    const submitForm = () => {
        if (email !== confirmacionEmail) {
            setFormError("Los Emails no coinciden, intente nuevamente");
        } else if (email === '' || nombreCompleto === '') {
            setFormError("Falta rellenar algún campo.");
        } else if (!email.includes('@')){
            setFormError("No ha ingresado un email, ingrese un email por favor.")
        } else {
            setFormError(null);
            setUserData({nombreCompleto, email, pagos});
            setMostrarBoton(true);
        }
    };


    return (
        <Box p='20px'>
            <Modal finalFocusRef={finalRef} isOpen={modalOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton onClick={() => setModalOpen(false) } />
                    <ModalBody>
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
                            <FormControl isRequired>
                                <FormLabel>Confirmar Email</FormLabel>
                                <Input name='confirmEmail' placeholder='Confirme su Email' type='email' onChange={(event) => {setConfirmacionEmail(event.target.value)}} />
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
                        </form>
                        <Center color='red' pt='15px'>{formError}</Center>
                    </ModalBody>
                    <ModalFooter>
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
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default CompraForm;

