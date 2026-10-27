import Navbar from './components/Navbar';

import  Hero  from './components/Hero';
import SearchFilter from './components/SearchFilter';
import CarList from './components/CarList';

import Services from './components/Services';

import About from './components/About';

import MoreListings from './components/MoreListings';

import Contact from './components/Contact';

import Footer from './components/Footer';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Auto Dealer',
  description: 'Find your dream car with our smart filters and extensive inventory.',
};
export default function Home() {
  return (
  <>
      <Navbar />
      <Hero />
      <SearchFilter />
      <CarList />
      <Services />
      <About />
      <MoreListings />
      <Contact />
      <Footer />
    </>
  );
}
