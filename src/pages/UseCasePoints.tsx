import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
    Box, Container, Text, FormControl, Input, Button, FormLabel,
    VStack, Heading, SimpleGrid,
    HStack
} from "@chakra-ui/react";

const UseCasePoints: React.FC = () => {
    const [simpleActors, setSimpleActors] = useState<number>(0);
    const [averageActors, setAverageActors] = useState<number>(0);
    const [complexActors, setComplexActors] = useState<number>(0);

    const [simpleUseCases, setSimpleUseCases] = useState<number>(0);
    const [averageUseCases, setAverageUseCases] = useState<number>(0);
    const [complexUseCases, setComplexUseCases] = useState<number>(0);

    // Valores de TCF y ECF inicializados con valores nulos
    const [tcfValues, setTcfValues] = useState<number[]>(Array(13).fill(0));
    const [ecfValues, setEcfValues] = useState<number[]>(Array(8).fill(0));

    const [ucp, setUcp] = useState<number | null>(null);
    const [effortHours, setEffortHours] = useState<number | null>(null);

    const TCF_FACTORS = [
        "Sistema Distribuido",
        "Desempeño",
        "Eficiencia del Usuario Final",
        "Complejidad del Procesamiento Interno",
        "Reusabilidad del Código",
        "Facilidad de Instalación",
        "Facilidad de Uso",
        "Portabilidad",
        "Facilidad de Cambio",
        "Concurrencia",
        "Características Especiales de Seguridad",
        "Acceso a Terceros",
        "Facilidades de Entrenamiento"
    ];

    const ECF_FACTORS = [
        "Familiaridad con Proceso Unificado",
        "Experiencia en Desarrollo de Aplicaciones",
        "Experiencia en Orientación a Objetos",
        "Capacidad del Jefe de Proyecto",
        "Motivación",
        "Estabilidad de los Requerimientos",
        "Personal a Tiempo Parcial",
        "Lenguaje de Programación Difícil"
    ];

    const handleTcfChange = (index: number, value: number) => {
        const newTcfValues = [...tcfValues];
        newTcfValues[index] = value;
        setTcfValues(newTcfValues);
    };

    const handleEcfChange = (index: number, value: number) => {
        const newEcfValues = [...ecfValues];
        newEcfValues[index] = value;
        setEcfValues(newEcfValues);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const totalActorPoints = (simpleActors * 1) + (averageActors * 2) + (complexActors * 3);
        const totalUseCasePoints = (simpleUseCases * 5) + (averageUseCases * 10) + (complexUseCases * 15);

        const unadjustedUCP = totalActorPoints + totalUseCasePoints;

        // Cálculo de TCF
        const tcfWeights = [2, 1, 1, 1, 1, 0.5, 0.5, 2, 1, 1, 1, 1, 1];
        const tcf = 0.6 + (0.01 * tcfValues.reduce((sum, val, idx) => sum + (val * tcfWeights[idx]), 0));

        // Cálculo de ECF
        const ecfWeights = [1.5, 0.5, 1, 0.5, 1, 2, -1, -1];
        const ecf = 1.4 + (-0.03 * ecfValues.reduce((sum, val, idx) => sum + (val * ecfWeights[idx]), 0));

        const adjustedUCP = unadjustedUCP * tcf * ecf;
        setUcp(adjustedUCP);

        // Cálculo del esfuerzo basado en los valores de F1-F8
        const X = ecfValues.slice(0, 6).filter(val => val < 3).length;
        const Y = ecfValues.slice(6, 8).filter(val => val > 3).length;

        let effortPerUCP = 0;
        const sumXY = X + Y;

        if (sumXY <= 2) {
            effortPerUCP = 20;
        } else if (sumXY === 3 || sumXY === 4) {
            effortPerUCP = 28;
        } else if (sumXY >= 5) {
            effortPerUCP = 36; // Se asume que 36 horas por PCUA, basándose en que no se especifica un número concreto en el mensaje original.
        }

        // Multiplica el esfuerzo por el total de UCP
        const totalEffort = adjustedUCP * effortPerUCP;
        setEffortHours(totalEffort);
    };

    return (
        <Container maxW="container.lg" p={2} m={0} maxWidth={"1e"}>
            <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h2" size="xl" mb={4}>Calculadora de Puntos de Casos de Uso</Heading>
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="stretch">
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                            <Box>
                                <Text fontSize="lg" fontWeight="bold">Actores</Text>
                                <SimpleGrid columns={3} spacing={4}>
                                    <FormControl id="simpleActors">
                                        <FormLabel>Simples</FormLabel>
                                        <Input
                                            type="number"
                                            value={simpleActors}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSimpleActors(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormControl id="averageActors">
                                        <FormLabel>Promedio</FormLabel>
                                        <Input
                                            type="number"
                                            value={averageActors}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAverageActors(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormControl id="complexActors">
                                        <FormLabel>Complejos</FormLabel>
                                        <Input
                                            type="number"
                                            value={complexActors}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setComplexActors(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                </SimpleGrid>
                            </Box>

                            <Box>
                                <Text fontSize="lg" fontWeight="bold">Casos de Uso</Text>
                                <SimpleGrid columns={3} spacing={4}>
                                    <FormControl id="simpleUseCases">
                                        <FormLabel>Simples</FormLabel>
                                        <Input
                                            type="number"
                                            value={simpleUseCases}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSimpleUseCases(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormControl id="averageUseCases">
                                        <FormLabel>Promedio</FormLabel>
                                        <Input
                                            type="number"
                                            value={averageUseCases}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAverageUseCases(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormControl id="complexUseCases">
                                        <FormLabel>Complejos</FormLabel>
                                        <Input
                                            type="number"
                                            value={complexUseCases}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setComplexUseCases(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                </SimpleGrid>
                            </Box>
                        </SimpleGrid>

                        {/* TCF */}
                        <Text fontSize="lg" fontWeight="bold">Factor de Complejidad Técnica (TCF)</Text>
                        <SimpleGrid columns={2} spacing={2}>
                            {TCF_FACTORS.map((factor, index) => (
                                <FormControl key={index}>
                                    <FormLabel>{factor}</FormLabel>
                                    <Input
                                        type="number"
                                        max={5}
                                        min={0}
                                        value={tcfValues[index]}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleTcfChange(index, parseFloat(e.target.value))}
                                    />
                                </FormControl>
                            ))}
                        </SimpleGrid>

                        {/* ECF */}
                        <Text fontSize="lg" fontWeight="bold">Factor de Complejidad Ambiental (ECF)</Text>
                        <SimpleGrid columns={2} spacing={2}>
                            {ECF_FACTORS.map((factor, index) => (
                                <FormControl key={index}>
                                    <FormLabel>{factor}</FormLabel>
                                    <Input
                                        type="number"
                                        max={5}
                                        min={0}
                                        value={ecfValues[index]}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleEcfChange(index, parseFloat(e.target.value))}
                                    />
                                </FormControl>
                            ))}
                        </SimpleGrid>

                        <Button type="submit" colorScheme="blue">Calcular Puntos de Caso de Uso (UCP)</Button>
                        {ucp !== null && (
                            <Text fontSize="xl">UCP: {ucp.toFixed(2)}</Text>
                        )}
                        {effortHours !== null && (
                            <HStack>
                                <Text fontSize="xl">ESF: {effortHours.toFixed(2)}</Text>
                                <Text fontStyle="italic"> Persons-Month</Text>
                            </HStack>
                        )}
                    </VStack>
                </form>
            </Box>
        </Container>
    );
};

export default UseCasePoints;
