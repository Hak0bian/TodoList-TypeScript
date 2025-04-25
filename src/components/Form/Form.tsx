import { useState } from "react";
import { FormProps } from "../../types"
import st from "./Form.module.css"

const Form = ({ setTasks, taskCount, setTaskCount } : FormProps) => {
    const [text, setText] = useState<string>("");
    const [error, setError] = useState<string>("");

    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (text.trim()) {
            setTasks(prev => [
                ...prev,
                {
                    id: Date.now(),
                    title: text,
                    completed: false
                }
            ]);
            setText("");
            setTaskCount(prevCount => prevCount + 1);
        } else {
            setError("Input field is required !");
        }
    }

    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        setError("");
    }

    const clearAll = () => {
        setTasks([]);
        setTaskCount(0);
    }

    return (
        <div>
            <div className={st.formDiv}>
                <form onSubmit={addTask}>
                    <input
                        value={text}
                        onChange={changeText}
                        placeholder="Add Your Task"
                        className={`${st.inp} ${error ? st.error : ""}`}
                    />
                    <button className={st.btn}>Add Task</button>
                </form>
                <button onClick={clearAll} className={st.clearBtn}>Clear All</button>
            </div>
            {error && <p className={st.errorText}>{error}</p>}

            <div className={st.taskCount}>
                <h3>Tasks - </h3>
                <h3>{taskCount}</h3>
            </div>
        </div>
    );
}

export default Form;