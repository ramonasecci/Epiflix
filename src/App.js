import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import AllMovies from './components/AllMovies';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import SelectCategory from './components/SelectCategory';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {

  const [searchR, setSearchR] = useState('')

  const getNewSearch = (ricerca) => {
    setSearchR(ricerca)
    console.log(ricerca)
  }

  const url = "http://www.omdbapi.com/?apikey=1b936975"

  return (
    <div>
      <BrowserRouter>
      <header>
        <MyNavbar getNewSearch= {getNewSearch}/>
      </header>
      <main>
        <SelectCategory />
        <Routes>
          <Route path="/" element={<AllMovies />}/>
          <Route path="/search" element={<MovieList categorySearch={url + "&s=" + searchR} title="Search Result" />}/>
        
        </Routes>
      </main>
      <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
