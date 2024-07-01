import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    Text,
    AccordionIcon,
  } from "@chakra-ui/react";
  
  type CostDriverProps = {
    label: string;
    options: { [key: string]: { [key: string]: number | null } };
    selectedValues: { [key: string]: string };
    onChange: (group: string, value: string) => void;
  };
  
  const CostDriver = ({ label, options, selectedValues, onChange }: CostDriverProps) => {
    return (
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {label}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontWeight="bold" mb={2}>
              {label}
            </Text>
            {Object.entries(options).map(([optionLabel, values]) => (
              <div key={optionLabel} style={{ marginBottom: "1em" }}>
                <FormLabel>{optionLabel}:</FormLabel>
                <RadioGroup
                  value={selectedValues[optionLabel] || ""}
                  onChange={(value) => onChange(optionLabel, value)}
                >
                  <Stack spacing={4} direction="row">
                    {Object.entries(values).map(([level, cost]) => (
                      <Radio key={level} value={String(cost)} isDisabled={cost === null}>
                        {level}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </div>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };
  
  export default CostDriver;
  