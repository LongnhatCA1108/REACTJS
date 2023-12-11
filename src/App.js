import Header from 'components/Header';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import TodoFeatutes from './features/todo';
import AlbumFeatutes from './features/Album';
// import ColorBox from './components/ColorBox';
// import Counter from './components/Counter';
// import TodoList from './features/todo/components/TodoList';
import CounterFeature from 'features/Counter';
import Clock from './components/Clock';
import TodoFeatutes from './features/todo';
// import CustomTextInput from './components/CustomTextInput'
import { useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';


function App() {
  useEffect(() =>{


  },[])


  return (
  <div id="body" className='App'>

    <Header />
    <div id="content">
      <Routes>
        <Route path="/count" element={<CounterFeature />}/>
        <Route path="/todo" element={<TodoFeatutes />}/>
        <Route path="/clock" element={<Clock />} />
        <Route path="/Album" element={<AlbumFeatutes />} />
        <Route path="*" element={<p>Trang này không tồn tại</p>} />
      </Routes>
    </div>

  </div>
  );
}

export default App;
