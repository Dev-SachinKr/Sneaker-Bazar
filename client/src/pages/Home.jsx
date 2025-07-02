import React from 'react'
import ProductCard from "../components/ProductCard";
import HeroCarousel from '../components/HeroCarousel';

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 6999,
    image: "https://images.unsplash.com/photo-1711491559395-c82f70a68bfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 8499,
    image: "https://images.unsplash.com/photo-1547974009-6fb0db54c905?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 5999,
    image: "https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const Home = () => {
  return (
    <>
      
      <HeroCarousel/>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Sneakers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home