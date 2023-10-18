import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Student from './03_jsx/Student';
import Clock from './04_element_rendering/Clock';
import CommentList from "./05_component/CommentList";
import NotificationList from "./06_state/NotificationList";
import Accomodate from "./07_custom_hook/Accomodate";
import ConfirmButton from "./08_event_handling/ConfirmButton";
import FunctionalConfirmButton from "./08_event_handling/FunctionalConfirmButton";
import LandingPage from "./09_conditional_rendering/LandingPage";
import AttendanceBook from "./10_list_and_key/AttendanceBook";
import SignUp from "./11_form/SignUp";
import Calculator from "./12_shared_state/Calculator";
import ProfileCard from "./13_composition/ProfileCard";
import DarkOrLight from "./14_context/DarkOrLight";
import Blocks from "./15_styled_components/Blocks";

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
//     root.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>
//     )
// }, 1000);

root.render(
    <React.StrictMode>
        <Blocks/>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
