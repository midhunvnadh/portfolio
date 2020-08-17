import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'
import Main     from './Components/Main';
import About    from './Components/About';
import Blog     from './Components/Blog';
import Contact  from './Components/Contact';
import Discover from './Components/Discover';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="app">
                    <Route render = {
                        ( { location } ) => {
                            const { pathname, key } = location;
                            return (
                                <TransitionGroup component={null}>
                                    <Transition
                                        key={key}
                                        appear={true}
                                        mountOnEnter
                                        unmountOnExit
                                        onEnter={(node, appears) => play(pathname, node, appears)}
                                        onExit={(node, appears) => exit(node, appears)}
                                        timeout={{enter: 750, exit: 0}}
                                    >
                                        <Switch location={location}>
                                            <Route exact path="/"   component={Main}     />
                                            <Route path="/about"    component={About}    />
                                            <Route path="/blog"     component={Blog}     />
                                            <Route path="/contact"  component={Contact}  />
                                            <Route path="/discover" component={Discover} />
                                        </Switch>
            
                                    </Transition>
                                </TransitionGroup>
                            )
                        }
                    }/>
                </div>
            </BrowserRouter>
        );
    }
}
export default App