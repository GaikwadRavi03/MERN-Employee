import React, { Component } from 'react'
import Items from './Items'
import axios from 'axios'

class Show extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myItemsState: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/employee').then((result) => {
            this.setState({
                myItemsState: result.data
            })
        }).catch((err) => {
            console.log('err', err);
        });
    }

    handleClearAll = () => {
        axios.delete('http://localhost:3000/employee').then(() => {
            console.log('clear all employees');
        }).catch((err) => {
            console.log(err);
        })
    };

    render() {
        const myData = this.state.myItemsState.map((v, i) => {
            return <Items data={v} key={i} />
        });
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Emp Id</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData}
                    </tbody>
                </table>
                <div className="text-center">
                    <button className="btn btn-danger" onClick={this.handleClearAll} >Clear All</button>
                </div>
            </div>
        )
    }
}

export default Show
