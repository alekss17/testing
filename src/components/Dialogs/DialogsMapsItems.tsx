
interface PropsType {
    id: string;
    messages: string;
    DeleteMessage: (Id: string) => void
}

export const Message = (props: PropsType) => {
    return (
    <div> 
        <p>{props.messages}</p> 
        <button onClick={() => props.DeleteMessage(props.id)}>Delete</button>
    </div>
);
};