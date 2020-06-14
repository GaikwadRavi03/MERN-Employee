import React, { Component } from 'react'
import axios from 'axios'

var apiBaseUrl = 'http://localhost:3000/employee';


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
            console.log('add employee');
        }).catch((err) => {
            console.log('err', err);
        });

        this.setState({
            id: '',
            name: '',
            salary: ''
        })
    }

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Emp No</label>
                        <input onChange={this.handleInput} name="id" value={this.state.id} className="form-control" type="number" />
                    </div>
                    <div className="form-group">
                        <label >Name</label>
                        <input onChange={this.handleInput} name="name" value={this.state.name} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label >Salary</label>
                        <input onChange={this.handleInput} name="salary" value={this.state.salary} type="number" className="form-control" />
                    </div>
                    <div className="text-center mt-3 form-group">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Create
