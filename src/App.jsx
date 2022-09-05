import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer nombre="Usuario"/>
    </ChakraProvider>
  );
}

export default App;
