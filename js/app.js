import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';



document.addEventListener('DOMContentLoaded', function(){

    class Main extends React.Component { //About me
        render() {
            return (
                <div id="main">
                    <div id="mainRow">
                        <h1>How i became a programmer</h1>
                    </div>
                    <div id="columnMain">
                        <div id="mainLeft">
                        </div>
                        <div id="mainRight">
                            <h2>My first job</h2>
                            <p>I worked in a family company that performs ventilation and air conditioning.
                                But I felt it was not the job that I wanted to do.
                                Working in my old company, I tried programming, but after-hours teaching brought too little effect.
                                The decision turned out to be simple. I quit my job and devote myself to programming 100%.
                                I went to the course coders-lab, I am currently studying, while looking for a dream job.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    class Contact extends React.Component {
        render() {
            return <div>
                <h1>Contact</h1>
                <Link to="/"><span>wróc do strony głównej</span></Link>
            </div>
        }
    }

    class NotFound extends React.Component {
        render() {
            return <h1>Brak</h1>
        }
    }

    class Skills extends React.Component {
        render() {

            return (<div>Skills</div>)
        }
    }

    class MyWorks extends React.Component {
        render() {
            return (<div>MyWorks</div>)
        }
    }

    class Template extends React.Component {
        render() {
            return (
                <div>
                    <div id="menu">
                        <IndexLink to="/" className="link">About me</IndexLink>
                        <Link  to="/skills" className="link">Skills</Link>
                        <Link  to="/myworks" className="link">MyWorks</Link>
                        <Link  to="/contact" className="link">Contact</Link>
                    </div>
                    {this.props.children}
                </div>
            )
        }
    }

    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Main} />
                        <Route path='/skills' component={Skills} />
                        <Route path='/myworks' component={MyWorks} />
                        <Route path='/contact' component={Contact} />
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});