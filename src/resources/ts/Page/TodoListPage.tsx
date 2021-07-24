import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const todoList = [
    { text: "英語の勉強", time: "2021-07-24" },
    { text: "国語の勉強", time: "2021-07-25" },
    { text: "数学の勉強", time: "2021-07-26" }
];

const TodoListPage = () => {
    const initialDate = new Date();
    const [startDate, setStartDate] = useState(initialDate);
    const handleChange = (date: any) => {
        setStartDate(date);
    };
    return (
        <Layout>
            <div className="h-100 m-auto flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full ">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="mt-4">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                placeholder="ToDoリストを追加"
                            />
                            <div className="flex flex-col">
                                <div className="border-2 rounded text-teal border-teal my-3">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleChange}
                                        dateFormat="yyyy-MM-dd"
                                    />
                                </div>
                                <button className="ml-4 mr-2 p-2 border-2 rounded text-teal border-teal ">
                                    追加
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {todoList.map(todo => {
                            return (
                                <div className="mb-4" key={todo.text}>
                                    <div className="flex">
                                        <ul>
                                            <li className="pr-4 text-grey-darkest list-disc">
                                                {todo.text}
                                            </li>
                                        </ul>
                                        <p>{todo.time}</p>
                                    </div>
                                    <div className="grid grid-cols-3">
                                        <button className="py-2 px-4 ml-4 mr-2 border-2 rounded ">
                                            編集
                                        </button>
                                        <button className="py-2 px-4 ml-4 mr-2 border-2 rounded ">
                                            完了
                                        </button>
                                        <button className="py-2 px-4 ml-4 mr-2 border-2 rounded text-red border-red">
                                            削除
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Link to="/">トップに戻る</Link>
        </Layout>
    );
};

export default TodoListPage;
