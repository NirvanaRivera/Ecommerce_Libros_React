import { HStack, Spacer, Link, Heading } from "@chakra-ui/react";
import logoLibro from '../../assets/logo.png';
import CartWidget from "../CartWidget";

const Navbar = () => {

    const logoStyle = {
        height: "60px",
        marginLeft: "13px"
    };

    const linkPadding = "15";

    return (
        <HStack bg="#F1B37B">
            <img src={logoLibro} alt="" style={logoStyle} />
            <Heading>Radagast Libros</Heading>
            <Spacer />
            <HStack fontSize="18px">
                <Link px={linkPadding} >Ficción</Link>
                <Link px={linkPadding}>No Ficción</Link>
                <Link px={linkPadding}>Románticos</Link>
                <Link px={linkPadding}>Infantiles y Juveniles</Link>
                <Link px={linkPadding}><CartWidget/></Link> 
            </HStack>
        </HStack>
    );
};

export { Navbar } ;