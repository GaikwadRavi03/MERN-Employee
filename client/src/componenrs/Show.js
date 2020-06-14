import React, { Component } from 'react'
import Items from './Items'
import axios from 'axios'
const apiBaseUrl = 'http://localhost:3000/employee/'

class Show extends Component {

    constructor(props) {
        super(props)

        this.state = {
            myShowState: []
        }
    }

    componentDidMount() {
        axios.get(apiBaseUrl).then((result) => {
            this.setState({
                myShowState: result.data
            })
        })
    }

    handleClearAll = () => {
        axios.delete(apiBaseUrl).then(() => {
            console.log('clear all employees');
        }).catch((err) => {
            console.log(err);
        })
    };

    render() {
        const myData = this.state.myShowState.map((v, k) => {
            return <Items data={v} key={k} />
        })
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Emp id</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData}
                    </tbody>
                </table>
                <div>
                    <div className="text-center mt-3">
                        <button onClick={this.handleClearAll} className="btn btn-danger">Clear All</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show
