import React, { useState } from 'react';
import './SearchTask.css';


const TaskForm = (props) => {
    const [enteredTaskName, setEnteredTaskName] = useState('');
    const [enteredTaskCategory, setEnteredTaskCategory] = useState('');
    const [enteredTaskCreator, setEnteredTaskCreator] = useState('');
    const [enteredTaskDate, setEnteredTaskDate] = useState('');


    const taskNameChangeHandler = (event) => {
        setEnteredTaskName(event.target.value);
    }
    /*
        const taskCategoryChangeHandler = (event) => {
            setEnteredTaskCategory(event.target.value);
        }
        const taskCreatorChangeHandler = (event) => {
            setEnteredTaskCreator(event.target.value);
        }
    
        const taskDateChangeHandler = (event) => {
            setEnteredTaskDate(event.target.value);
        }
    */
    const submitHandler = (event) => {
        event.preventDefault();

        const taskData = {
            task_name: enteredTaskName,
            // task_category: enteredTaskCategory,
            //task_creator: enteredTaskCreator,
            //date: new Date(enteredTaskDate),

        };
        props.onSearchTaskData(taskData);
        setEnteredTaskName('');
        //setEnteredTaskCategory('');
        //setEnteredTaskCreator('');
        //setEnteredTaskDate('');
        //console.log(enteredTaskName);
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
                    <button type='submit'>Search Task</button>
                </div>
            </form>
        </div>
    );
};
export default TaskForm;