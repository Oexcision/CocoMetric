import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Input,
  Button,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  VStack,
  Flex,
  Center,
  Select,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';

interface FunctionCounts {
  [key: string]: {
    [key: string]: number;
  };
}

const complexityWeights: FunctionCounts = {
  Entradas: { Baja: 3, Media: 4, Alta: 6 },
  Salidas: { Baja: 4, Media: 5, Alta: 7 },
  Consultas: { Baja: 3, Media: 4, Alta: 6 },
  Archivos: { Baja: 7, Media: 10, Alta: 15 },
  Interfaces: { Baja: 5, Media: 7, Alta: 10 }
};

const ldcValues: { [key: string]: number } = {
  '4GL': 40,
  'Ada 83': 71,
  'Ada 95': 49,
  'APL': 32,
  'BASIC - compilado': 91,
  'BASIC - interpretado': 128,
  'BASIC ANSI/Quick/Turbo': 64,
  'C': 128,
  'C++': 29,
  'Clipper': 19,
  'Cobol ANSI 85': 91,
  'Delphi 1': 29,
  'Ensamblador': 119,
  'Ensamblador (Macro)': 213,
  'Forth': 64,
  'Fortran 77': 105,
  'FoxPro 2.5': 34,
  'Java': 53,
  'Modula 2': 80,
  'Oracle': 40,
  'Oracle 2000': 23,
  'Paradox': 36,
  'Pascal': 91,
  'Pascal Turbo 5': 49,
  'Power Builder': 16,
  'Prolog': 64,
  'Visual Basic 3': 32,
  'Visual C++': 34,
  'Visual Cobol': 20,
};

const FunctionPoint: React.FC = () => {
  const [functionCounts, setFunctionCounts] = useState<FunctionCounts>({
    Entradas: { Baja: 0, Media: 0, Alta: 0 },
    Salidas: { Baja: 0, Media: 0, Alta: 0 },
    Consultas: { Baja: 0, Media: 0, Alta: 0 },
    Archivos: { Baja: 0, Media: 0, Alta: 0 },
    Interfaces: { Baja: 0, Media: 0, Alta: 0 }
  });

  const [selectedLanguage, setSelectedLanguage] = useState<string>('1');
  const [ldc, setLdc] = useState<number>(1);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string,
    complexity: string
  ) => {
    const value = parseInt(e.target.value) || 0;
    setFunctionCounts({
      ...functionCounts,
      [type]: { ...functionCounts[type], [complexity]: value }
    });
  };

  
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    setLdc(ldcValues[language]);
  };

  const calculateTotalFunctionPoints = (): number => {
    let total = 0;
    Object.keys(functionCounts).forEach(type => {
      Object.keys(functionCounts[type]).forEach(complexity => {
        total += functionCounts[type][complexity] * complexityWeights[type][complexity];
      });
    });
    return total * ldc;
  };

  return (
    <Container maxW="full">
      <Box pt={1} mx={2}>
        <Center minH="100vh" bg="gray.100" p={2}>
          <Box bg="white" p={5} rounded="md" shadow="md" w="full" maxW="1000px">
            <VStack spacing={4} align="stretch">
              <Heading as="h2" size="lg" textAlign="center">Function Point Estimator</Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {Object.keys(functionCounts).map(type => (
                  <Box key={type}>
                    <Heading as="h3" size="sm" mb={2}>{type}</Heading>
                    <Table variant="simple" size="sm">
                      <Tbody>
                        {Object.keys(functionCounts[type]).map(complexity => (
                          <Tr key={complexity}>
                            <Th>{complexity}</Th>
                            <Td>
                              <Input
                                type="number"
                                size="sm"
                                width="80px"
                                value={functionCounts[type][complexity]}
                                onChange={(e) => handleInputChange(e, type, complexity)}
                              />
                            </Td>
                            <Td>{complexityWeights[type][complexity]}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                ))}
              </SimpleGrid>
              <Box>
                <Select value={selectedLanguage} onChange={handleLanguageChange} size="sm">
                  <option value="1">Default (1)</option>
                  {Object.keys(ldcValues).map(language => (
                    <option key={language} value={language}>{`${language} (${ldcValues[language]})`}</option>
                  ))}
                </Select>
              </Box>
              <Flex justifyContent="center">
                <Button colorScheme="blue" size="sm" onClick={calculateTotalFunctionPoints}>Calculate</Button>
              </Flex>
              <Box textAlign="center" fontWeight="bold">
                Total Function Points: {calculateTotalFunctionPoints()}
              </Box>
            </VStack>
          </Box>
        </Center>
      </Box>
    </Container>
  );
};

export default FunctionPoint;
