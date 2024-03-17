// student 라는 배열로부터 학생 정보가 담긴 객체를 받아 학생들의 이름을 목록 형태로 출력하는 컴포넌트.

import React from "react";

const students = [
    {
        id: 1,
        name: "eunxi",
    },
    {
        id: 2,
        name: "hanul",
    },
    {
        id: 3,
        name: "steve",
    },
    {
        id: 4,
        name: "bill",
    },
    {
        id: 5,
        name: "jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>
                // key={`student-id=${student.id}`}
                // key={index}
            })}
        </ul>
    );
}

export default AttendanceBook;