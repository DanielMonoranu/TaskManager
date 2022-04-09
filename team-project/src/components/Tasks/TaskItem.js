import React from 'react';
import './TaskItem.css';
import TaskDate from './TaskDate';
const TaskItem = (props) => {

    return (
        <div className='task-item1'>
            <TaskDate date={props.date} />
            <div className='task-item__description1'>
                <h2>{props.task_name}</h2>
                <div className='task-item__price1'>{props.task_category}</div>
                <div className='task-item__price1' >{props.task_creator}</div>
            </div>
        </div>
    )

}
export default TaskItem;