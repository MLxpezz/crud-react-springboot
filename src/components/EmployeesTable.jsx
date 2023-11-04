import { useEffect, useState } from "react";
import { allEmployees } from "../js/requests";
import DelButton from "./DelButton";
import UpdateButton from "./UpdateButton";

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
    <table>
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
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{`${employee.name} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>
                <DelButton id={employee.id} />
                <UpdateButton id={employee.id} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeesTable;
