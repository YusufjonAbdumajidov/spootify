import "./styles/index.scss"
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Discover from "./Components/Discover";
import Search from "./Components/Search";
import Favourites from "./Components/Favourites";
import Playlist from "./Components/Playlist";
import Charts from "./Components/Charts"; 

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
    </div>
  );
}

export default App;
