function MyButton({onClick,children}) {
    return(
    <button onClick={khoa=>{
        khoa.stopPropagation();
        onClick();
    }} > {children} </button>
    )
}
function ButtonChildren({onClick,children}) {
    return (
        <div className="parent-div" onClick={()=>alert(`Parent component`)}>
                <MyButton onClick={()=>alert(`Children1`)}>Children1</MyButton>
                <MyButton onClick={()=>alert(`Children2`)}>Children2</MyButton>
        </div>
    )
}
export default ButtonChildren
