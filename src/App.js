import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Page/Homepage';
import Details from './Page/Details';


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element= {<Homepage />} />
        <Route index element= {<Homepage />} /> 
        <Route path='/Details/:id' element={<Details />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
