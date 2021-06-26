import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action, ComedyMovies, originals , HorrorMovies ,RomanceMovies , Documentaries} from './urls';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix originals' url={originals} />
      <RowPost title='Action' isSmall url={action}/>
      <RowPost title='Comedy Movies' isSmall url={ComedyMovies}/>
      <RowPost title='Horror Movies' isSmall url={HorrorMovies}/>
      <RowPost title='Romance Movies' isSmall url={RomanceMovies}/>
      <RowPost title='Documentaries' isSmall url={Documentaries}/>
    </div>
  );
}

export default App;
