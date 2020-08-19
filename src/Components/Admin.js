import React from "react";
function Admin(){
    return(
        <section className = "admin">
            <div className = "container">
                <div className = "header">
                    <h1 className = "section-identity">
                        Admin Login
                    </h1>
                </div>
                <form autoComplete = "on">
                    <input type = "email" placeholder = "Enter your Email" autoComplete = "email"/>
                    <input type = "password" placeholder = "Enter your Password"/>
                    <button className = "special-btn">Login</button>
                </form>
            </div>
        </section>
    );
}
export default Admin;