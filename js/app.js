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

    class Main extends React.Component {
        render() {
            return <h1>Main</h1>
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

            const activeStyle = {
                backgroundColor: 'green',
            };

            return (
                <div>
                    <div id="menu">
                        <div><IndexLink activeStyle={activeStyle} to="/">About me</IndexLink></div>
                        <div><Link activeStyle={activeStyle} to="/skills">Skills</Link></div>
                        <div><Link activeStyle={activeStyle} to="/myworks">MyWorks</Link></div>
                        <div><Link activeStyle={activeStyle} to="/contact">Contact</Link></div>
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