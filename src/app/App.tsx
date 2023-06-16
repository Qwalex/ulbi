import { Link, Route, Routes, Outlet } from 'react-router-dom'
import { Suspense, useContext } from 'react'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { useTheme } from 'shared/theme/useTheme';
import { classNames } from 'shared/lib';
import "shared/styles/index.scss";

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames(['app', theme])}>
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