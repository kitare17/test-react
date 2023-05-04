class Welcome extends React.Component{
    render(){
            return (
                <div className="welcome">
                    <h3>Hi {this.props.name}</h3>
                    <i>{this.props.message}</i>
                </div>
            );
    }

}
Welcome.defaultProps={
    name:"Duma",
    message:"Get out!!!!"
}
const element1= document.getElementById("id1")
const element2= document.getElementById("id2")
ReactDOM.render(
    <Welcome name='Kitare' message="Welcome the excellent student"></Welcome>,element1
)
ReactDOM.render(
    <Welcome></Welcome>,element2
)