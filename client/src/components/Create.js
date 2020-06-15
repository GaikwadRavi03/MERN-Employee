import React, { Component } from 'react'
import axios from 'axios'
const apiBaseUrl = 'http://localhost:3000/employee/'

class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            salary: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: this.state.id,
            name: this.state.name,
            salary: this.state.salary
        }
        axios.post(apiBaseUrl, data).then(() => {
            this.setState({
                id: '',
                name: '',
                salary: ''
            })
        }).catch((err) => {
            console.log(err);
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Emp Id</label>
                        <input name="id" required value={this.state.id} onChange={this.handleInput} type="number" className="form-control" />
                    </div>
                    <div>
                        <label>Name</label>
                        <input name="name" required value={this.state.name} onChange={this.handleInput} type="text" className="form-control" />
                    </div>
                    <div>
                        <label>Salary</label>
                        <input name="salary" required value={this.state.salary} onChange={this.handleInput} type="number" className="form-control" />
                    </div>
                    <div className="text-center my-3">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Create
