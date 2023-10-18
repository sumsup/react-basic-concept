import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "안녕하세요, 오늘 일정을 알려줄게요.",
    },
    {
        message: "오늘의 일정은 없습니다!!",
    },
    {
        message: "앞으로 푹 쉬면서 인생을 탐구 하시면 되겠습니다.",
    }
];

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
            currentIndex: 0
        };

        this.timer = null;
    }

    componentDidMount() {
        this.timer = setTimeout(this.showNextNotification, 1000);
    }

    showNextNotification = () => {
        const { notifications, currentIndex } = this.state;

        if (currentIndex < reservedNotifications.length) {
            const newNotification = reservedNotifications[currentIndex];
            const updatedNotifications = [...notifications, newNotification];

            this.setState({
                notifications: updatedNotifications,
                currentIndex: currentIndex + 1,
            });

            this.timer = setTimeout(this.showNextNotification, 1000);
        } else {
            clearTimeout(this.timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message} />
                })}
            </div>
        );
    }
}

export default NotificationList;