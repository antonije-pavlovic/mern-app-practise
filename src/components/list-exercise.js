import React, { Component } from 'react';
import axios from 'axios';
import { Exercise } from './exercise';

export default class ListExercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises')
            .then((result) => {
                this.setState({
                    exercises: result.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deleteExercise = (id) => {
        axios.delete(`http://localhost:5000/exercises/${ id }`)
            .then((result) => {
                console.log(result.data);

                this.setState({
                    exercises: this.state.exercises.map((one) => one._id !== id)
                })
            })
    };

    exerciseList = () => {
        return this.state.exercises.map((one) => {
            return <Exercise exercise={ one } deleteExercise={ this.deleteExercise } key={ one._id }/>
        })
    };

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        );
    }
}
