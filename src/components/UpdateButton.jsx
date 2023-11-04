const UpdateButton = ({id}) => {

    const buttonHandler = () => {
        console.log(id);
    }

    return (
        <button onClick={() => buttonHandler()}>Actualizar</button>
    );
}

export default UpdateButton;