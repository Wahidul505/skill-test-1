import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import MyTasks from './components/MyTasks';
import RequireAuth from './components/RequireAuth';
import Task from './components/Task';
import auth from './firebase.init';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/my-tasks'>My Task</Link>
        {user ? <button onClick={() => signOut(auth)}>SignOut</button>
          :
          <Link to='/login'>Login</Link>
        }
      </div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/task' element={
          <RequireAuth>
            <Task />
          </RequireAuth>
        } />

        <Route path='/my-tasks' element={
          <RequireAuth>
            <MyTasks />
          </RequireAuth>
        } />
      </Routes>
    </div>
  );
}

export default App;
