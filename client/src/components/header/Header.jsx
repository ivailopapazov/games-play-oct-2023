export default function Header() {
    return (
        <header>
            <h1><a className="home" href="#">GamesPlay</a></h1>
            <nav>
                <a href="#">All games</a>
                <div id="user">
                    <a href="#">Create Game</a>
                    <a href="#">Logout</a>
                </div>
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    );
}
