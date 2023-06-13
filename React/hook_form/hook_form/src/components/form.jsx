import React, {useState} from 'react';

const User = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters")
        }
        else{
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters")
        }
        else{
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters")
        }
        else{
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length > 0 && e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        }
        else{
            setPasswordError("")
        }
    }

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
                    <input type="text" value={firstName} onChange = { (e) => handleFirstName(e)}/>
                    <p className="errorStuff">{firstNameError}</p>
                        
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange = { (e) => handleLastName(e)}/>
                    <p className="errorStuff">{lastNameError}</p>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange = { (e) => handleEmail(e)}/>
                    <p className="errorStuff">{emailError}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange = { (e) => handlePassword(e)}/>
                    <p className="errorStuff">{passwordError}</p>
                </div>
                <input type="submit" value="Create User" />
            </form>
            {/* <div>
                <h3>Your Information:</h3>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>

            </div> */}
        </div>
    )
}

export default User;