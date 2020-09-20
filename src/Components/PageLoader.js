import React from 'react';
import $ from 'jquery'
import Pagelogo from "../img/logo512.png"

class Loader extends React.Component {
    componentDidMount(){
        $(document).ready(function(){
            $(".loader-hold").animate({
                transform:"scale(0)",
                left: "+=100%"
              }, 1000, function() {
                $(this).remove();
              });
        });
    }
    render(){
        return(
            <div className = "loader-hold">
                <div className = "logonholder">
                    <figure>
                        <img src = {Pagelogo} alt = "logo"/>
                    </figure>
                    <div className = "loader"></div>
                </div>
           </div>
       );
    }
}
export default Loader;