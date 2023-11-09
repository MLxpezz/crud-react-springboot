import UpdateForm from "./components/UpdateForm";
import EmployeesTable from "./components/EmployeesTable";
import AddEmployee from "./components/AddEmployee";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #474747;
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <EmployeesTable />
    </Container>
  );
}

export default App;
