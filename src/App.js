//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro1 from './component/Intro1';
import Footer from './component/Footer';
import Bag from './component/Bag';
import Pear from './component/Pear';
import Naruto from './naruto.jpg';
import Card from './component/Card';  
import Guess from './component/Guess';
import Button from './Button';
import ButtonChildren from './component/ButtonChildren'
import {Hook,MyForm}   from './state-example-/state-example';
import ChangeWord from './state-example-/change-word';
import { useState } from 'react';
import { ShowFruit,CountFruit } from './state-example-/fruit-count';
// function Hello(){
//     return  <h1>Hello World</h1>;
// }

const bool= false;
function Randome() {
  const getRandomNum =  Math.floor((Math.random() * 9) + 1)
  const getRandomNum1 =  Math.floor((Math.random() * 9) + 1)
  const getRandomNum2 =  Math.floor((Math.random() * 9) + 1)
  return (
    <div>
      <h1>This is the number of today: {getRandomNum}</h1>
      <h1>This is the number of today: {getRandomNum1}</h1>
      <h1>This is the number of today: {getRandomNum2}</h1>
      <h1>{getRandomNum + getRandomNum1 + getRandomNum2}</h1>
    </div>

  );
};
function CheckBool(props){
  return(
      <h1>This is checked boolean: {props.values.toString()}</h1>
  );
};
function Image(props) {
  const myImage= <img src={Naruto} alt="image ne"></img>;
  return(
    <div>{myImage}</div>
    
  )
}
function App() {
  function ChangeMode(){
    var valueMode=true;
    
   
    function changeValue(){
      valueMode=!valueMode;
      document.getElementById("mode").style.color = (valueMode) ? "black" : "white";
      document.getElementById("mode").style.backgroundColor = (valueMode) ? "white" : "black";
      document.getElementById("myText").innerHTML=(valueMode) ? "White mode" : "Black mode" ;
      console.log(valueMode);
    }
    return (
     <div id="mode">
       <h1 id="myText">White mode</h1>
        <button onClick={changeValue}>Click me</button>
     </div>
    );
  }
  
  const [listFruit]=useState([{fruitName:"orange",id:1},{fruitName:"orange",id:2},{fruitName:"orange",id:3}]);
  return (
    <div>
      <Header name="FPT"></Header>
      <Intro1 name="Nguyễn Tấn Anh Khoa" class="SE17A05" school="FPT"></Intro1>
      <Bag children={<Pear a1="đỏ" a2="có gai" />}></Bag>
      <Randome></Randome>
      <CheckBool values={bool}></CheckBool>
      <Image></Image>
      <Card h2="First's card h2" h3="First's card h3"></Card>
      <Card h2="Second's card h2" h3="Second's card h3"></Card>
      <Card h2="Third's card h2" h3="Third's card h3"></Card>
      <button onClick={Guess}>Guess game</button>
     <ChangeMode></ChangeMode>

     <Button onSmash={() => alert('Playing!')}>
           Play Movie
         </Button>
         <Button  onSmash={() => alert('Uploading!')}>
           Upload Image
         </Button>
         <h1>Button children Example</h1>
          <ButtonChildren></ButtonChildren>
     <Hook></Hook>
          <MyForm></MyForm>
          <ChangeWord></ChangeWord>
          <ShowFruit listFruit={listFruit}></ShowFruit>
          <CountFruit listFruit={listFruit}></CountFruit>
      <Footer></Footer>

      
    </div>
  )
}

export default App;
