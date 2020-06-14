import React, { Component } from 'react'
import Axios from 'axios'


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
        Axios.get('http://localhost:3000/employee/' + this.props.match.params.id)
            .then((result) => {
                this.setState({
                    id: result.data.id,
                    name: result.data.name,
                    salary: result.data.salary
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
        Axios.put('http://localhost:3000/employee/' + this.props.match.params.id, data).then(() => {
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
