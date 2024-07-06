import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const ValueTable = () => {
    return(
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
                        <Td>0.75</Td>
                        <Td>0.88</Td>
                        <Td>1.00</Td>
                        <Td>1.15</Td>
                        <Td>1.40</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>TBD</Td>
                        <Td></Td>
                        <Td>0.94</Td>
                        <Td>1.00</Td>
                        <Td>1.08</Td>
                        <Td>1.16</Td>
                    </Tr>
                    <Tr>
                        <Td>CPR</Td>
                        <Td>0.70 </Td>
                        <Td>0.85</Td>
                        <Td>1.00</Td>
                        <Td>1.15</Td>
                        <Td>1.30</Td>
                        <Td>1.65</Td>
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
                        <Td>1.30</Td>
                        <Td>1.66</Td>
                    </Tr>
                    <Tr>
                        <Td>RMP</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>1.00</Td>
                        <Td>1.06</Td>
                        <Td>1.30</Td>
                        <Td>1.58</Td>
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
                        <Td>TRC</Td>
                        <Td></Td>
                        <Td>0.87</Td>
                        <Td>1.00</Td>
                        <Td>1.07</Td>
                        <Td>1.15</Td>
                        <Td></Td>
                    </Tr>

                    <Tr>
                        <Td colSpan={7} textAlign="center">PERSONAL</Td>
                    </Tr>

                    <Tr>
                        <Td>CAN</Td>
                        <Td>1.46</Td>
                        <Td>1.19</Td>
                        <Td>1.00</Td>
                        <Td>0.86</Td>
                        <Td>0.71</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>EAN</Td>
                        <Td>1.29</Td>
                        <Td>1.13</Td>
                        <Td>1.00</Td>
                        <Td>0.91</Td>
                        <Td>0.82</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>CPRO</Td>
                        <Td>1.42</Td>
                        <Td>1.17</Td>
                        <Td>1.00 </Td>
                        <Td>0.86</Td>
                        <Td>0.70</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>ESO</Td>
                        <Td>1.21</Td>
                        <Td>1.12</Td>
                        <Td>1.00</Td>
                        <Td>0.96</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>ELP</Td>
                        <Td>1.14</Td>
                        <Td>1.10</Td>
                        <Td>1.00</Td>
                        <Td>0.95</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>

                    <Tr>
                        <Td colSpan={7} textAlign="center">PROYECTO</Td>
                    </Tr>

                    <Tr>
                        <Td>UTP</Td>
                        <Td>1.24</Td>
                        <Td>1.10</Td>
                        <Td>1.00</Td>
                        <Td>0.91</Td>
                        <Td>0.82</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                    <Td>UHS</Td>
                        <Td>1.24</Td>
                        <Td>1.10</Td>
                        <Td>1.00</Td>
                        <Td>0.91</Td>
                        <Td>0.83</Td>
                        <Td>0.70</Td>
                    </Tr>
                    <Tr>
                        <Td>RPL</Td>
                        <Td>1.23</Td>
                        <Td>1.08</Td>
                        <Td>1.00</Td>
                        <Td>1.04</Td>
                        <Td>1.10</Td>
                        <Td></Td>
                    </Tr>


                    </Tbody>
                </Table>
            </TableContainer>

            
        </>
    )
}

export default ValueTable