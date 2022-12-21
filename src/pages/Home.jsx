import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
    return <div>
        {/* <Announcement /> */}
        <Navbar />
        <Slider />
        <Categories/>
        <h1 style={{textAlign: 'center', margin:'20px 0'}}>ХИТЫ ПРОДАЖ</h1>
        <Products />
        <Newsletter />
        <Footer />
    </div>;
}

export default Home;