import {
    Box,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
  } from "@chakra-ui/react";
function Estudios() {
    return (
        <div style={{ width: '300px'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-50px'}}>
        <Card style={{ background: 'none' }}>
          <CardHeader>
            <Heading size='md' style={{ color: 'white' }}>💚Estudio Académico💚</Heading>

          </CardHeader>

          <CardBody>
            <Stack spacing='4'>
              <Box>
                <Heading size='xs' style={{ color: 'white' }} >
                📌2013/2018 Primaria 100%
                </Heading>
              </Box>
              <Box>
                <Heading size='xs' style={{ color: 'white' }} >
                📌2019/2023 Segundaria 80%
                </Heading>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
      </div>
    )
}

export default Estudios;