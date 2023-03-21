import {
    Box,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
  } from "@chakra-ui/react";
function Idiomas () {
    
    return (
        <div style={{ width: '300px'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-50px',background: '#a2aec915', borderRadius: '15px', marginRight: '10px' }}>
          <Card style={{ background: 'none' }}>
            <CardHeader>
              <Heading size='md' style={{ color: 'white', width: '250px' }}>💚 Idiomas 💚</Heading>

            </CardHeader>

            <CardBody>
              <Stack  spacing='4'>
                <Box>
                  <Heading size='xs' style={{ color: 'white' }} >
                  📌Español 100%
                  </Heading>
                </Box>
                <Box>
                  <Heading size='xs' style={{ color: 'white' }} >
                  📌Ingles 30%
                  </Heading>
                </Box>
                <Box>
                  <Heading size='xs' style={{ color: 'white' }} >
                  📌Portugues 0%
                  </Heading>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </div>
        {/* </div> */}
      </div>
    )
}

export default Idiomas;