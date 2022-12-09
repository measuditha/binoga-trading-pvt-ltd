import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { Policies } from "./pages/Policies";
import { Contact } from "./pages/Contact";
import {Error} from "./pages/Error";
import { SharedLayout } from "./components/SharedLayout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path='Welcome' element={<Welcome/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Policies' element={<Policies/>}/>
          <Route path='Contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
