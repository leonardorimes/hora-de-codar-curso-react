import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

// CSS
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// Interface
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div className="App">
      <div>
        <Header />
        <main className={styles.main}>
          <div>
            <h2> O que você vai fazer?</h2>
            <TaskForm
              btnText="Criar tarefa"
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>
          <div>
            <h2>Suas tarefas: </h2>
            <TaskList taskList={taskList} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
