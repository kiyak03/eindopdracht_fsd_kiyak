import React, {useState} from 'react'
import LoginForm from "../components/LoginForm";
// import set from "react-hook-form/dist/utils/set";

function Login(){
    const adminUser = {
        email: "admin@a.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email:""});
    const [error, setError] = useState("");

    const Login = data => {
        console.log("login")

        if (data.email === adminUser.email && data.password === adminUser.password) {
            setUser({
                name: data.name,
                email: data.name
            });
            } else{
            setError("No match!")
            }


        setError("no match!")
    }


    const Logout = () => {
        setUser({name: "", email:""})

    }

    return(
        <div>
            {(user.email !=="") ? (
                <div className="welcome">
                    <h1>dit is de Login pagina van,<span> {user.name}</span></h1>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
            <LoginForm Login={Login} error={error}/>
            )};


        </div>
    )
}

export default Login;