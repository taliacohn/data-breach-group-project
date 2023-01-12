import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import OrderDetails from './components/OrderDetails';

function App() {
  const routes =
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/order-details" element={<OrderDetails />} />
    </Routes>
  return (
    <>
      <Router>
        {routes}
      </Router>
    </>
  );
}

export default App;
