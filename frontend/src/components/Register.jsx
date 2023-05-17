import React, { useState } from "react";

function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        console.log(email, name, password, username);
        e.preventDefault();
        fetch('http://localhost:5000/api/register', {
           method: 'POST',
           body: JSON.stringify({
              name: name,
              email: email,
              username: username,
              password: password,
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((res) => {alert("Registration Successfull!")})
           .catch((err) => {
              console.log(err.message);
           });
     };
    return <>
    <div className="containmer">
        <div className="row justify-content-md-center mt-4">
            <div className="col-lg-5 card border-primary mb-3">
                <div className="card-header h4 text-center">
                    Register An Account
                    <div className="card-body">
                    <div className="form-group">
                            <label className="col-form-label mt-4">
                                Name

                            </label>
                            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Username"/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4">
                                Username

                            </label>
                            <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Enter Username"/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4">
                                Email

                            </label>
                            <input onChange={(e)=>setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter Email"/>

                            <div className="form-group">
                            <label className="col-form-label mt-4">
                                Password

                            </label>
                            <input onChange={(e)=>setPassword(e.target.value)} type="text" className="form-control" placeholder="Enter Your Password"/>
                        </div>
                        <div className="row justify-content-md-center form-group mt-4">
                            <button type="button" onClick={handleSubmit}>
                                <label classname="col-sm-6 btn btn-outline-secondary center">
                                    Register Now
                                </label>
                            </button>
                         </div>
                         
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
    </>
    
}

export default Register;
