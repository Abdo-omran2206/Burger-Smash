import { motion } from "motion/react";
import Image from "next/image";

function Menu(){
    const menu = [
  {
    "name": "Classic Cheeseburger",
    "price": 7.99,
    "image": "/elements/burger-hamburger-cheeseburger.jpg"
  },
  {
    "name": "Double Smash Burger",
    "price": 9.49,
    "image": "/elements/delicious-burger-with-fire.jpg"
  },
  {
    "name": "BBQ Bacon Burger",
    "price": 10.25,
    "image": "/elements/delicious-burger-with-fresh-ingredients.jpg"
  },
  {
    "name": "Mushroom Swiss Burger",
    "price": 9.75,
    "image": "/elements/delicious-looking-3d-burger-with-simple-background.jpg"
  },
  {
    "name": "Spicy Jalapeño Burger",
    "price": 8.99,
    "image": "/elements/front-view-tasty-meat-burger-with-cheese-salad-dark-background.jpg"
  },
  {
    "name": "Avocado Ranch Burger",
    "price": 10.50,
    "image": "/elements/burger-hamburger-cheeseburgers.jpg"
  },
  {
    "name": "Blue Cheese Burger",
    "price": 9.89,
    "image": "/elements/delicious-burgers-with-bright-lights.jpg"
  },
  {
    "name": "Vegan Beyond Burger",
    "price": 11.00,
    "image": "/elements/delicious-vegan-burger-presentation.jpg"
  },
  {
    "name": "Triple Stack Burger",
    "price": 12.75,
    "image": "/elements/melted-cheese-burger.jpg"
  }
]
    return(
        <div className="px-8 py-6 w-full">
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-8 flex flex-col justify-center"
            >
            <h2 className="text-5xl font-bold tracking-tight leading-relaxed text-center underline decoration-[#E69E0A] decoration-4 underline-offset-8">OUR MENU</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 rounded-lg min-w-full">
            {menu.map((item, index) => (
                <BurgerCard 
                    key={index}
                    name={item.name} 
                    price={item.price} 
                    index={index} 
                    image={item.image} 
                />
            ))}
            </div>
        </div>
    )
}

export default Menu;

interface BurgerCardProps {
    name: string;
    price: number;
    index: number;
    image: string;
}

function BurgerCard({ name, price, index, image }: BurgerCardProps) {
    return (
        <motion.div
            key={index}
            className="border-2 rounded-2xl border-[#E69E0A] px-10 py-5 h-110"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="w-full flex justify-center mb-4 overflow-hidden h-70 rounded-sm">
              <Image 
                        src={image} 
                        alt={name} 
                        width={200}
                        height={160}
                        className="object-cover w-full h-full transition-transform duration-300"
                        loading="lazy"
                    />
            </div>
            <div className="text-center flex flex-col gap-1">
                <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
                <p className="text-xl font-bold text-[#E69E0A]">${price.toFixed(2)}</p>
                <button className="px-5 py-1 bg-[#E69E0A] rounded-4xl hover:bg-amber-600 hover:cursor-pointer transition duration-300 tracking-tighter hover:shadow-xl/35 hover:shadow-amber-400">Order Now</button>
            </div>
        </motion.div>
    );
}