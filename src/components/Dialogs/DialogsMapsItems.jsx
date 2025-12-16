export const Message = (props) => {
    return (
    <div> 
        <p>{props.messages}</p> 
        <button onClick={() => props.DeleteMessage(props.id)}>Delete</button>
    </div>
);
};