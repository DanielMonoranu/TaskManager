import React from 'react';
import './TaskDate.css';

const TaskDate = (props) => {
    //const month = props.date.toLocaleString('en-Us', { month: 'long' })
    //const day = props.date.toLocaleString('en-Us', { day: '2-digit' })
    //const year = props.date.getFullYear();
    return (
        <div className='task-date'>
            <div className='task-date__month'>1</div>
            <div className='task-date__year'>2</div>
            <div className='task-date__day'>3</div>

        </div>

    );
};
export default TaskDate;