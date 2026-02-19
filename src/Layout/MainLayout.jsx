import React from 'react';
import { Outlet } from 'react-router';
// import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import Navbar from '../Components/Shared/Navbar';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen max-w-screen-2xl mx-auto '>
            <header>
            <Navbar></Navbar>
            </header>

            <main className='flex-1'>
            <Outlet></Outlet>
            </main>

            <footer>
            <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;