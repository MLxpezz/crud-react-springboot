import { deleteEmployee } from "../js/requests";

const DelButton = ({id}) => {

    const buttonHandler = () => {
        deleteEmployee(id);
    }

    return (
        <button onClick={() => buttonHandler()}>Eliminar</button>
    );
}

export default DelButton;