import React from "react";import PropTypes from "prop-types";import {db} from "../base";export default class CardUser extends React.Component {    static propTypes = {        deleteUser: PropTypes.func,        details: PropTypes.shape({            type: PropTypes.string,            photo: PropTypes.string,            email: PropTypes.string,        }),        index: PropTypes.string,    }    deleteUser=()=> {        console.log(this.props.index)        const ps = db.ref("psycologists");        ps.child(this.props.index).remove()    }    render() {        const {index} = this.props;        const {type, photo, key, email} = this.props.details        return (            <div className="card row" key={key}>                <img                    className="card-img-top"                    src={photo || null}                    alt=""                />                <div className="card-body">                    <h6 className="card-title">{index}</h6>                    <h6 className="card-title">                        {email}                    </h6>                    <h6 className="card-title">                        {type}                    </h6>                </div>                <div className="d-flex justify-content-between ">                    <button type="button" className="btn btn-success">                        Like                    </button>                    <button                        className="btn btn-outline-danger"                        onClick={this.deleteUser}                    >Delete User                    </button>                </div>            </div>        )    }}