import {
    Box,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
  } from "@chakra-ui/react";
function Interes() {
    return (
        <div style={{ width: '400px'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-50px', background: '#a2aec915', borderRadius: '15px' }}>
        <Card style={{ background: 'none' }}>
          <CardHeader>
            <Heading size='md' style={{ color: 'white' }}>💚Intereses💚</Heading>

          </CardHeader>

          <CardBody>
            <Stack spacing='4'>
              <Box>
                <Heading size='xs' style={{ color: 'white' }} >
                📌Innovación y emprendimiento tecnológico
                </Heading>
              </Box>
              <Box>
                <Heading size='xs' style={{ color: 'white' }} >
                📌Programación web y diseño de aplicaciones móviles 
                </Heading>
              </Box>
              <Box>
                <Heading size='xs' style={{ color: 'white' }} >
                📌Investigación científica y tecnológica
                </Heading>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
      </div>
    )
}

export default Interes;