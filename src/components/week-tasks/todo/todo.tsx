import { useEffect, useState } from "react";
import styles from "./todo.module.css";

type Todo = {
    id?: string;
    text?: string;
    checked: boolean;
}

interface Props {
    todo: Todo;
    reload: boolean;
    setReload: (value: boolean) => void;
}

export default function Todo({ todo, reload, setReload }: Props) {
    const [teste, setTeste] = useState<boolean>(todo.checked);

    function handleCheckbox(event: any) {
        setTeste(event.target.checked);
        todo.checked = event.target.checked;

        setReload(!reload);
    }

    useEffect(() => { }, [teste, todo.checked]);

    return (
        <div className={styles.todoContainer}>
            <div className={styles.todo}>
                <input
                    type="checkbox"
                    name="checkbox"
                    id={todo.id}
                    className={styles.checkbox}
                    onChange={handleCheckbox}
                    checked={todo.checked}
                />

                <label htmlFor={todo.id} className={styles.todotask}>
                    {todo.text}
                </label>

            </div>
        </div>
    );
}