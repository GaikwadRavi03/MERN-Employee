import React, { Component } from 'react'
import axios from 'axios'

const apiBaseUrl = 'http://localhost:3000/employee/'

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
        axios.get(apiBaseUrl + this.props.match.params.id)
            .then((result) => {
                this.setState({
                    id: result.data[0].id,
                    name: result.data[0].name,
                    salary: result.data[0].salary
                })
            }).catch((err) => {
                console.log('set value two', err);
            })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            salary: this.state.salary
        }
        axios.put(apiBaseUrl + this.props.match.params.id, data).then(() => {
            console.log('modified one data');
            this.setState({
                name: '',
                salary: ''
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input name="name" value={this.state.name} onChange={this.handleInput} type="text" className="form-control" />
                    </div>
                    <div>
                        <label>Salary</label>
                        <input name="salary" value={this.state.salary} onChange={this.handleInput} type="number" className="form-control" />
                    </div>
                    <div className="text-center my-3">
                        <button className="btn btn-success" type="submit">Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit
