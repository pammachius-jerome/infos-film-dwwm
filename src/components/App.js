// ligne manquante dans l'énnoncer: 04 Gérer le routage dans les applications React avec React Router
import { Routes, Route } from 'react-router-dom';
import './App.css';
// erreur on doit importer Layout pas App
import Layout from './Layout/Layout';
import Home from './Home/Home';
// erreur on doit importer About pas App
import About from './About/About'
import Search from './Search/Search'
import List from './List/List';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/List/:data" element={<List />} />
        </Route>
      </Routes>
     
    </div >
  );
}

export default App;


// clef API 4453c98d8fdd513a3fa135c984398ccb
// Jeton d'accès en lecture à l'API eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDUzYzk4ZDhmZGQ1MTNhM2ZhMTM1Yzk4NDM5OGNjYiIsInN1YiI6IjY1OTU3ODhkZDdhNzBhMTFjNzY5NzYwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q7Ekn0lB0Hd-XA9X2WlzJu2QhPcm8nywybIIFYWYNDA