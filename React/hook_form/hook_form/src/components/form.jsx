import React, {useState} from 'react';

const User = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange = { (e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange = { (e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange = { (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange = { (e) => setPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h3>Your Information:</h3>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>

            </div>
        </div>
    )
}

export default User;