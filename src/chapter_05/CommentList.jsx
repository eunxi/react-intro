import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "은지",
        comment: "안녕!",
    },
    {
        name: "한울",
        comment: "은지는 바보",
    },
    {
        name: "웅지",
        comment: "하눙이 사랑해",
    },
    {
        name: "하눙",
        comment: "웅지 사랑해",
    },
    
]

function CommentList(props) {
    return (
        <div>
            {/* JavaScript 배열의 map 함수를 써서 각 댓글 객체에 대해서 comment 컴포넌트를 return 하도록 코드 작성. */}
            {comments.map((comments) => {
                return (
                    <Comment name={comments.name} comment={comments.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;