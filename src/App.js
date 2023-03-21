import './styles/App.css';

import {
  CircularProgress,
  CircularProgressLabel,
  ListItem,
  ListIcon,
  List,
  Box,
  HStack,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { Tabs, AddIcon, TabList, TabPanel } from '@chakra-ui/icons';
import MiExperiencia from './components/experiencia';
import Idiomas from './components/idiomas';
import Interes from './components/interes';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Estudios from './components/estudios';


function App() {
  return (
    <div className='contenedor' style={{ color: 'white' }}>
      <div className='cardHijo'>
        <div className='perfil'>

          <Image
            borderRadius='full'
            boxSize='150px'
            marginTop='30px'
            src='https://i.pinimg.com/236x/6f/fb/06/6ffb06eaeaace0d90a0596fac6c6377d.jpg'
            alt='M-Y.A'
          />
          <br />
          <span > 💚Marisol Yupa Arias💚 </span> <br />
          <span style={{ width: '500px', textAlign: 'justify'}}>✨Soy estudiante del nivel secundario me dedico al mundo de la web3,
            creo contenidos como diseños, edición de videos,
            para conectar a los usuarios a través de las emociones y informaciones. Me gusta trabajar en equipo, soluciono
            problemas y soy creativa e innovadora. Mi objetovo es adquirir nuevas competencias y habilidades que me permitan crear
            soluciones digitales disruptivas, de alto impacto y servicio a la sociedad.💚</span>
          <div style={{ margin: '20px 0' }}>
            <HStack>
              <a href="https://www.facebook.com/marisol.yupa.50" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <Spacer />
              <a href="https://twitter.com/mariyuarweb3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <Spacer />
              <a href="https://www.instagram.com/mari_web3/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <Spacer />
              <a href="https://github.com/MYAweb3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <Spacer />
              <a href="https://www.linkedin.com/in/marisol-yupa-arias-010034222/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </HStack>
          </div>
          <br />
          <div style={{ color: 'white' }}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={AddIcon} color='green.500' />
                <span>🧑‍🎓Estudiante</span>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color='green.500' />
                <span>      📍 Ate, Santa Clara, Perú</span>
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color='green.500' />
                📧 marisolyupaarias88@gmail.com
              </ListItem>
              <ListItem>
                <ListIcon as={AddIcon} color='green.500' />
                📞 913244131
              </ListItem>
            </List>
          </div>
        </div>
        <br />
        <div className='detalle'>
          <div style={{ alignItems: 'center', height: '100vh', marginTop: "40px" }}>
            <div style={{ bottom: '20px', right: '20px', display: 'flex', justifyContent: 'center', }}>
              <div style={{ position: 'relative', margin: '0 20px' }}>
                <CircularProgress value={70} color='green.400' size='50px' thickness={10}>
                  <CircularProgressLabel fontSize='18px'>70%</CircularProgressLabel>
                  <Box position="absolute" top="10%" left="-30%" transform="translate(-0%, -100%)" fontSize="15px">
                    <span style={{ padding: '40px 0' }}>✔️Html</span>
                  </Box>
                </CircularProgress>
              </div>
              <div style={{ position: 'relative', margin: '0 20px' }}>
                <CircularProgress value={50} color='green.400' size='50px' thickness={10}>
                  <CircularProgressLabel fontSize='18px'>50%</CircularProgressLabel>
                  <Box width={150} position="absolute" top="10%" left="-50%" transform="translate(-0%, -100%)" fontSize="15px">
                    ✔️css and sass
                  </Box>
                </CircularProgress>
              </div>
              <div style={{ position: 'relative', margin: '0 20px' }}>
                <CircularProgress value={50} color='green.400' size='50px' thickness={10}>
                  <CircularProgressLabel fontSize='18px'>50%</CircularProgressLabel>
                  <Box position="absolute" top="10%" left="-20%" transform="translate(-0%, -100%)" fontSize="15px">
                    ✔️JavaScript
                  </Box>
                </CircularProgress>
              </div>
              <div style={{ position: 'relative', margin: '0 20px' }}>
                <CircularProgress value={40} color='green.400' size='50px' thickness={10}>
                  <CircularProgressLabel fontSize='18px'>40%</CircularProgressLabel>
                  <Box position="absolute" top="10%" left="-20%" transform="translate(-0%, -100%)" fontSize="15px">
                    ✔️Figma
                  </Box>
                </CircularProgress>
              </div>
              <div style={{ position: 'relative', margin: '0 20px' }}>
                <CircularProgress value={50} color='green.400' size='50px' thickness={10}>
                  <CircularProgressLabel fontSize='18px'>50%</CircularProgressLabel>
                  <Box position="absolute" top="10%" left="-30%" transform="translate(-0%, -100%)" fontSize="15px">
                    ✔️Canva
                  </Box>
                </CircularProgress>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* experiencias */}
          <MiExperiencia />
          {/* idiomas */}
          <Idiomas />
        </div>
        {/* Estudios */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-280px', marginBottom: '50px' }}>
          <Estudios />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-0px', marginBottom: '50px' }}>
          <Interes />
        </div>
      </div>
    </div>
  );
}

export default App;
