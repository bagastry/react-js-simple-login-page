import React from "react";

import './style/Login.css'

function Login() {
    return (
        <div className="login">
            <header className="login-header">
                <div className="container px-10">
                    <div className="row px-5">
                        <div className="col align-self-center">
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
                                            <input type="text" className="form-control" id="inputUsername" name="iusername"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="mb-3">
                                            <label for="inputPassword" class="col-md-3 fs-4 col-form-label">Password</label>
                                            <input type="password" className="form-control" id="inputPassword" name="ipassword"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="mb-3">
                                            <button type="button" className="col-md-12 btn btn-md btn-primary">Sign In</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <p className="text-center fs-6">
                                        TP1 By Bagas Try Ambodo - 2201868995
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Login;
