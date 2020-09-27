import React from 'react';
import LaptopCat from './image/laptop-cat.jpg'
import {Link} from 'react-router-dom'

class Admin extends React.Component{
    render(){
        return(
            <div className = "extra-page">
                <div className="columns has-text-left is-vcentered">
                    <div className="column is-5">
                        <div className = "site-info px-5 py-5">
                            <h1 className = "title">404 Not Found</h1>
                            <h2 className = "subtitle">Looks like you've reached somewhere that doesn't exist</h2>
                            <div className = "action">
                                <Link to="/">
                                    <button className = "button is-primary">
                                        Go Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column is-7">
                        <figure className = "image">
                            <img src = {LaptopCat} alt = ""/>
                        </figure>
                    </div>
                </div>
            </div>
        );
    }
}
export default Admin