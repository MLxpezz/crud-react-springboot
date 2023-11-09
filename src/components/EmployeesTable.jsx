import { useEffect, useState } from "react";
import { allEmployees } from "../js/requests";
import DelButton from "./DelButton";
import UpdateButton from "./UpdateButton";
import styled from "styled-components";


const TableContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Table = styled.table`
  width: 100%;
  background-color: #2a3338;
  color: #fff;
`;

const Td = styled.td`
  padding: 8px;
`

const Tr = styled.tr`
  text-align: center;

  &:nth-child(n+1) {
    background-color: rgb(61, 68, 73);
  }
`;

const AddButton = styled.button`
  margin-bottom: 20px;
  padding: 8px;
  background-color: transparent;
  border: 3px solid #2a3338;
  color: #fff;
  align-self: start;
`

const EmployeesTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await allEmployees();
      setEmployees(result);
      console.log(employees);
    })();
  }, []);

  return (
    <TableContainer>
    <AddButton>Agregar nuevo empleado</AddButton>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Phone</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <Tr key={employee.id}>
              <Td>{employee.id}</Td>
              <Td>{`${employee.name} ${employee.lastName}`}</Td>
              <Td>{employee.email}</Td>
              <Td>{employee.phone}</Td>
              <Td>
                <DelButton id={employee.id} />
                <UpdateButton id={employee.id} />
              </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
    </TableContainer>
  );
};

export default EmployeesTable;
