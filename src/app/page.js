import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AppleWatch from './components/AppleWatch';
import ProductItems from './components/ProductItems';
import Exchange from './components/Exchange';
import Airpods from './components/Airpods';
import ArGlasses from './components/Arglasses';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <AppleWatch />
            {/* <ProductItems /> */}
            <Airpods />
            <ArGlasses />
            <Exchange />
            <Footer />
        </>
    );
}
