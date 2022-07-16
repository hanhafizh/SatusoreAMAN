import FilterUtama from "./component/FilterUtama";
import Navigationbar from './component/Navigationbar';
import Home from "./component/Home";
import Footer from "./component/Footer";
import {Routes, Route, Redirect} from 'react-router-dom'


import "./component/style.css"
import "./App.css"

function App() {
  return (
    <div>
      <Navigationbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="filter" element={<FilterUtama />}/>
        </Routes>
        </div>
      <div>
        <Footer />
      </div>
      
      {/* <div className="MainContent">
      <MainContent />
      </div>
      <div className="SecondContent">
      <SecondContent />
      </div>
      <div className="Filter">
        <FilterUtama />
      </div>
      <div className="Footer">
      <Footer />
  </div> */}
    </div>
  );
}

export default App;