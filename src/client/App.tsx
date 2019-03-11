import * as React from 'react';

import './scss/app';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import List from "./components/homepage"
import Edit from "./components/EditChirp"
class App extends React.Component<IAppProps, IAppState> {
    render() {
        return (
            <Router>
                <>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={List} />
                            {/* Check to see if route path has to change for edit */}
                            <Route exact path="/editing/:id" component={Edit} />
                        </Switch>
                    </div>
                </>
            </Router>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    name: string;
}
export default App;