import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    return (
        <Layout>
            <div className="bg-grey-lighter flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="ユーザー名"
                        />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="メールアドレス"
                        />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="パスワード"
                        />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="パスワード確認"
                        />

                        <Link to="/LogInPage">
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-300 text-white hover:bg-green-dark focus:outline-none my-1"
                            >
                                Create Account
                            </button>
                        </Link>
                    </div>

                    <div className="text-grey-dark text-base mt-6">
                        既にアカウントを持っていますか？
                        <br />
                        <Link to="/LogInPage">
                            <a
                                className="no-underline border-b border-blue text-blue"
                                href="../login/"
                            >
                                ログインする
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUpPage;
