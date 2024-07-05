import React from 'react';
import  StaticMenuItem from  './StaticMenuItem';
import DynamicMenuItem from './DynamicMenuItem';
let  menuItems = [
  {
    name: 'Cheeseburger',
    price: '₹150',
    description: 'A delicious cheeseburger with a juicy beef patty, melted cheese, lettuce, tomato, and a special sauce.'
  },
  {
    name: 'Veggie Pizza',
    price: '₹200',
    description: 'A delightful pizza topped with fresh vegetables, mozzarella cheese, and a tangy tomato sauce.'
  },
  {
    name: 'Chicken Tenders',
    price: '₹180',
    description: 'Crispy and golden chicken tenders served with a side of honey mustard sauce.'
  }
];
 
const App = () =>{
   return (
  
  <div className ="app" >
    < StaticMenuItem />
    <DynamicMenuItem
     name = "burger"
     price = "20"
     description="A burger is a patty of ground beef grilled and placed between two   halves of a bun."
    />
    
    <DynamicMenuItem
     name = "Pasta"
     price = "30"
     description="Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled."
    />
     <DynamicMenuItem
     name = " Sandwich"
     price = "40"
     description="Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch."
    />
    {  menuItems.map((item) =>(
    <DynamicMenuItem
     name = {item.name}
     price = {item.price}
     description = {item.description}
    
    />
    ))}
   </div>
   
    
   );
};

export default App;
