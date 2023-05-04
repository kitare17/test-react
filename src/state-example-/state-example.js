import { useState } from 'react'
function Hook() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Example of hook</h1>
            <button onClick={() => setCount(count + 1)}>Click count using state {count}</button>        </>
    )

}

function MyForm() {
    const [form,setForm]=useState({firstName:"",lastName:"",email:"" });
    return (
        <div>
            First name <input type='text' onChange={e=>{setForm({...form,firstName:e.target.value});}}></input>
            <br></br>
            Last name <input type='text' onChange={e=>{setForm({...form,lastName:e.target.value});}}></input>
            <br></br>
            Email<input type='email' onChange={e=>{setForm({...form,email:e.target.value});}}></input>
            <p>{form.firstName} {form.lastName} {form.email}</p>

            
        </div>

        

    )
}
export {Hook,MyForm}   ;