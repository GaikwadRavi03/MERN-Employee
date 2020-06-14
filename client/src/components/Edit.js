import React, { Component } from 'react'
import Axios from 'axios'
var apiBaseUrl = 'http://localhost:3000/employee/';

class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            salary: ''
        }
    }
    componentDidMount() {
        Axios.get(apiBaseUrl + this.props.match.params.id)
            .then((result) => {
                this.setState({
                    id: result.data[0].id,
                    name: result.data[0].name,
                    salary: result.data[0].salary
                })
                console.log('set value');
            })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: this.state.name,
            salary: this.state.salary
        }
        Axios.put(apiBaseUrl + this.props.match.params.id, data).then(() => {
            console.log('modified one data');
            this.setState({
                name: '',
                salary: ''
            })
        })
    }

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label >Name</label>
                        <input onChange={this.handleInput} name="name" value={this.state.name} type="text" className="form-control" />
                    </div>
                    <div>
                        <label >Salary</label>
                        <input type="number" onChange={this.handleInput} value={this.state.salary} name="salary" className="form-control" />
                    </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-success">Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit
