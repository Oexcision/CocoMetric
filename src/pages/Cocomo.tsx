import { useState, ChangeEvent, FormEvent } from 'react';
import { Box, Container, Text, FormControl, Input, Button, FormLabel, Select } from "@chakra-ui/react";
import { CocomoForm } from '../client/models';
import { MethodsService } from '../client/services';

const Cocomo = () => {
    const [formData, setFormData] = useState<CocomoForm>({ mode: '', kdlc: 0, cpm: 0 });
    const [loading, setLoading] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = event.target;
        const parsedValue = id === 'mode' ? value : parseFloat(value);
        setFormData((prevData) => ({ ...prevData, [id]: parsedValue }));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        
        try {
            console.log(MethodsService.cocomo(formData));
            
        } catch (error) {

        }
        finally{
            setLoading(false);
        }
    };

    return (
        <Container maxW="full">
            <Box pt={12} m={4}>
                <Text fontSize="2xl">
                    COCOMO
                </Text>
                <Text>Welcome back, nice to see you again!</Text>

                <Container
                    as="form"
                    onSubmit={handleSubmit}
                    maxW="full"
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-end"
                    gap={4}>

                    <FormControl id="mode">
                        <FormLabel>Mode: </FormLabel>
                        <Select
                            id='mode'
                            placeholder='Select mode'
                            value={formData.mode}
                            onChange={handleChange}>
                            <option value="Organico">Organico</option>
                            <option value="Moderado">Moderado</option>
                            <option value="Embedido">Embedido</option>
                        </Select>
                    </FormControl>
                    <FormControl id="kdlc">
                        <FormLabel>KDLC: </FormLabel>
                        <Input
                            id="kdlc"
                            placeholder="KDLC"
                            type="number"
                            value={formData.kdlc}
                            onChange={handleChange}
                            required
                        />
                    </FormControl>
                    <FormControl id="cpm">
                        <FormLabel>CPM: </FormLabel>
                        <Input
                            id="cpm"
                            placeholder="CPM"
                            type="number"
                            value={formData.cpm}
                            onChange={handleChange}
                            required
                        />
                    </FormControl>
                    <Button
                        variant="primary"
                        type="submit"
                        isLoading={loading}
                        size="lg">
                        Estimate
                    </Button>
                </Container>
            </Box>
        </Container>
    );
}

export default Cocomo;
