

const DelButton = ({id}) => {

    const buttonHandler = () => {
        console.log(id);
    }

    return (
        <button onClick={() => buttonHandler()}>Eliminar</button>
    );
}

export default DelButton;