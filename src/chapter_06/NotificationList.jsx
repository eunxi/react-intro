// NotificationLsit 컴포넌트는 Notification 컴포넌트를 목록 형태로 보여주기 위한 컴포넌트.

import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // 생성자에서는 앞으로 사용할 데이터를 state 에 넣어서 초기화 진행
        this.state = {
            notifications: [],
        };
    }

    /* 
     * 컴포넌트의 생명주기 함수 중 componentDidMount 함수에서는 자바스크립트의 setInterval 함수를 사용하여
     * 매 1000ms, 즉 1초마다 정해진 작업을 수행한다.
     * 이 작업은 미리 만들어둔 알림데이터 배열인 reserved notifications 로부터 알림데이터를 하나씩 가져와서
     * state 에 있는 notifications 배열에 넣고 업데이트 하는 것이다.
     * state 를 업데이트 하기 위해서 setState 함수를 사용한다는 것을 주목하기.
     */
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reserveNotifications.length) {
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                // setState 내 notification 배열 초기화시켜주면 unmount 되는 것을 확인할 수 있다.
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        // key : 리액트 엘리먼트를 구분하기 위한 고유의 값으로, 맵함수를 사용할 땐 필수 
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;