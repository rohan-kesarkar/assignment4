import React,{useState} from 'react'


const SecurityQuestion = (props)=>{
    return(
    <select {...props}>
        <option>Select Security Question</option>
        <option value="What is Your Name?">What is Your Name?</option>
        <option value="What is Your Pet Name?">What is Your Pet Name?</option>
    </select>
    )
}

export const Controlled = ()=>{
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [answer, setAnswer] = useState("")
    const [bio, setBio] = useState("")
    const onChange = (e)=>{
        const {value} = e.target;

        setName(value)
    }
    const onSubmit = (e)=>{
   
         e.preventDefault();
    }
    const showData = ()=>{
        console.log('First Name: ', name)
        console.log('Last Name: ', lastname)
        console.log('Email: ', email)
        console.log('Answer: ', answer)
        console.log('Bio: ', bio)
    }
    
    
    return(
        <div className='App'>
            <header className='App-header'>
                <h3>Registration Form (ControlledForm)</h3>
                <form onSubmit={onSubmit}>
                    <label>
                         First Name
                         
                        <input required minLength={3} maxLength={15} type="text" onChange={onChange} name="name"  value={name}/>
                    </label>
                    <hr/>
                    <label>
                        Last Name
                        <input  required minLength={3} maxLength={15} type="text" onChange={(e)=>setLastname(e.target.value)} name="lastname" value={lastname}/>
                    </label>
                    <hr/>
                    <label>
                        Email
                        <input required  type="email" onChange={(e)=>setEmail(e.target.value)} name="email" value={email}/>
                    </label>
                    <hr/>
                    <label>
                        Security Question
                    <SecurityQuestion/>
                    </label>
                    <hr/>
                    <label>
                    Security Answer
                        <input required  type="text" onChange={(e)=>setAnswer(e.target.value)} name="answer" value={answer}/>
                    </label>
                    <hr/>
                    <label>
                    Bio
                        <textarea type="text" onChange={(e)=>setBio(e.target.value)} name="bio" value={bio}/>
                    </label>
                    <div>
                        <button onClick={showData}>Submit</button> <button>Cancel</button>
                    </div>
                </form>
            </header>
        </div>
    )
}