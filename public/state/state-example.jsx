class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Click me!!!",
            clickCount: 0
        };
    }
    update() {
        this.setState(
            (prevState, props) => {
                return {
                    clickCount: prevState.clickCount + 1,
                    text: "Clicked"
                };
            });

    }
    render() {
        return (
            <button onClick={()=>this.update()}>
                {this.state.text}:{this.state.clickCount}
            </button>
        )
    }
}
ReactDOM.render(<Button></Button>,document.getElementById("state1"));