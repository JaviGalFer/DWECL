import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const pizzasVacio=[];

function App() {
  return (
    <div><Header/>
    <Menu/>
    <Footer/>
    </div>
  );
}

function Header() {
  return (<header className='header'><h1 >Pizzeria Torre del Marrrrrrrrrrrr</h1></header>);
}

function Menu() {
  return (<main className='menu'><h2>Nuestro Menu</h2>
  <p>skuhadhasfasiofnasifsaiufasfasufasufbasubfassbfasibfauif</p>
  {pizzaData.length>0 && 
  <ul className='pizzas'>
  {pizzaData.map((itemPizza) => <Pizza 
  imagen={itemPizza.photoName}
  nombre={itemPizza.name}
  ingredientes={itemPizza.ingredients}
  precio={itemPizza.price}
  />)} 
  </ul>} 
  {/*
  <Pizza imagen="pizzas/funghi.jpg" nombre="funghi" ingredientes="Tomate" precio={50}/>
  <Pizza imagen="pizzas/focaccia.jpg" nombre="foccaccia" ingredientes="Queso" precio={50}/>
  <Pizza imagen="pizzas/salamino.jpg" nombre="salamino" ingredientes="Salami" precio={50}/>
  */}
  </main>);
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 8;
  const closeHour = 20;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  
  return (
  <footer className='footer'>
    
    <div className='order'>
    {isOpen ? 
    ( 
    <button>Order</button>
    </div>) : (<p>Estamos cerrados</p>)}
  </footer>);
}

function Pizza(props) {
  return (<div className='pizza'>
    <img src={props.imagen} alt={props.nombre}/>
    <h2>{props.nombre}</h2>
    <p>{props.ingredientes}</p>
    <p>{props.precio}</p>
  </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);