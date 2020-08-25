import React, {useState} from 'react'
import Base  from '../core/Base'
import {Link} from 'react-router-dom'
import {signup} from '../auth/helper'

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email:"",
        password:"",
        error:"",
        success: false,

    });

const {name, email, password, error,  success} = values

const handelChange = (name) => (event) => {
    setValues({...values,  error: false, [name]: event.target.value})
}

const onSubmit =(event) => {
    event.preventDefault();
    setValues({...values, error: false})
    signup({name, email, password})
    .then(data => {
        console.log("DATA", data);
        if(data.email === email){
            setValues({
                ...values,
                name: "",
                email:"",
                password:"",
                success: true
            })
        } else{
            setValues({
                ...values,
                error: true,
                success: false,
            })
        }
    })
    .catch(e => console.log(e))

}

const successMessage = () => {
    return(
        <div className="row">
            <div className=" col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success"
                style={{display: success? "" : "none"}}
                >
                   New Account Created Successfully. Please 
                   <Link to="/Signin"> Login </Link>Now. 
                </div>
            </div>
        </div>
    )
}

const errorMessage = () => {
    return(
        <div className="row">
            <div className=" col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger"
                style={{display: error? "" : "none"}}
                >
                   Check all  fields again 
                </div>
            </div>
        </div>
    )
}

const signupForm =() => {
    return(
        <div className="row">
            <div className= " col-md-6 offset-sm-3 text-left">
                <form>
                    <div className=  "form-group">
                        <label className="text-light">Name</label>
                        <input className="form-control"
                         value={name}
                         onChange={handelChange("name")}
                         type="text"/>
                    </div>
                    <div className=  "form-group">
                        <label className="text-light">Email</label>
                        <input className="form-control"
                         value={email}
                         onChange={handelChange("email")}
                         type="text"/>
                    </div>
                    <div className=  "form-group">
                        <label className="text-light">Password</label>
                        <input className="form-control"
                         value={password}
                         onChange={handelChange("password")}
                         type="password"/>
                    </div>
                    <button 
                     onClick={onSubmit}
                    className="brn btn-success btn-block">Submit</button>
                </form>
            </div>
        </div>
    )
}
    return (
        <Base title="Sign Up Page" description= "A Signup for Sage Member">
            {successMessage()}
            {errorMessage()}
            {signupForm()}
            <p className="text-white text-center"> 
            {JSON.stringify(values)}
            </p>
        </Base>

    )
}

export default Signup