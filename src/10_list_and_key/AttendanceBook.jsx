import React from "react";

const students = [
    {
        id: 1,
        name: "민수",
    },
    {
        id: 2,
        name: "철수",
    },
    {
        id: 3,
        name: "수지"
    },
    {
        id: 4,
        name: "지현"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{index} {student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;