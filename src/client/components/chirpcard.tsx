import * as React from "react";
import { Link } from "react-router-dom";

export interface Card {
    chirp: { id: string; user: string; post: string }
}
const chirpCard: React.SFC<Card> = props => {
    const { id, user, post } = props.chirp;
    return (
        <div className="cold-md-6">
            <div className="card bg-primary">
                <div className="card-body text-center">User
                    <h5 className="card-title">{user} </h5>
                    <h6 className="card-text"> {post}</h6>
                    <p className="card-text">{id}</p>
                    <Link to={`/editing/${id}`} className="btn btn-primary">Edit Chirp</Link>
                </div>
            </div>
        </div>
    )
}

export default chirpCard