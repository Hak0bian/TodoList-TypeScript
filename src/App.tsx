import { useEffect, useState } from 'react';
import { Task } from './types';
import axios from 'axios';
import Form from './components/Form/Form';
import TasksDiv from './components/TasksDiv/TasksDiv';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskCount, setTaskCount] = useState<number>(0);

  useEffect(() => {
    axios.get<Task[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => {
        setTasks(res?.data);
        setTaskCount(res?.data?.length);
      })
  }, [])

  
  return (
    <section className='mainDiv'>
      <Form
        setTasks={setTasks}
        taskCount={taskCount}
        setTaskCount={setTaskCount}
      />

      {tasks.map(task => (
        <TasksDiv
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          tasks={tasks}
          setTasks={setTasks}
          setTaskCount={setTaskCount}
        />
      ))}
    </section>
  )
}

export default App;