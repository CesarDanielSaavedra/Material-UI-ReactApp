import { Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Notes /> }/>
      <Route path="/create" element={ <Create /> }/>
    </Routes>
  );
}

export default App;