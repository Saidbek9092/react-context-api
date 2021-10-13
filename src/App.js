import './App.css';
import MoviesList from "./MoviesList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";


function App() {
    return (
        <MovieProvider>
            <div className="App">
                <Nav/>
                <AddMovie/>
                <MoviesList/>
            </div>
        </MovieProvider>
    );
}

export default App;
