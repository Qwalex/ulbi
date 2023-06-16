import { Link, Route, Routes, Outlet } from 'react-router-dom'
import { Suspense, useContext } from 'react'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import "shared/styles/index.scss";
import { useTheme } from 'shared/theme/useTheme';

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Тема</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route index path='/' element={<MainPage />} />
                    <Route index path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
            <Outlet />
        </div>
    )
}

export default App