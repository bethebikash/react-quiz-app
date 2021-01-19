import './App.css'
import Login from './Login'
import Quiz from './Quiz'
import Register from './Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/app" exact>
                        <Quiz />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
