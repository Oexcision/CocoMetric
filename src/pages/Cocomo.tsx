import { useState, ChangeEvent, FormEvent } from 'react';
import {
    Box, Container, Text, FormControl, Input, Button, FormLabel,
    Select, VStack, Stack, Accordion, Switch, useDisclosure
} from "@chakra-ui/react";
import { CocomoForm, CocomoOut } from '../client/models';
import { MethodsService } from '../client/services';
import CostDriver from '../components/common/CostDriver';
import CpmModal from '../components/cocomo/CpmModal';

const Cocomo = () => {
    const [formData, setFormData] = useState<CocomoForm>({
        mode: '',
        kdlc: 0,
        cpm: 0,
        costDrivers: []
    });
    const [loading, setLoading] = useState(false);
    const [selectedCostDrivers, setSelectedCostDrivers] = useState<{ [key: string]: string }>({});
    const [estimationResult, setEstimationResult] = useState<CocomoOut | null>(null); // State to store estimation result

    const cpmModal = useDisclosure();

    const costDrivers = {
        PRODUCT: {
            RSS: { VL: 0.75, L: 0.88, N: 1.00, H: 1.15, VH: 1.40, EH: null },
            TBD: { VL: null, L: 0.94, N: 1.00, H: 1.08, VH: 1.16, EH: null },
            CPR: { VL: 0.70, L: 0.85, N: 1.00, H: 1.15, VH: 1.30, EH: 1.65 },
        },
        PLATAFORM: {
            RTE: { VL: null, L: null, N: 1.00, H: 1.11, VH: 1.30, EH: 1.66 },
            RMP: { VL: null, L: null, N: 1.00, H: 1.06, VH: 1.30, EH: 1.58 },
            VMC: { VL: null, L: 0.87, N: 1.00, H: 1.15, VH: 1.30, EH: null },
            TRC: { VL: null, L: 0.87, N: 1.00, H: 1.07, VH: 1.15, EH: null },
        },
        PERSONAL: {
            CAN: { VL: 1.46, L: 1.19, N: 1.00, H: 0.86, VH: 0.71, EH: null },
            EAN: { VL: 1.29, L: 1.13, N: 1.00, H: 0.91, VH: 0.82, EH: null },
            CPRO: { VL: 1.42, L: 1.17, N: 1.00, H: 0.86, VH: 0.70, EH: null },
            ESO: { VL: 1.21, L: 1.12, N: 1.00, H: 0.96, VH: null, EH: null },
            ELP: { VL: 1.14, L: 1.10, N: 1.00, H: 0.95, VH: null, EH: null },
        },
        PROJECT: {
            UTP: { VL: 1.24, L: 1.10, N: 1.00, H: 0.91, VH: 0.82, EH: null },
            UHS: { VL: 1.24, L: 1.10, N: 1.00, H: 0.91, VH: 0.83, EH: 0.70 },
            RPL: { VL: 1.23, L: 1.08, N: 1.00, H: 1.04, VH: 1.10, EH: null },
        },
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        const parsedValue = id === 'mode' ? value : parseFloat(value);
        setFormData((prevData) => ({ ...prevData, [id]: parsedValue }));
    };

    const handleCostDriverChange = (option: string, value: string) => {
        setSelectedCostDrivers((prev) => {
            const updatedCostDrivers = { ...prev, [option]: value };
            const selectedValuesArray = Object.values(updatedCostDrivers).map(Number);
            setFormData((prevData) => ({
                ...prevData,
                costDrivers: selectedValuesArray,
            }));
            return updatedCostDrivers;
        });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const result = MethodsService.cocomo(formData);
            setEstimationResult(result); // Store the result in state
            console.log(result);
            console.log('Selected Cost Drivers Array:', formData.costDrivers);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSwitchChange = () => {
        cpmModal.onOpen();
    };

    // Función para manejar el cálculo del CPM y actualizar el estado en formData
    const handleCpmCalculation = (total: number) => {
        setFormData((prevData) => ({
            ...prevData,
            cpm: total,
        }));
    };

    return (
        <Container maxW="full">
            <Box pt={12} m={4}>
                <Text fontSize="2xl" mb={4}>COCOMO</Text>
                <Text mb={8}>Welcome back, nice to see you again!</Text>

                <Container as="form" onSubmit={handleSubmit} maxW="full">
                    <VStack spacing={8}>
                        <Stack direction={['column', 'row']} spacing={4} align="center" w="full">
                            <FormControl id="mode" isRequired>
                                <FormLabel>Mode</FormLabel>
                                <Select
                                    id="mode"
                                    placeholder="Select mode"
                                    value={formData.mode}
                                    onChange={handleChange}
                                >
                                    <option value="Organico">Organico</option>
                                    <option value="Moderado">Moderado</option>
                                    <option value="Embedido">Embedido</option>
                                </Select>
                            </FormControl>

                            <FormControl id="kdlc" isRequired>
                                <FormLabel>KDLC</FormLabel>
                                <Input
                                    id="kdlc"
                                    placeholder="KDLC"
                                    type="number"
                                    value={formData.kdlc}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl id="cpm" isRequired>
                                <FormLabel>CPM</FormLabel>
                                <Input
                                    id="cpm"
                                    placeholder="CPM"
                                    type="number"
                                    value={formData.cpm}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Stages?</FormLabel>
                                <Switch id='stages' onChange={handleSwitchChange} />
                            </FormControl>
                        </Stack>

                        <FormControl id="costdrivers">
                            <Text mb={4}>Cost Drivers</Text>
                            <Accordion defaultIndex={[0]} allowMultiple>
                                {Object.entries(costDrivers).map(([label, options]) => (
                                    <CostDriver
                                        key={label}
                                        label={label}
                                        options={options}
                                        selectedValues={selectedCostDrivers}
                                        onChange={handleCostDriverChange}
                                    />
                                ))}
                            </Accordion>
                        </FormControl>

                        <Button variant="solid" type="submit" isLoading={loading} size="lg" colorScheme="blue">
                            Estimate
                        </Button>
                    </VStack>
                </Container>

                <CpmModal
                    isOpen={cpmModal.isOpen}
                    onClose={cpmModal.onClose}
                    onCalculate={handleCpmCalculation} // Pasamos la función de cálculo de CPM
                />

                {estimationResult && (
                    <Box mt={8}>
                        <Text fontSize="xl" mb={4}>Estimation Results</Text>
                        <Box borderWidth="1px" borderRadius="lg" p={4}>
                            <FormControl id="esf">
                                <FormLabel>ESF</FormLabel>
                                <Input
                                    type="text"
                                    value={estimationResult.esf.toFixed(2)}
                                    isReadOnly
                                />
                            </FormControl>
                            <FormControl id="tdes" mt={4}>
                                <FormLabel>TDES</FormLabel>
                                <Input
                                    type="text"
                                    value={estimationResult.tdes.toFixed(2)}
                                    isReadOnly
                                />
                            </FormControl>
                            <FormControl id="costo" mt={4}>
                                <FormLabel>Costo</FormLabel>
                                <Input
                                    type="text"
                                    value={estimationResult.costo.toFixed(2)}
                                    isReadOnly
                                />
                            </FormControl>
                            <FormControl id="n" mt={4}>
                                <FormLabel>N</FormLabel>
                                <Input
                                    type="text"
                                    value={estimationResult.n.toFixed(2)}
                                    isReadOnly
                                />
                            </FormControl>
                            <FormControl id="productividad" mt={4}>
                                <FormLabel>Productividad</FormLabel>
                                <Input
                                    type="text"
                                    value={estimationResult.productividad.toFixed(2)}
                                    isReadOnly
                                />
                            </FormControl>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Cocomo;
