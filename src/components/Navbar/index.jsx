import { HStack, Spacer, Heading, Text, Box } from "@chakra-ui/react";
import logoLibro from '../../assets/logo.png';
import CartWidget from "../CartWidget";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

    const logoStyle = {
        height: "60px",
        marginLeft: "13px"
    };

    const linkPadding = "8px";

    return (
        <HStack bg="#F1B37B">
            <Link to='/'>
                <HStack>
                    <img src={logoLibro} alt="" style={logoStyle} />
                    <Heading >Radagast Libros</Heading>
                </HStack>
            </Link>
            <Spacer />
            <HStack fontSize="18px">
                <NavLink to='/category/ficcion'>
                    <Text px={linkPadding}>Ficción</Text>
                </NavLink>
                <NavLink to='/category/no-ficcion'> 
                    <Text px={linkPadding}>No Ficción</Text>
                </NavLink>
                <NavLink to='/category/romanticos'>
                    <Text px={linkPadding}>Románticos</Text>
                </NavLink>
                <NavLink to='/category/infantiles-y-juveniles'> 
                    <Text px={linkPadding}>Infantiles y Juveniles</Text>
                </NavLink>
                <Box px={linkPadding}>
                    <CartWidget/>
                </Box>
            </HStack>
        </HStack>
    );
};

export { Navbar } ;