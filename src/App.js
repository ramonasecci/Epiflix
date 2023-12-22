import './App.css';
import AllMovies from './components/AllMovies';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import SelectCategory from './components/SelectCategory';



function App() {
  return (
    <div>
      <header>
        <MyNavbar />
      </header>
      <main>
        <SelectCategory />
        <AllMovies />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
