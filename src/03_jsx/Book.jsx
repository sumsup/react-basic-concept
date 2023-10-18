import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 사람의 이름은 ${props.name} 입니다.`}</h1>
            <h2>{`이 사람의 키는 ${props.height}cm 입니다.`}</h2>
        </div>
    );
}

export default Book;