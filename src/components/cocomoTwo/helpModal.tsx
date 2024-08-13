import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tab,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import GuideTable from "./GuideTable";
import ValueTable from "./ValueTable";
import LevelTable from "./LevelTable";

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HelpModal = ({ isOpen, onClose }: HelpModalProps) =>{

    return(
        <>
            <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    size={{ base: "sm", md: "lg", lg: "6xl" }}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Help</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>

                            <Tabs variant='soft-rounded' colorScheme='green' isFitted>
                                <TabList>
                                    <Tab>Guide</Tab>
                                    <Tab>Value</Tab>
                                    <Tab>Levels</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <GuideTable/>
                                    </TabPanel>
                                    <TabPanel>
                                        <ValueTable/>
                                    </TabPanel>
                                    <TabPanel>
                                        <LevelTable/>
                                    </TabPanel>
                                </TabPanels>

                            </Tabs>

                        </ModalBody>
                    <ModalFooter gap={3}>
                        <Button onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default HelpModal