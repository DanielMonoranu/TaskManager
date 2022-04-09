import React, { useState } from 'react';
import './DeleteTask.css';
import axios from "axios";

const TaskForm = (props) => {
    const [enteredTaskName, setEnteredTaskName] = useState('');

    function deletetask() {

        //axios.delete(url, { data: { foo: "bar" } });
        axios
           // .delete("https://localhost:44313/tasks/incercare")

           .delete(`https://localhost:44313/tasks/${enteredTaskName}`  )

            //Description: "this is a task posted from react.",
            //UserId: enteredTaskCreator,

            .then(function (response) {
                console.log(response);
                console.log(enteredTaskName);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const taskNameChangeHandler = (event) => {
        setEnteredTaskName(event.target.value);
    }



    const submitHandler = (event) => {
        event.preventDefault();

        const taskData = {
            task_name: enteredTaskName,


        };
        props.onSearchTaskData(taskData);
        setEnteredTaskName('');

    };


    return (
        <div className='new-task'>
            <form onSubmit={submitHandler}  >
                <div className='new-task__controls1'>
                    <div className='new-task__control1'>
                        <label>Task Name:</label>
                        <input
                            type='text'
                            value={enteredTaskName}
                            onChange={taskNameChangeHandler}
                        />
                    </div>


                </div>
                <div className='new-task__actions1'>
                    <button type='submit' onClick={deletetask} >Delete Task</button>
                </div>
            </form>
        </div>
    );
};
export default TaskForm;