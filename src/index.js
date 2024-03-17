// 우리가 만든 컴포넌트를 실제로 화면에 렌더링하기 위한 파일

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from "./chapter_04/Clock";
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chpater_08/ConfirmButton';
import LandingPage from './chpater_09/LandingPage';
import AttendanceBook from './chpater_10/AttendanceBook';
import SignUp from './chpater_11/SignUp';
import Calculator from './chpater_12/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,

  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>,

//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>,

//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,

//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>,

//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>,

//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,

//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,

//   document.getElementById('root')
// );

// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

// react-dom 을 사용하여 root-dom 노드에 렌더링하도록 하는 코드
// ReactDOM.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
   
//   document.getElementById('root')
//  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
