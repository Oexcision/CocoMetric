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

const LevelTable = () => {
    return(
        <>
        <TableContainer overflowX="auto">
            <Table variant="simple" size="sm" borderWidth="1px">
                <TableCaption placement="top">Software Complexity Levels</TableCaption>
                <Thead>
                <Tr>
                    <Th>Complexity</Th>
                    <Th>Control Operations</Th>
                    <Th>Computational Operations</Th>
                    <Th>Device-dependent Operations</Th>
                    <Th>Data Management Operations</Th>
                    <Th>User Interface Management Operations</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td fontWeight="bold">Very Low</Td>
                    <Td>Straight-line code with a few non-nested structured programming operators: DOs, CASEs, IF-THEN-ELSEs. Simple module composition via procedure calls or simple scripts.</Td>
                    <Td>Evaluation of simple expressions: e.g., A=B+C*(D-E)</Td>
                    <Td>Simple read, write statements with simple formats.</Td>
                    <Td>Simple arrays in main memory. Simple COTS-DB queries, updates.</Td>
                    <Td>Simple input forms, report generators.</Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Low</Td>
                    <Td> Straightforward nesting of structured programming operators. Mostly simple predicates.</Td>
                    <Td> Evaluation of moderate-level expressions (e.g., D=SQRT(B**2-4*A*C))</Td>
                    <Td> No cognizance needed of particular processor or I/O device characteristics. I/O done at GET/PUT level.</Td>
                    <Td> Single file subsetting with no data structure changes; no edits, no intermediate files. Moderately complex COTS-DB queries, updates.</Td>
                    <Td> Use of simple graphic user interface (GUI) builders.</Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Nominal</Td>
                    <Td>Mostly simple nesting. Some intermodule control. Decision tables. Simple callbacks or message passing, including middleware-supported distributed processing</Td>
                    <Td>Use of standard math and statistical routines. Basic matrix/vector operations.</Td>
                    <Td>I/O processing includes device selection, status checking and error processing</Td>
                    <Td>Multi-file input and single file output. Simple structural changes, simple edits. Complex COTS-DB queries, updates.</Td>
                    <Td>Simple use of widget set.</Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">High</Td>
                    <Td>Highly nested structured programming constructs with many compound predicates. Queue and stack control. Homogeneous, distributed processing. Single processor soft real-time control.</Td>
                    <Td>Basic numerical analysis: multivariate interpolation, ordinary differential equations. Basic truncation, roundoff concerns.</Td>
                    <Td>Operations at physical I/O level (physical storage address translations; seeks, reads, etc.). Optimized I/O overlap.</Td>
                    <Td>Simple triggers activated by data stream contents. Complex data restructuring.</Td>
                    <Td>Widget set development and extension. Simple voice I/O, multimedia.</Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Very High</Td>
                    <Td>Reentrant and recursive coding. Fixed-priority interrupt handling. Task synchronization, complex callbacks, heterogeneous distributed processing. Single-processor hard real-time control.</Td>
                    <Td>Difficult but structured numerical analysis: near-singular matrix equations, partial differential equations. Simple parallelization.</Td>
                    <Td>Routines for interrupt diagnosis, servicing, masking. Communication line handling. Performance-intensive embedded systems.</Td>
                    <Td>Distributed database coordination. Complex triggers. Search optimization.</Td>
                    <Td>Moderately complex 2D/3D, dynamic graphics, multimedia.</Td>
                </Tr>
                <Tr>
                    <Td fontWeight="bold">Extra High</Td>
                    <Td>Multiple resource scheduling with dynamically changing priorities. Microcode-level control. Distributed hard real-time control.</Td>
                    <Td>Difficult and unstructured numerical analysis; highly accurate analysis of noisy, stochastic data. Complex parallelization.</Td>
                    <Td>Device-timing-dependent coding, micro-programmed operations. Performance-critical embedded systems.</Td>
                    <Td>Highly coupled, dynamic relational and object structures. Natural language data management.</Td>
                    <Td>Complex multimedia, virtual reality.</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>   
        </>
    )
}
export default LevelTable