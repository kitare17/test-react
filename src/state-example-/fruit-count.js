
function ShowFruit (props){
    return (
        <>
        {props.listFruit.map(f=><p key={f.id}>{f.fruitName} </p>)}
        </>
    )
}

function CountFruit(props){
    return(
        <> <p> Result {props.listFruit.length}</p></>
    )
}
export {ShowFruit,CountFruit};