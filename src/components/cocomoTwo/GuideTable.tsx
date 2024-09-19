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

const GuideTable = () => {
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
                        <Td>Ligeros inconvenientes</Td>
                        <Td>Bajas perdidas fácilmente recuperables</Td>
                        <Td>Moderadas perdidas fácilmente recuperables</Td>
                        <Td>Grandes perdidas financieras</Td>
                        <Td>Pérdidas humanas</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>TBD</Td>
                        <Td></Td>
                        <Td>KB/KLDC &lt;= 10</Td>
                        <Td>KB/KLDC &gt; 10 y &lt;= 100</Td>
                        <Td>KB/KLDC &gt;100 y &lt;= 1000</Td>
                        <Td>KB/KLDC &gt; = 1000</Td>
                    </Tr>
                    <Tr>
                        <Td>CPR</Td>
                        <Td colSpan={6} textAlign="center">Ver Tabla Adjunta</Td>
                    </Tr>

                    <Tr>
                        <Td colSpan={7} textAlign="center">PLATAFORMA(COMPUTADOR)</Td>
                    </Tr>

                    <Tr>
                        <Td>RTE</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>&lt; del 50% del uso del T. disponible</Td>
                        <Td>&lt; del 70% del uso del T. disponible</Td>
                        <Td>&lt; del 85% del uso del T. disponible</Td>
                        <Td>&lt; del 95% del uso del T. disponible</Td>
                    </Tr>
                    <Tr>
                        <Td>RMP</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>&lt; del 50% del uso de la memoria disponible</Td>
                        <Td>&lt; del 70% del uso de la memoria disponible</Td>
                        <Td>&lt; del 85% del uso de la memoria disponible</Td>
                        <Td>&lt; del 95% del uso de la memoria disponible</Td>
                    </Tr>
                    <Tr>
                        <Td>VMC</Td>
                        <Td></Td>
                        <Td>&gt; 12 meses y &lt; 1 mes</Td>
                        <Td>6 meses y &lt; 2 semanas</Td>
                        <Td>&gt; 2 meses y &lt; 1 semana</Td>
                        <Td>&gt; 2 semanas y &lt; 2 días</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>TRC</Td>
                        <Td></Td>
                        <Td>Interactiva</Td>
                        <Td>&lt; 4 hs</Td>
                        <Td>4 - 12 hs</Td>
                        <Td>&gt; 12 hs</Td>
                        <Td></Td>
                    </Tr>

                    <Tr>
                        <Td colSpan={7} textAlign="center">PERSONAL</Td>
                    </Tr>

                    <Tr>
                        <Td>CAN</Td>
                        <Td>15 percentiles</Td>
                        <Td>35 percentiles</Td>
                        <Td>55 percentiles</Td>
                        <Td>75 percentiles</Td>
                        <Td>90 percentiles</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>EAN</Td>
                        <Td>3 meses</Td>
                        <Td>1 año</Td>
                        <Td>3 años</Td>
                        <Td>6 años</Td>
                        <Td>12 años</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>CPRO</Td>
                        <Td>15 percentiles</Td>
                        <Td>35 percentiles</Td>
                        <Td>55 percentiles</Td>
                        <Td>75 percentiles</Td>
                        <Td>90 percentiles</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>ESO</Td>
                        <Td>1 mes</Td>
                        <Td>4 meses</Td>
                        <Td>1 año</Td>
                        <Td>3 años</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>ELP</Td>
                        <Td>1 mes</Td>
                        <Td>4 meses</Td>
                        <Td>1 año</Td>
                        <Td>3 años</Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>

                    <Tr>
                        <Td colSpan={7} textAlign="center">PROYECTO</Td>
                    </Tr>

                    <Tr>
                        <Td>UTP</Td>
                        <Td>No se usan</Td>
                        <Td>Se usan experimentalmente</Td>
                        <Td>Tienen algún uso</Td>
                        <Td>Tienen bastante uso</Td>
                        <Td>Son de uso rutinario</Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                    <Td>UHS</Td>
                        <Td>No se usan herramientas</Td>
                        <Td>Bibliotecas de programas</Td>
                        <Td>Bibliotecas de 100% TDES</Td>
                        <Td>Generadores 130% TDES</Td>
                        <Td>Generadores y CASE 160% TDES nominal</Td>
                        <Td>Programación Visual</Td>
                    </Tr>
                    <Tr>
                        <Td>RPL</Td>
                        <Td>75% TDES nominal</Td>
                        <Td>85% TDES nominal</Td>
                        <Td>100% TDES nominal</Td>
                        <Td>130% TDES nominal</Td>
                        <Td>160% TDES nominal</Td>
                        <Td></Td>
                    </Tr>


                    </Tbody>
                </Table>
            </TableContainer>

            
        </>
    )
}

export default GuideTable