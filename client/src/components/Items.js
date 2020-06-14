import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
var apiBaseUrl = 'http://localhost:3000/employee/';

class Items extends Component {

    handleDelete = () => {
        axios.delete(apiBaseUrl + this.props.data.id).then(() => {
            console.log('delete one employee data');
        }).catch((err) => {
            console.log(err);
        })
    }

    componentDidUpdate() {
        this.render()
        window.location.reload(false);
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.salary}</td>
                <td>
                    <Link to={`/edit/${this.props.data.id}`} className="btn btn-primary mx-2"><span className="fa fa-pencil"></span></Link>
                    <button onClick={this.handleDelete} className="btn btn-danger mx-2"><span className="fa fa-trash"></span></button>
                </td>
            </tr>
        )
    }
}

export default Items
