import Header from './components/Header/Index';
import Login from './components/Login/Index';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
    </BrowserRouter>
  )
}

export default App;