/* Export the Transition for Blog, Contact, Discover, About */


function TransitionSub(){
        return({
            out: {
                x:-1 * window.innerWidth,
                opacity:0,
            },
            in: {
                x: 0,
                opacity:1,
            },
            transProps: {
                ease : "linear",
                duration: 0.25
            }
        });
}


/* Export the Transition for Home */
function TransitionMain() {
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#3e424e");
    return({
        out: {
            x: window.innerWidth,
            opacity:0
        },
        in: {
            x: 0,
            opacity:1
        },
        transProps: {
            ease : "linear",
            duration: 0.25
        }
    });
}

function HeaderColor(){

    var getStyle = function(element, property) {
        return (window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(property) : element.style[property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })])
    };
    return setTimeout(function(){
        if(document.querySelector(".anim-section") !== null){
            //console.log(document.querySelector(".anim-section"));
            document.querySelector('meta[name="theme-color"]').setAttribute("content", getStyle(document.querySelector(".anim-section"), "background-color"));
        }
    }, 300);
        
}
export {
    TransitionSub,
    TransitionMain,
    HeaderColor
}