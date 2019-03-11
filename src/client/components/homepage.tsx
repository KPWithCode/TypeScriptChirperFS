import * as React from 'react';
import ChirpCard from './chirpcard'
import { string } from 'prop-types';

import chirpsdb from '../../server/db/chirpsdb';

export interface IListProps {

}
export interface IListState {
    chirps: { id: string; userid: string; chirptext: string; }[]
    userid: string;
    chirptext: string;
}

class List extends React.Component<IListProps, IListState> {
    constructor(props: IListProps) {
        super(props);
        this.state = { chirps: [], userid: undefined, chirptext: undefined }

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    async componentDidMount() {
        fetch('/api/chirps')
            .then(response => response.json())
            .then(chirps => {
                this.setState({ chirps })
            })

    }

    async handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        if (this.state.chirptext && this.state.userid) {

            let data = {
                userid: this.state.userid,
                chirptext: this.state.chirptext
            };

            e.preventDefault();
            try {
                await fetch(`/api/chirps`, {
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
            <div className="bg-secondary p-2 ">
                <h1>Chirps Me Baby</h1>
                <div>
                    <h1>One More Time</h1>
                </div>

                <div className="col-md-12">
                    <form className="form-group"
                        onSubmit={this.handleSubmit} >
                        <label>Username</label>
                        <input type="text" placeholder="Username" className="form-control"
                            value={this.state.userid}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                this.setState({ userid: e.target.value })
                            }>
                        </input>
                        <label>Chirp</label>
                        <input type="text" placeholder="Chirp" className="form-control"
                            value={this.state.chirptext}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                this.setState({ chirptext: e.target.value })
                            }>
                        </input>
                        <button className="btn btn-dark mt-2 ">BATON !</button>
                    </form>
                    <div className="col-md-12 m-2 p-5 bg-light ">
                        {this.state.chirps.map(chirp => {
                            return (<ChirpCard key={chirp.id} chirp={chirp} />);
                        })}
                    </div>
                </div>
            </div>
        )
    }
}




export default List