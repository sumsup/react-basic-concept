import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name="MS" comment="안녕하세요. 컴포넌트 입니다."/>
            <Comment name="쿠키님" comment="안녕하세요. 쿠키 입니다~!"/>
            <Comment name="벌쳐" comment="썸뜨링뇨 마인~"/>
        </div>
    )
}

export default CommentList;