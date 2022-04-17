import React, {useState} from "react";
// import { ReactDOM } from "react-dom";

import './style/Login.css'

function Login() {
    // react state
    const [errMessage, setErrMessage] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    // error messages
    const err_message = {
        err_username : "Invalid username, please check again!",
        err_password : "Invalid password, please check again!"
    }

    // static database username and password
    const db_user = [
        {
            username : "bagas_try",
            password : "12345678"
        },
        {
            username : "bagas_try_a",
            password : "87654321"
        },
        {
            username : "bagas_binus",
            password : "2201868995"
        },
        {
            username : "bagas_ambodo",
            password : "bagasambodo123"
        }
    ]

    // handle submit button
    const handle_trigger_submit = (e) => {
        e.preventDefault();

        var {iusername, ipassword} = document.forms[0];

        const getDataUsername = db_user.find((user) => user.username === iusername.value);

        if (getDataUsername) {
            if (getDataUsername.password !== ipassword.value) {
                // Invalid password
                setErrMessage({ name: "ipassword", message: err_message.err_password });
            } else {
                setIsSubmit(true);
            }
        } else {
            // Username not found
            setErrMessage({ name: "iusername", message: err_message.err_username });
        }
    }

    // render error messages
    const renderErrMessage = (name) => name === errMessage.name && (
      <div className="text-danger">
        <p className="fs-6">{errMessage.message}</p>
      </div>
    );

    const renderView = (
        <div className="login">
            <header className="login-header">
                <div className="container px-10">
                    <div className="row px-5">
                        <div className="col align-self-center">
                            <form onSubmit={handle_trigger_submit}>
                                <div className="card center-items">
                                    <div className="card-header">
                                        <p className="text-center fw-bold">
                                            Sign in
                                        </p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div class="mb-3">
                                                <label for="inputUsername" class="col-md-3 fs-4 col-form-label">Username</label>
                                                <input type="text" className="form-control" id="inputUsername" name="iusername" required></input>
                                                {renderErrMessage("iusername")}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="mb-3">
                                                <label for="inputPassword" class="col-md-3 fs-4 col-form-label">Password</label>
                                                <input type="password" className="form-control" id="inputPassword" name="ipassword" required></input>
                                                {renderErrMessage("ipassword")}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="mb-3">
                                                <button type="submit" className="col-md-12 btn btn-md btn-primary">Sign In</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <p className="text-center fs-6">
                                            TP1 By Bagas Try Ambodo - 2201868995
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );

    return (
        <div>
            {isSubmit ? <div>User is successfully logged in</div> : renderView}
        </div>
    );
}

export default Login;
