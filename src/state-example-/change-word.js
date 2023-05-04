import { useContext, useState } from "react";
function ChangeWord() {
    const [word, setWord] = useState("Apple");
    const changeFruit = () => setWord("Banana");
    return (<>
        <h1>{word} is my favorite fruit</h1>
        <button onClick={changeFruit}>Click me</button></>

    )
}
export default ChangeWord