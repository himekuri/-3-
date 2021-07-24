import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layouts/Layout";

const LogInPage = () => {
    return (
        <Layout>
            <div className="pt-40">
                <div className="w-full max-w-xs m-auto ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                ユーザー名
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                パスワード
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="パスワード"
                            />
                        </div>
                        <div className="flex justify-around">
                            <Link to="/">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    ログイン
                                </button>
                            </Link>
                            <Link to="/">
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    新規登録
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default LogInPage;
