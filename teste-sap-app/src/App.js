import React from 'react'
import './App.css'
import Routes from './routes/index.routes'
import { UserProvider } from './context/user/user.context'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
