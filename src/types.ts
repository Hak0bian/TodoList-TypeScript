export type Task = {
    userId? : number;
    id: number;
    title: string;
    completed: boolean;
}
  
export type FormProps = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    taskCount: number;
    setTaskCount: React.Dispatch<React.SetStateAction<number>>;
}
  
export type TasksDivProps = {
    id: number;
    title: string;
    completed: boolean;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    setTaskCount: React.Dispatch<React.SetStateAction<number>>;
}