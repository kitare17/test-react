function Card(props) {

    return (
        <div className="card">
            <h1>Task: Add three Card elements</h1>
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>

    )
};
export default Card;