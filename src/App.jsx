import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '@/routes';
import './App.css';

const router = createBrowserRouter(routes);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src={reactLogo} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
