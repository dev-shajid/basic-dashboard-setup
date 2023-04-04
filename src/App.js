import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Dashboard from './pages/Dashboard'
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import ClassList from './pages/ClassList'
import SubjectList from './pages/SubjectList'
import ExamList from './pages/ExamList'
import Settings from './pages/Settings'
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/students' element={<Students />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/class' element={<ClassList />} />
          <Route path='/subject' element={<SubjectList />} />
          <Route path='/exam' element={<ExamList />} />
          <Route path='/setting' element={<Settings />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
