import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import React from 'react';
//import TodoFeatutes from './features/todo';
import AlbumFeatutes from './features/Album';
// import ColorBox from './components/ColorBox';
// import Counter from './components/Counter';
// import TodoList from './features/todo/components/TodoList';
import TodoFeatutes from './features/todo';
import Clock from './components/Clock';
// import CustomTextInput from './components/CustomTextInput'
function App() {
  return (

    <div>
      Đây là cái header
      <div><Link to="/todo/6699">todo</Link></div>
      <div><Link to="/clock">Clock</Link></div>
      <div><Link to="/Album">Album</Link></div>
      <div>
        <NavLink
          to="/Album"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >Album</NavLink></div>
      <Routes>
        <Route
          path="/todo/:id"
          element={<Navigate to="/clock/${params.id}" />}
        />
        <Route path="/clock" element={<Clock />} />
        <Route path="/Album" element={<AlbumFeatutes />} />
      </Routes>
      Đây là cái footer
    </div>

  );
}

export default App;
