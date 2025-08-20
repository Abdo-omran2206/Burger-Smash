import { motion } from 'motion/react'
function CTA(){
    return(
        <div className="bg-[url(/prev/chef-holding-juicy-beef-burger.jpg)] bg-no-repeat bg-cover bg-top w-full h-full flex justify-center items-center">
            <div className="h-full w-full bg-black/50 flex justify-center items-center">
                <div className="text-center flex flex-col gap-10 items-center">
                    <motion.h2 
                    initial={{opacity:0,y:-50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1}}
                    viewport={{once:true}}
                    className="text-5xl max-sm:text-3xl max-sm:font-bold">Get your order now — and smash your hunger.</motion.h2>
                    <motion.button 
                    initial={{opacity:0, scale:0.8}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{duration:1}}
                    viewport={{once:true}}
                        className="text-2xl font-extrabold uppercase px-20 py-3 
                                    bg-[#F26100] text-white rounded-full 
                                    hover:bg-amber-600 hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:cursor-pointer
                                    active:scale-95 
                                    transition-all duration-300 ease-in-out tracking-wide
                                    max-sm:px-15 max-sm:py-2 max-sm:h-auto
                                    ">
                        Order Now
                        </motion.button>
                </div>
            </div>
        </div>
    )
}
export default CTA;