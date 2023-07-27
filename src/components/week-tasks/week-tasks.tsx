import styles from './week-tasks.module.css'
import Tasks from '../../images/tasks.svg'
import Todo from './todo/todo';
import { useState, useEffect } from 'react';

type Todo = {
  id?: string;
  text?: string;
  checked: boolean;
}

interface TasksProps {
  text?: string;
}

export const WeekTasks: React.FC<TasksProps> = ({

}) => {

  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  function handleChange(event: any) {
    setTodo(event.target.value);
  }

  function addTodo(event: any) {
    event.preventDefault();

    var item = {
      id: Math.random().toString() + todo,
      text: todo,
      checked: false,
    };

    setTodoList((prev) => {
      return [...prev, item];
    });

    setTodo("");
  }

  function deleteCompleted() {
    const remainingItems = todoList.filter((item) => {
      return item.checked !== true;
    });

    setTodoList(remainingItems);
  }

  useEffect(() => { }, [reload]);



  return (
    <div className={`${styles.mainbox}`}>
      <img src={Tasks} alt="Список" className={styles.icon} />
      <h2 className={styles.title}>Задания на неделю</h2>

      <div className={styles.todolist}>

        <form onSubmit={addTodo}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="todo"
              placeholder="Добавить задание"
              autoComplete='off'
              className={styles.input}
              onChange={handleChange}
              value={todo}
            />

            <button
              type="submit"
              className={styles.addButton}
              disabled={todo ? false : true}>
              +</button>

            <button
              type="button"
              className={styles.deleteButton}
              onClick={deleteCompleted}
            >-</button>

          </div>
        </form>




        {todoList
          ? todoList.map((item) => {
            return (
              <Todo
                key={item.id}

                todo={item}
                reload={reload}
                setReload={setReload}

              />
            );
          })
          : null}
      </div>
    </div >
  );
};
