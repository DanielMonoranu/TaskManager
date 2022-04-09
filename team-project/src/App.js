import React, { useState, useEffect } from "react";
import NewTask from "./components/FormTask/NewTask";
import SearchTask from './components/Search/SearchTask';
import './App.css';
import DeleteTask from './components/Delete/DeleteTask';
import TaskItem from './components/Tasks/TaskItem';
import axios from "axios";

const DUMMY_TASKS = [
  {
    id: "t1",
    task_name: "proiect",
    task_category: 'work',
    task_creator: 'dani',
    date: new Date(2022, 12, 4)
  },
  {
    id: "t2",
    task_name: "thrash",
    task_category: 'house',
    task_creator: 'alex',
    date: new Date(2021, 3, 4)
  },
];

const App = () => {

  //render task from database
  const [firstTasks, firstSetTasks] = useState([]);


  function getTask() {
    axios
      .get("https://localhost:44313/tasks")
      .then(function (response) {
        firstSetTasks(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getTask();
  }, []);

  //for tasks
  const [tasks, setTasks] = useState(firstTasks);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  //for search

  const searchTaskHandler = (task) => {
    console.log(DUMMY_TASKS.task_name);
  }

  // make the form dissapear when the button is pressed
  const [showNewTask, setNew] = useState(false);
  const [showSearch, setSearch] = useState(false);
  const [showDelete, setDelete] = useState(false);

  const [searches, setSearches] = useState('');

  const searchHandler = (enteredTaskData) => {

    //props.onAddTask(taskData);
    console.log("task name " + enteredTaskData.task_name);

    //document.querySelector(".search-area").children[0].children[0].value

    let element = document.querySelector(".taskboxes");
    let children = element.children;
    for (let i = 0; i < children.length; i++) {
      let childText = children[i].children[1].children[0].innerText;
      if (enteredTaskData.task_name !== "") {
        if (childText !== enteredTaskData.task_name) {
          children[i].style.display = "none";
        } else {
          children[i].style.display = "block";
        }
      } else {
        children[i].style.display = "block";
      }
    }

  }

  const [searchTerm, setSearchTerm] = useState('');  // pt searchu fake




  return (
    <div  >
      <label className="app-name" >Task app</label>
      <div>
        <button className="new-task" onClick={() => setNew(prev => !prev)}   >Add Task</button>
        {showNewTask && <NewTask onAddTask={addTaskHandler}></NewTask>}

      </div>

      <div>
        <button className="new-task" onClick={() => setSearch(prev => !prev)}>Search</button>
        {showSearch && <SearchTask onSearchTaskData={searchHandler}></SearchTask>}

      </div>

      <div>
        <button className="new-task" onClick={() => setDelete(prev => !prev)}  >Delete</button>
        {showDelete && <DeleteTask onAddTask={addTaskHandler}></DeleteTask>}

      </div>


{/* task_1 */}
      <div className='task_1'> 
        <div className='task-item_1'>
          <div className='task-date_1'>Date</div>
          <div className='task-item__description_1'>
            <h2 >Task Name</h2></div>
          <div className='task-item__price_1'>Category</div>
          <div className='task-item__price_1' >User Id</div>
        </div>
      </div>
      
      <div className="taskboxes">
        {/* //<Tasks items={firstTasks} /> */}
        {
          <>
            {firstTasks.map((task) => (
              <TaskItem
                date={task.dateModified}
                task_name={task.name}
                task_category={task.taskCategory}
                task_creator={task.userId}


              />
            ))}
          </>
        }
      </div>
    </div>
  )
}
export default App;