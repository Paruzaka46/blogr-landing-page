import { useMediaQuery } from "react-responsive"
import { useState } from "react"

const Header = () => {
    const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

    const [openConnect, setOpenConnect] = useState(false)
    const [openBurger, setOpenBurger] = useState(false)

    const laptopNav = (
        <div className="relative flex justify-between">
            <div className="flex items-center">
                <input className="mr-16" type="image" src="/images/logo.svg"/>
                <ul className="flex text-white font-ubuntu gap-8">
                    <li className="flex items-center gap-1">
                        <a className="hover:underline underline-offset-2" href="#">Product</a>
                        <img src="/images/icon-arrow-light.svg"/>
                    </li>
                    <li className="flex items-center gap-1">
                        <a className="hover:underline underline-offset-2" href="#">Company</a>
                        <img src="/images/icon-arrow-light.svg"/>
                    </li>
                    <li className="relative flex items-center gap-1">
                        <a onClick={() => {setOpenConnect(!openConnect)}} className="hover:underline underline-offset-2" href="#">Connect</a>
                        <img className={openConnect && 'rotate-180'} src="/images/icon-arrow-light.svg"/>
                        <ul className={`absolute bg-white text-black flex flex-col gap-3 w-[180px] rounded-md top-12 px-6 shadow-lg -left-6 ${openConnect?'h-[152] py-7':'h-0 py-0 overflow-hidden'} transition-all`}>
                            <li><a className="hover:font-semibold" href="#">Contact</a></li>
                            <li><a className="hover:font-semibold" href="#">Newsletter</a></li>
                            <li><a className="hover:font-semibold" href="#">LinkedIn</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-8 font-medium">
                <button className="text-white">Login</button>
                <button className="text-l-red bg-white h-10 w-32 rounded-full hover:text-white hover:bg-white/30 transition-all">Sign Up</button>
            </div>
        </div>
    )

    const mobileNav = (
        <div className="relative flex justify-between items-center font-ubuntu">
            <input type="image" src="images/logo.svg"/>
            <input onClick={() => {setOpenBurger(!openBurger)}} type="image" src={openBurger?'/images/icon-close.svg':'/images/icon-hamburger.svg'}/>
            <div className={`absolute bg-white rounded-md shadow-lg w-[100%] top-20  ${openBurger?'h-fit p-5':'h-0 py-0 overflow-hidden'} transition-all`}>
                <ul className="flex flex-col items-center gap-4 text-vd-blue font-medium">
                    <li className="flex items-center gap-1">
                        <a className="hover:underline underline-offset-2" href="#">Product</a>
                        <img src="/images/icon-arrow-dark.svg"/>
                    </li>
                    <li className="flex items-center gap-1">
                        <a className="hover:underline underline-offset-2" href="#">Company</a>
                        <img src="/images/icon-arrow-dark.svg"/>
                    </li>
                    <li className="flex flex-col items-center gap-1 w-[100%]">
                        <div className="flex items-center gap-1">
                            <a onClick={() => {setOpenConnect(!openConnect)}} className="hover:underline underline-offset-2" href="#">Connect</a>
                            <img className={openConnect && 'rotate-180'} src="/images/icon-arrow-dark.svg"/>
                        </div>
                        <ul className={`bg-g-blue/30 text-center flex flex-col gap-3 w-[100%] rounded-md text-vdg-blue top-12 px-6 mt-3 -left-6 ${openConnect?'h-[152] py-5':'h-0 py-0 overflow-hidden'} transition-all`}>
                            <li><a className="hover:font-semibold" href="#">Contact</a></li>
                            <li><a className="hover:font-semibold" href="#">Newsletter</a></li>
                            <li><a className="hover:font-semibold" href="#">LinkedIn</a></li>
                        </ul>
                    </li> 
                </ul>
                <hr className="my-5 w-full"/>
                <div className="flex flex-col items-center gap-4 font-medium">
                    <button className="text-vd-blue">Login</button>
                    <button className="mb-3 bg-gradient-to-r from-intro-left to-intro-right text-white h-10 w-32 rounded-full transition-all">Sign Up</button>
                </div>
            </div>
        </div>
    )

    const laptopBg = (
        <div className="absolute left-0 -top-[200px] max-w-[100%] overflow-hidden h-[43rem] -z-0">
            <img className="relative min-w-max -left-[400px] -top-[1100px]" src="/images/bg-pattern-intro-desktop.svg"/>
        </div>
    )

    const mobileBg = (
        <div className="absolute left-0 -top-[200px] max-w-[100%] overflow-hidden h-[47.2rem] -z-0">
            <img className="relative min-w-max -left-[300px] -top-20" src="/images/bg-pattern-intro-mobile.svg"/>
        </div>
    )

    return (
        <div className={`${isLaptop?'bg-gradient-to-r':' bg-gradient-to-b'} from-intro-left to-intro-right lg:px-44 mobile:px-7 pt-16 pb-10 rounded-bl-2xl`}>
            <div className="relative z-20">
                {isLaptop? laptopNav:mobileNav}
                <div className={`flex flex-col items-center font-overpass text-white py-20 text-center ${isLaptop?'w-full':'max-w-[320px] m-auto'}`}>
                    <h1 className="md:text-[54px] mobile:text-[38px] font-semibold tracking-tighter">A modern publishing platform</h1>
                    <p className="mb-8 md:text-[16px] mobile:text-[19px]">Grow your audience and build your online brand</p>
                    <div className="flex gap-5 font-ubuntu font-medium">
                        <button className="text-l-red bg-white h-12 w-32 rounded-full hover:text-white hover:bg-white/30 transition-all">Start for Free</button>
                        <button className="text-white bg-none border-solid border-2 border-white h-12 w-32 rounded-full hover:text-l-red hover:bg-white transition-all">Learn More</button>
                    </div>
                {/* <img className="absolute resize-none -z-10 -top-[120%] left-[30%] scale-[180%]" src="/images/bg-pattern-intro-desktop.svg"/> */}
                </div>
            </div>
            {isLaptop?laptopBg:mobileBg}
                {/* <div className="absolute left-0 -top-[200px] max-w-[100%] overflow-hidden h-[43rem] -z-0">
                    <img className="relative min-w-max -left-[400px] -top-[1100px]" src="/images/bg-pattern-intro-desktop.svg"/>
                </div> */}
        </div>
    )
}

export default Header