import "./styles/index.scss"
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Discover from "./Components/Discover";
import Search from "./Components/Search";
import Favourites from "./Components/Favourites";
import Playlist from "./Components/Playlist";
import Charts from "./Components/Charts"; 
import { Routes, Route } from "react-router-dom";


function App() {
 

   
  return (
    <div className="App">
     <Navbar />
     <Header />
     <main>
     <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/Playlist" element={<Playlist />} />
      <Route path="/Charts" element={<Charts />} />
     </Routes>
     </main>
    </div>
  );
}

export default App;
