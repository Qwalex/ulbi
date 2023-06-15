import { Link, Route, Routes, Outlet } from 'react-router-dom'
import { Suspense, useContext } from 'react'
import MainPageAsync from './pages/MainPage/MainPage.async'
import AboutPageAsync from './pages/AboutPage/AboutPage.async'
import "./styles/index.scss";
import { useTheme } from './theme/useTheme';

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Тема</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route index path='/' element={<MainPageAsync />} />
                    <Route index path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
            <Outlet />
        </div>
    )
}

export default App