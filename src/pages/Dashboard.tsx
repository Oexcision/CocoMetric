import { Box, Container, Text } from "@chakra-ui/react"

const Dashboard = () =>{
    return(
        <>
            <Container maxW="full">
                <Box pt={12} m={4}>
                    <Text fontSize="2xl">
                        Hi, 👋🏼
                    </Text>
                    <Text>Welcome back, nice to see you again!</Text>
                </Box>
            </Container>
        </>
    )
}

export default Dashboard