import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';

const ValueTable = () => {
    return (
        <>
            <TableContainer>
                <Table variant="simple" size="sm" borderWidth="2px">
                    <TableCaption placement="top">PRODUCTO</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>INDICADOR</Th>
                            <Th>MUY BAJO</Th>
                            <Th>BAJO</Th>
                            <Th>NOMINAL</Th>
                            <Th>ALTO</Th>
                            <Th>MUY ALTO</Th>
                            <Th>EXTRA ALTO</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>RSS</Td>
                            <Td>0.82</Td>
                            <Td>0.92</Td>
                            <Td>1.00</Td>
                            <Td>1.10</Td>
                            <Td>1.26</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>TBD</Td>
                            <Td></Td>
                            <Td>0.90</Td>
                            <Td>1.00</Td>
                            <Td>1.14</Td>
                            <Td>1.28</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>CPR</Td>
                            <Td>0.73</Td>
                            <Td>0.87</Td>
                            <Td>1.00</Td>
                            <Td>1.17</Td>
                            <Td>1.34</Td>
                            <Td>1.74</Td>
                        </Tr>
                        <Tr>
                            <Td>RUSE</Td>
                            <Td></Td>
                            <Td>0.95</Td>
                            <Td>1.00</Td>
                            <Td>1.07</Td>
                            <Td>1.15</Td>
                            <Td>1.24</Td>
                        </Tr>
                        <Tr>
                            <Td>DOC</Td>
                            <Td>0.81</Td>
                            <Td>0.91</Td>
                            <Td>1.00</Td>
                            <Td>1.11</Td>
                            <Td>1.23</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td colSpan={7} textAlign="center">PLATAFORMA(COMPUTADOR)</Td>
                        </Tr>
                        <Tr>
                            <Td>RTE</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td>1.00</Td>
                            <Td>1.11</Td>
                            <Td>1.29</Td>
                            <Td>1.63</Td>
                        </Tr>
                        <Tr>
                            <Td>RMP</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td>1.00</Td>
                            <Td>1.05</Td>
                            <Td>1.17</Td>
                            <Td>1.46</Td>
                        </Tr>
                        <Tr>
                            <Td>VMC</Td>
                            <Td></Td>
                            <Td>0.87</Td>
                            <Td>1.00</Td>
                            <Td>1.15</Td>
                            <Td>1.30</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td colSpan={7} textAlign="center">PERSONAL</Td>
                        </Tr>
                        <Tr>
                            <Td>CAN</Td>
                            <Td>1.42</Td>
                            <Td>1.19</Td>
                            <Td>1.00</Td>
                            <Td>0.85</Td>
                            <Td>0.71</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>EAPL</Td>
                            <Td>1.22</Td>
                            <Td>1.10</Td>
                            <Td>1.00</Td>
                            <Td>0.88</Td>
                            <Td>0.81</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>CPRO</Td>
                            <Td>1.34</Td>
                            <Td>1.15</Td>
                            <Td>1.00</Td>
                            <Td>0.88</Td>
                            <Td>0.76</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>CPER</Td>
                            <Td>1.29</Td>
                            <Td>1.12</Td>
                            <Td>1.00</Td>
                            <Td>0.90</Td>
                            <Td>0.81</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>EPLA</Td>
                            <Td>1.19</Td>
                            <Td>1.09</Td>
                            <Td>1.00</Td>
                            <Td>0.91</Td>
                            <Td>0.85</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>ELP</Td>
                            <Td>1.20</Td>
                            <Td>1.09</Td>
                            <Td>1.00</Td>
                            <Td>0.91</Td>
                            <Td>0.84</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td colSpan={7} textAlign="center">PROYECTO</Td>
                        </Tr>
                        <Tr>
                            <Td>UHS</Td>
                            <Td>1.17</Td>
                            <Td>1.09</Td>
                            <Td>1.00</Td>
                            <Td>0.90</Td>
                            <Td>0.78</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>RPL</Td>
                            <Td>1.43</Td>
                            <Td>1.14</Td>
                            <Td>1.00</Td>
                            <Td>0.96</Td>
                            <Td>0.86</Td>
                            <Td></Td>
                        </Tr>
                        <Tr>
                            <Td>DMS</Td>
                            <Td>1.22</Td>
                            <Td>1.09</Td>
                            <Td>1.00</Td>
                            <Td>0.93</Td>
                            <Td>0.86</Td>
                            <Td>0.80</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ValueTable;