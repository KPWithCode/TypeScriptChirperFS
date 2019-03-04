import * as React from 'react';
import ChirpCard from './chirpcard'
import { string } from 'prop-types';

export interface IListProps {

}
export interface IListState {
    chirps: { id: string; user: string; post: string; }[]
    user: string;
    post: string;
}

class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
        this.state = { chirps: [], user: undefined, post: undefined }

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    async componentDidMount() {
        try {
            let r = await fetch('/');
            let data = await r.json();
            let chirps = Object.keys(data).map(key => {
                return {
                    id: key,
                    user: data[key].user,
                    post: data[key].post
                }

            })
            chirps.pop()
            chirps.reverse()
            this.setState({ chirps })
        } catch (e) {
            console.log(e)
        }
    }

    async handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        if (this.state.post && this.state.user) {
            let data = {
                user: this.state.user,
                post: this.state.post
            };

            e.preventDefault();
            try {
                await fetch("/api/chirps", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
            } catch (e) {
                console.log(e);
            }
            location.reload();
        }
    }


    render() {
        return (

            <div className="row bg-secondary p-2">
                <h1>Chirps Me Baby</h1>
                <div>
                    <h1>One More Time</h1>
                </div>


                <div className="col-md-12">
                    <form className="form-group"
                        onSubmit={this.handleSubmit} >
                        <label>Username</label>
                        <input type="text" placeholder="Username" className="form-control"
                            value={this.state.user}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                this.setState({ user: e.target.value })
                            }>
                        </input>
                        <label>Chirp</label>
                        <input type="text" placeholder="Chirp" className="form-control"
                            value={this.state.post}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                this.setState({ post: e.target.value })
                            }>
                        </input>
                        <button className="btn btn-dark mt-2 ">BATON !</button>
                    </form>
                    <div className="d-flex justify-content-center">
                        <div className=" container col-12 d-flex justify-content-center bg-primary">
                            {this.state.chirps.map(chirp => {
                                return (<ChirpCard key={chirp.id} chirp={chirp} />);

                            })}
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}








export default List