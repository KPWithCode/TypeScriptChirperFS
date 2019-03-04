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
                            <Route exact path="/editing/:id" component={Edit} />
                        </Switch>
                    </div>
                </>
            </Router>
        )
    }
}
// constructor(props: IAppProps) {
//     super(props);

//     this.state = { name: null };
// }

// async componentWillMount() {
//     let r = await fetch('/api/hello');
//     let name = await r.json();
//     this.setState({ name })
// }

// render () {
//     return (
//         <main className="container">
//             <h1 className="covalence-blue">Hello {this.state.name}!</h1>
//             <h2></h2>
//         </main>
//     )
// }


interface IAppProps {

}

interface IAppState {
    name: string;
}
export default App;