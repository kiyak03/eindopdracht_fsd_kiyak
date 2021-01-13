import React, {useState} from 'react'
// import { useForm } from 'react-hook-form';


function LoginForm({Login, error}){
    const [data, setData] = useState({name:"", email:"", password:""})

    const handleSubmit = e => {
        e.preventDefault();

        Login(data);
    }


    return(
        <form onSubmit={handleSubmit}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setData({...data, name: e. target.value})} value={data.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email"onChange={e => setData({...data, email: e. target.value})} value={data.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={e => setData({...data, password: e. target.value})} value={data.password}/>
                </div>
            </div>
            <button type='submit' value='login'>Login</button>
        </form>
    );
}

export default LoginForm;