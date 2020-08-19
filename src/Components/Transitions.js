/* Export the Transition for Blog, Contact, Discover, About */
function TransitionSub(){
        return({
            out: {
                x: -window.innerWidth,
                opacity:0
            },
            in: {
                x: 0,
                opacity:1
            },
            transProps: {
                ease : "easeInOut",
                duration: 0.25
            }
        });
}


/* Export the Transition for Home */
function TransitionMain() {
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
            ease : "easeInOut",
            duration: 0.25
        }
    });
}

export {
    TransitionSub,
    TransitionMain
}