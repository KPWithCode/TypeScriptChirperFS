import * as React from "react";
import { RouteComponentProps } from "react-router";



export interface IEditProps extends RouteComponentProps<{ id: string }> {

}

export interface IEditState {
    chirp: { userid: string; chirptext: string; }

}

class Edit extends React.Component<IEditProps, IEditState> {

    constructor(props: IEditProps) {
        super(props)
        this.state = {
            chirp: {
                userid: null,
                chirptext: null

            }
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        try {
            let r = await fetch(`/api/chirps/${id}`);
            let chirp = await r.json()
            this.setState({ chirp })
        } catch (e) {
            console.log(e)
        }
    }

    async handleDelete() {
        let id = this.props.match.params.id;

        try {
            let r = await fetch(`/api/chirps/${id}`, {
                method: "DELETE"

            });
            this.props.history.push("/")
        } catch (e) {
            console.log(e)
        }
    }

    async handleEdit() {
        let id = this.props.match.params.id;
        let data = {
            userid: this.state.chirp.userid,
            chirptext: this.state.chirp.chirptext
        }
        try {
            await fetch(`/api/chirps/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            this.props.history.push("/")
        } catch (e) {
            console.log(e)
        }
    }

    //onchange
    handleChange(value: string) {
        this.state.chirp.chirptext = value
    }
    render() {
        let { userid, chirptext } = this.state.chirp
        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="card-body bg-secondary">
                        <h3 className="card-title">{userid}</h3>
                        <input type="text"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                this.handleChange(e.target.value)
                            }}
                            placeholder={chirptext}
                        />
                    </div>
                    <div className="d-flex justify-content-center bg-secondary">
                        <button
                            onClick={this.handleEdit.bind(this)}
                            className="btn btn-primary m-2"
                        > Save BATON !
                </button>

                        <button
                            onClick={this.handleDelete.bind(this)}
                            className="btn btn-primary m-2">Delete Baton
                </button>
                    </div>
                </div>

            </div>
        )
    }

}


export default Edit;