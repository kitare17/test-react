function Bag(props) {
    const bag={
        color:"red",
        background:"yellow"

    }
    return(
          <div style={bag}>
            {props.children}
          </div>
    );
}
export default Bag;