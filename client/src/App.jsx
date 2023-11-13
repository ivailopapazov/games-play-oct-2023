import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Login from './components/login/Login';

function App() {
    return (
        <div id="box">
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GameList />} />
                <Route path="/games/create" element={<GameCreate />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
