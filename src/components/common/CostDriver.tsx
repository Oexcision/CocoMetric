import { useState, useEffect } from "react";
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
  Tooltip,
} from "@chakra-ui/react";

type CostDriverProps = {
  label: string;
  options: { [key: string]: { [key: string]: number | null } };
  selectedValues: { [key: string]: string };
  onChange: (group: string, value: string) => void;
};

const CostDriver = ({ label, options, selectedValues, onChange }: CostDriverProps) => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [localSelectedValues, setLocalSelectedValues] = useState(selectedValues);

  useEffect(() => {
    const defaultValues = Object.keys(options).reduce((acc, optionLabel) => {
      if (!selectedValues[optionLabel]) {
        const defaultOption = Object.entries(options[optionLabel]).find(([level, cost]) => level === "N" && cost === 1);
        if (defaultOption) {
          acc[optionLabel] = String(defaultOption[1]);
        }
      } else {
        acc[optionLabel] = selectedValues[optionLabel];
      }
      return acc;
    }, {} as { [key: string]: string });

    setLocalSelectedValues(defaultValues);
    
    Object.entries(defaultValues).forEach(([group, value]) => {
      if (value !== selectedValues[group]) {
        onChange(group, value);
      }
    });
  }, [options, selectedValues, onChange]);

  const handleChange = (group: string, value: string) => {
    setLocalSelectedValues(prev => ({ ...prev, [group]: value }));
    onChange(group, value);
  };

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text fontWeight="bold" mb={2}>
                {label}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>

          {Object.entries(options).map(([optionLabel, values]) => (
            <div key={optionLabel} style={{ marginBottom: "1em" }}>
              <FormLabel>{optionLabel}:</FormLabel>
              <RadioGroup
                value={localSelectedValues[optionLabel] || ""}
                onChange={(value) => handleChange(optionLabel, value)}
              >
                <Stack spacing={4} direction="row">
                  {Object.entries(values).map(([level, cost]) => (
                    <Tooltip
                      key={level}
                      label={cost !== null ? cost.toFixed(2) : "N/A"}
                      isOpen={hoveredValue === `${optionLabel}-${level}`}
                    >
                      <Radio
                        value={String(cost)}
                        isDisabled={cost === null}
                        onMouseEnter={() => setHoveredValue(`${optionLabel}-${level}`)}
                        onMouseLeave={() => setHoveredValue(null)}
                      >
                        {level}
                      </Radio>
                    </Tooltip>
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