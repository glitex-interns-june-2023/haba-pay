import './App.css';
import logo from '../assets/logo.jpg'

function App() {
  return (
    <div className="app-container">
      <div className="app-title">
        <h1>HabaPay</h1>
      </div>
      <div className="content">
        <h2>Welcome back</h2>
        <p>Sign in to proceed into your account</p>
        <img className="logo" src="{logo}" alt="HabaPay logo" />
        <button className="sign-in">Sign in</button>
      </div>
    </div>
  )
}

export default App;
