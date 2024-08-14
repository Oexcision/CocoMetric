import React from 'react';
import {
    VStack,
    Stack,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react";

import Organico from '/assets/images/Equations/Organico.svg';
import Moderado from '/assets/images/Equations/Moderado.svg';
import Embedido from '/assets/images/Equations/Embedido.svg';
import Costo from '/assets/images/Equations/Costo.svg';
import Trabajadores from '/assets/images/Equations/Trabajadores.svg';
import Productividad from '/assets/images/Equations/Productividad.svg';
import ESFCocomoII from '/assets/images/Equations/COCOMO_II.png';

interface EquationsModalProps {
    isOpen: boolean;
    onClose: () => void;
    mode: string;
}

const EquationsModal: React.FC<EquationsModalProps> = ({ isOpen, onClose, mode }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent maxW="70vw">
                <ModalHeader>Equations</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4} align="center">
                        {mode === 'Organico' && <Image src={Organico} alt="organico" p={3} maxWidth="100%" />}
                        {mode === 'Moderado' && <Image src={Moderado} alt="moderado" p={3} maxWidth="100%" />}
                        {mode === 'Embedido' && <Image src={Embedido} alt="embedido" p={3} maxWidth="100%" />}
                        {mode === 'COCOMO-II' && <Image src={ESFCocomoII} alt="embedido" p={3} maxWidth="100%" />}
                        
                        <Stack direction={["column", "row"]} spacing={2} justifyContent="center" width="100%">
                            <Image src={Costo} alt="costo" p={3} maxWidth={["100%", "25%"]} height="auto" />
                            <Image src={Trabajadores} alt="trabajadores" p={3} maxWidth={["100%", "20%"]} height="auto" />
                            <Image src={Productividad} alt="productividad" p={3} maxWidth={["100%", "24%"]} height="auto" />
                        </Stack>
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default EquationsModal;
