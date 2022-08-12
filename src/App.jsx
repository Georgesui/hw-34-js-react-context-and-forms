import './App.css';
import Todos from './components/TodoManagement/Todos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound'
import TodoDetails from './components/TodoManagement/TodoDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Todos />}/>
        <Route path='todos/:id' element={<TodoDetails/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;