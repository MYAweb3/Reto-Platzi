

import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
} from "@chakra-ui/react";
function MiExperiencia() {


  return (
    <div>
      {/*   <div div className='cardHijo2' style={{ textAlign: 'center' }}> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-550px' }}>
        <Card style={{ background: 'none' }}>
          <CardHeader>
            <Heading size='md' style={{ color: 'white', width: '250px' }}>💚 Mi experiencia 💚</Heading>

          </CardHeader>

          <CardBody>
            <Stack spacing='4'>
              <Box>
                <Heading size='xs' style={{ color: 'white' }} >
                  {/* sdf */}
                </Heading>
              </Box>
              <Box>
                <Heading size='xs' style={{ color: 'white' }} >
                  📌Alumna del programa WOMENCADOPERÚ <br></br>
                  - capacitacion en leguaje de python básico 
                  - capacitacion en tinkercad
                </Heading>
              </Box>
              <Box>
                <Heading size='xs' style={{ color: 'white' }} >
                  📌Participación en comunidades | ANDINO DAO y WOMEN BIZ
                </Heading>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
      {/* </div> */}
    </div>
  );

}

export default MiExperiencia;
