import { useEffect, useState } from "react";

function App() {
    const [allTodos, setAllTodos] = useState([]);
    const [singleTodo, setSingleTodo] = useState({ title: "", desc: "" });

    function handleAddTodo() {
        // setAllTodos(prevValue => [...prevValue , singleTodo])
        if (!singleTodo.title || !singleTodo.desc) {
            return;
        }
        setAllTodos([...allTodos, singleTodo]);
        saveTodoLocalStore([...allTodos, singleTodo]);
    }
    function deleteTodo(i) {
        let newArr = [...allTodos];
        newArr.splice(i, 1);
        saveTodoLocalStore(newArr);
        setAllTodos(newArr);
    }

    function saveTodoLocalStore(todo) {
        localStorage.setItem("todos", JSON.stringify(todo));
    }

    function getTodoFromLocalStore() {
        let data = JSON.parse(localStorage.getItem("todos")) || [];
        setAllTodos(data);
    }

    useEffect(() => {
        getTodoFromLocalStore();
    }, []);

    return (
        <div className="bg-blue-400 max-w-screen  min-h-screen text-center">
            <h1 className="text-5xl pt-12 ">Todo App</h1>
            <div className="mt-10">
                <input
                    className="text-2xl px-4 py-2 focus:outline-none capitalize rounded-md"
                    type="text"
                    placeholder="title"
                    onChange={(e) =>
                        setSingleTodo((prevValue) => ({
                            ...prevValue,
                            title: e.target.value,
                        }))
                    }
                />
                <br />
                <br />
                <input
                    className="text-2xl px-4 py-2 focus:outline-none capitalize rounded-md"
                    type="text"
                    placeholder="desc"
                    onChange={(e) =>
                        setSingleTodo((prevValue) => ({
                            ...prevValue,
                            desc: e.target.value,
                        }))
                    }
                />
                <br />
                <br />
                <button
                    className="text-2xl bg-green-600 py-2 px-[6.3rem] rounded-md text-white"
                    onClick={handleAddTodo}
                >
                    Add Todo
                </button>
            </div>
            <div className="w-[100%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto py-20 ">
                {allTodos.map((data, i) => (
                    <div
                        className="bg-blue-300/40 m-4 p-2 flex justify-around items-center rounded-lg"
                        key={i}
                    >
                        <div className="flex gap-6 w-[70%] overflow-hidden">
                            <p className="text-4xl">{i + 1}.</p>
                            <div className="flex flex-col items-start gap-1">
                                <h1 className="capitalize text-4xl font-medium">
                                    {data.title}
                                </h1>
                                <p className="text-xl text-gray-700/65">
                                    {data.desc}
                                </p>
                            </div>
                        </div>
                        <button
                            className="capitalize text-xl flex justify-center bg-red-600 text-white px-5 py-3 rounded-md"
                            onClick={() => deleteTodo(i)}
                        >
                            delete
                            <i className="fi fi-rr-trash px-2 mt-1 inline-block"></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
