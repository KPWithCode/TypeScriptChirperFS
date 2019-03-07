import * as React from "react";

import { Link } from "react-router-dom";

export interface Card {
    chirp: { id: string; userid: string; chirptext: string }
}
const chirpCard: React.SFC<Card> = props => {
    const { id, userid, chirptext } = props.chirp;
    return (
   
        <div className="container bg-secondary  border border-primary p-4">
                <div className="text-center">
                        <h5 className="title">User id: {userid} </h5>
                        <h6 className="text"> {chirptext}</h6>
                        <p className="text">{id}</p>
                        <Link to={`/editing/${id}`} className="btn btn-primary">Edit Chirp</Link>
                    </div>
             
         </div>
 
    )
}

export default chirpCard