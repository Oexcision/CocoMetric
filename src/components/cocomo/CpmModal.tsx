import React, { FormEvent, useState } from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    VStack,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Checkbox,
} from "@chakra-ui/react";

import { StageType, StageValues, StagePercentages } from '../../client/models'

interface CpmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCalculate: (total: number, stagePercentages: StagePercentages) => void;
    onSubmit: () => void;
}



const CpmModal = ({ isOpen, onClose, onCalculate, onSubmit }: CpmModalProps) => {
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

        let totalWeightedCost = 0;
        let totalPercentage = 0;
        let stagePercentages: StagePercentages = {
            requirements: 0,
            analysis: 0,
            design: 0,
            development: 0,
            testing: 0
        };

        {/*
            (Object.keys(values) as StageType[]).forEach((key) => {
            const stage = values[key];
            if (!stage.disabled && stage.percentage !== "" && stage.cost !== "") {
                const percentage = parseFloat(stage.percentage) / 100; // Convertir a decimal
                const cost = parseFloat(stage.cost);
                const product = percentage * cost;
                total += product;
                stagePercentages[key] = percentage;
            }
        });*/}

        (Object.keys(values) as StageType[]).forEach((key) => {
            const stage = values[key];
            if (!stage.disabled && stage.percentage !== "" && stage.cost !== "") {
                const percentage = parseFloat(stage.percentage);
                const cost = parseFloat(stage.cost);
                totalWeightedCost += percentage * cost;
                totalPercentage += percentage;
                stagePercentages[key] = percentage / 100;
            }
        });

        let  weightedAverageCpm  = totalPercentage  > 0 ? totalWeightedCost / totalPercentage : 0;
        weightedAverageCpm = Number(weightedAverageCpm.toFixed(2));

        // Llamamos a la función callback con el total calculado
        //onCalculate(total, stagePercentages);
        onCalculate(weightedAverageCpm, stagePercentages);
        onSubmit();
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
                    {/* <ModalFooter gap={3}>
                        <Button type="submit" colorScheme="blue">
                            Calculate
                        </Button>
                    </ModalFooter> */}
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
                    placeholder="Example: %: 0.4 or Months: 4 or 4.8"
                    type="number"
                    value={values.percentage}
                    onChange={(e) => handlePercentageChange(e, id)}
                />
            </FormControl>
            <FormControl id={`${id}Cost`} isDisabled={values.disabled}>
                <FormLabel>{`${label} Cost`}</FormLabel>
                <Input
                    placeholder="Example: 1000"
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
