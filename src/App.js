import logo from './logo.svg';
import './App.css';
import UserProfile from './components/userprofile/userprofile';
import LoginPage from './components/login/login';

function App() {
  return (
    <div className="App">
     <UserProfile/>
     <LoginPage/>
    </div>
  );
}

export default App;
