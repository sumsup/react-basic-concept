import React from "react";
import Book from "./Book";

function Student(props) {
    return (
        <div>
            <Book name="김민수" height={180}/>
            <Book name="일론 머스크" height={190}/>
            <Book name="빌 게이츠" height={183}/>
        </div>
    );
}

export default Student;