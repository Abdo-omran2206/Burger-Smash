import Image from "next/image";
import { motion } from "motion/react";
function About(){
  return(
    <div className="flex flex-row px-30 py-50 gap-10">
        <motion.div
        initial={{opacity:0, scale:0.8}}
        whileInView={{opacity:1, scale:1} }
        transition={{duration:0.5}}
        viewport={{ once: true, amount: 0.5 }}
        className="w-[100%] flex justify-center items-center">
            <Image src='/view-delicious-burger-with-buns-cheese.jpg' alt="burger" width={450} height={450} className="rounded-md shadow-[5px_5px_30px_-4px_rgba(230,158,10,0.5)] shadow-[#E69E0A]" loading="lazy"/>
        </motion.div>
        <motion.div
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5}}
        viewport={{ once: true, amount: 0.5 }}
        className="w-[100%] flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-5 tracking-tight leading-relaxed">
            FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE
            </h2>
            <hr className="border-2 border-[#E69E0A] mb-5 font-bold" />
            <p className="text-xl/9 mb-5 w-[80%]">
            At Burger Smash, we don’t do average. We smash our burgers hard, sear them fast, and stack them high. Juicy beef, molten cheese, crispy edges—every bite is built to dominate your cravings.
    Forget boring, forget basic. Our burgers hit loud, bold, and unapologetic. Fries? Loaded. Shakes? Over the top. Flavor? Turned all the way up.
    This isn’t just food—it’s a smash to the face of bland burgers everywhere. Welcome to Burger Smash. Come hungry, leave wrecked
            </p>
            <button className="bg-[#FF7D04] px-10 py-2 rounded-4xl shadow-[5px_5px_15px_rgba(230,158,10,0.5)] hover:bg-[#e06900] transition-colors duration-200 hover:cursor-pointer">Check Our Menu</button>
        </motion.div>
    </div>

  )
}

export default About;