import * as React from "react";
import { Link } from "react-router-dom";

export interface Card {
    chirp: { id: string; user: string; post: string }
}
const chirpCard: React.SFC<Card> = props => {
    const { id, user, post } = props.chirp;
    return (
   
        <div className="container bg-secondary  border border-primary p-4">
                <div className="text-center">User
                        <h5 className="title">{user} </h5>
                        <h6 className="text"> {post}</h6>
                        <p className="text">{id}</p>
                        <Link to={`/editing/${id}`} className="btn btn-primary">Edit Chirp</Link>
                    </div>
             
         </div>
 
    )
}

export default chirpCard