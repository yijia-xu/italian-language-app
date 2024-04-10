import React from 'react'
import App from "./App";
import Link from "next/link";

const QuizList = () => {
    return (
<html>
<head></head>
<body>
<div className="w-full  text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5">
    <div className="flex items-center">
        <h1 className="text-3xl">Quiz List</h1>
    </div>
    <div className="current-courses">
                <table className="table-dark">
                    <thead>
                    <tr>
                        <th>Quizzes</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Link href="App"> ITAL1001 </Link>
                        </tr>
                    </tbody>
                </table>

    </div>
    {/* {!addCourse && <button onClick={() => setAddCourse(true)} className='text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30'>ADD COURSE</button>} */}
</div>
</body>
</html>
    );
}

export default QuizList;
