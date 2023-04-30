import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AppleWatch from './components/AppleWatch';
import ProductItems from './components/ProductItems';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <AppleWatch />
            <ProductItems />
            {/* <Footer /> */}
        </>
    );
}
