import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
    Box, Container, Text, FormControl, Input, Button, FormLabel,
    VStack, Heading, SimpleGrid
} from "@chakra-ui/react";

const UseCasePoints: React.FC = () => {
    const [simpleActors, setSimpleActors] = useState<number>(0);
    const [averageActors, setAverageActors] = useState<number>(0);
    const [complexActors, setComplexActors] = useState<number>(0);

    const [simpleUseCases, setSimpleUseCases] = useState<number>(0);
    const [averageUseCases, setAverageUseCases] = useState<number>(0);
    const [complexUseCases, setComplexUseCases] = useState<number>(0);

    const [tcf, setTcf] = useState<number>(1.0); // Factor de Complejidad Técnica
    const [ecf, setEcf] = useState<number>(1.0); // Factor de Complejidad Ambiental

    const [ucp, setUcp] = useState<number | null>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const totalActorPoints = (simpleActors * 1) + (averageActors * 2) + (complexActors * 3);
        const totalUseCasePoints = (simpleUseCases * 5) + (averageUseCases * 10) + (complexUseCases * 15);

        const unadjustedUCP = totalActorPoints + totalUseCasePoints;
        const adjustedUCP = unadjustedUCP * tcf * ecf;

        setUcp(adjustedUCP);
    };

    return (
        <Container maxW="container.lg" p={4}>
            <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h2" size="xl" mb={4}>Use Case Points Calculator</Heading>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="stretch">
                        <Text fontSize="lg" fontWeight="bold">Actors</Text>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                            <FormControl id="simpleActors">
                                <FormLabel>Simple</FormLabel>
                                <Input
                                    type="number"
                                    value={simpleActors}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSimpleActors(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="averageActors">
                                <FormLabel>Average</FormLabel>
                                <Input
                                    type="number"
                                    value={averageActors}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAverageActors(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="complexActors">
                                <FormLabel>Complex</FormLabel>
                                <Input
                                    type="number"
                                    value={complexActors}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setComplexActors(parseInt(e.target.value))}
                                />
                            </FormControl>
                        </SimpleGrid>

                        <Text fontSize="lg" fontWeight="bold">Use Cases</Text>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                            <FormControl id="simpleUseCases">
                                <FormLabel>Simple</FormLabel>
                                <Input
                                    type="number"
                                    value={simpleUseCases}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSimpleUseCases(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="averageUseCases">
                                <FormLabel>Average</FormLabel>
                                <Input
                                    type="number"
                                    value={averageUseCases}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAverageUseCases(parseInt(e.target.value))}
                                />
                            </FormControl>
                            <FormControl id="complexUseCases">
                                <FormLabel>Complex</FormLabel>
                                <Input
                                    type="number"
                                    value={complexUseCases}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setComplexUseCases(parseInt(e.target.value))}
                                />
                            </FormControl>
                        </SimpleGrid>

                        <Text fontSize="lg" fontWeight="bold">Technical Complexity Factor (TCF)</Text>
                        <FormControl id="tcf">
                            <FormLabel>TCF</FormLabel>
                            <Input
                                type="number"
                                step="0.01"
                                value={tcf}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setTcf(parseFloat(e.target.value))}
                            />
                        </FormControl>

                        <Text fontSize="lg" fontWeight="bold">Environmental Complexity Factor (ECF)</Text>
                        <FormControl id="ecf">
                            <FormLabel>ECF</FormLabel>
                            <Input
                                type="number"
                                step="0.01"
                                value={ecf}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setEcf(parseFloat(e.target.value))}
                            />
                        </FormControl>

                        <Button type="submit" colorScheme="blue">Calculate UCP</Button>
                        {ucp !== null && (
                            <Text fontSize="2xl" fontWeight="bold">Total UCP: {ucp.toFixed(2)}</Text>
                        )}
                    </VStack>
                </form>
            </Box>
        </Container>
    );
};

export default UseCasePoints;
