import React, { FormEvent, useState } from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    VStack,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Checkbox,
} from "@chakra-ui/react";

interface CpmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCalculate: (total: number) => void; // Nuevo prop para pasar el total calculado
}

// Definimos una interfaz para describir el tipo de valores esperados
interface StageValues {
    percentage: string;
    cost: string;
    disabled: boolean;
}

// Definimos un tipo para las etapas
type StageType = "requirements" | "analysis" | "design" | "development" | "testing";

const CpmModal = ({ isOpen, onClose, onCalculate }: CpmModalProps) => {
    const [values, setValues] = useState<{
        [key in StageType]: StageValues;
    }>({
        requirements: { percentage: "", cost: "", disabled: false },
        analysis: { percentage: "", cost: "", disabled: false },
        design: { percentage: "", cost: "", disabled: false },
        development: { percentage: "", cost: "", disabled: false },
        testing: { percentage: "", cost: "", disabled: false },
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        let total = 0;

        Object.keys(values).forEach((key) => {
            const stage = values[key as StageType];
            if (!stage.disabled && stage.percentage !== "" && stage.cost !== "") {
                const product = parseFloat(stage.percentage) * parseFloat(stage.cost);
                total += product;
            }
        });

        // Llamamos a la función callback con el total calculado
        onCalculate(total);

        // Cerramos el modal
        onClose();
    };

    const handlePercentageChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: StageType
    ) => {
        const { value } = e.target;
        setValues((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                percentage: value,
            },
        }));
    };

    const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>, id: StageType) => {
        const { value } = e.target;
        setValues((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                cost: value,
            },
        }));
    };

    const handleCheckboxChange = (id: StageType) => {
        setValues((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                percentage: "",
                cost: "",
                disabled: !prev[id].disabled,
            },
        }));
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={{ base: "sm", md: "lg", lg: "xl" }}
                isCentered
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit}>
                    <ModalHeader>CPM per Stages</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <VStack spacing={4} align="stretch">
                            {Object.keys(values).map((key) => (
                                <RowWithCheckbox
                                    key={key}
                                    id={key as StageType}
                                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                                    values={values[key as StageType]}
                                    handlePercentageChange={handlePercentageChange}
                                    handleCostChange={handleCostChange}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            ))}
                        </VStack>
                    </ModalBody>
                    <ModalFooter gap={3}>
                        <Button type="submit" colorScheme="blue">
                            Calculate
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

interface RowWithCheckboxProps {
    id: StageType;
    label: string;
    values: StageValues;
    handlePercentageChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        id: StageType
    ) => void;
    handleCostChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        id: StageType
    ) => void;
    handleCheckboxChange: (id: StageType) => void;
}

const RowWithCheckbox = ({
    id,
    label,
    values,
    handlePercentageChange,
    handleCostChange,
    handleCheckboxChange,
}: RowWithCheckboxProps) => {
    return (
        <HStack spacing={4} align="center">
            <FormControl id={`${id}Percentage`} isDisabled={values.disabled}>
                <FormLabel>{`${label} Percentage`}</FormLabel>
                <Input
                    placeholder="Percentage"
                    type="number"
                    value={values.percentage}
                    onChange={(e) => handlePercentageChange(e, id)}
                />
            </FormControl>
            <FormControl id={`${id}Cost`} isDisabled={values.disabled}>
                <FormLabel>{`${label} Cost`}</FormLabel>
                <Input
                    placeholder="Cost"
                    type="number"
                    value={values.cost}
                    onChange={(e) => handleCostChange(e, id)}
                />
            </FormControl>
            <Checkbox
                id={`${id}Check`}
                onChange={() => handleCheckboxChange(id)}
            />
        </HStack>
    );
};

export default CpmModal;
