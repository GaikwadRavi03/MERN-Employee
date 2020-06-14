import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const apiBaseUrl = 'http://localhost:3000/employee/'

class Items extends Component {

    handleDelete = () => {
        axios.delete(apiBaseUrl + this.props.data.id).then(() => {
            console.log('one employee deleted');
        }).catch((err) => {
            console.log(err);
        })
    };

    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.salary}</td>
                <td>
                    <Link className="btn btn-success mx-2" to={`/edit/${this.props.data.id}`} >
                        <span className="fa fa-pencil"></span>
                    </Link>
                    <button onClick={this.handleDelete} className="btn btn-danger mx-2">
                        <span className="fa fa-trash"></span>
                    </button>
                </td>
            </tr>
        )
    }
}

export default Items
