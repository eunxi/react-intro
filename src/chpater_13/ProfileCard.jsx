// 카드 컴포넌트를 사용하여 타이틀에 이름을 넣고 백그라운드 컬러를 녹색으로 설정하고, children 으로는 간단한 소개글을 넣어봄.
// 이렇게 하면 카드 컴포넌트가 사용자의 프로필을 나타내는 프로필 카드 컴포넌트가 된다.

import Card from "./Card";

function ProfileCard(porps) {
    return (
        <Card
            title="Eunxi" backgroundColor="#4ea04e"
        >
            <p>안녕하세요, 은지입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    )
}

export default ProfileCard;