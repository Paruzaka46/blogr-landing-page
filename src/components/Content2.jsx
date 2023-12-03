import { useMediaQuery } from "react-responsive"

const Content2 = () => {
    const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

    return (
        <div className="bg-gradient-to-r from-body-left to-body-right font-overpass my-20 text-white rounded-tr-[7rem] rounded-bl-[7rem]">
            <div className={`bg-[url('/images/bg-pattern-circles.svg')] bg-no-repeat md:bg-[left_-14rem_bottom_-7rem] grid md:grid-cols-2 items-center ${!isLaptop && 'bg-contain bg-[center_top_-8rem] flex flex-col items-center justify-center'} rounded-tr-[7rem]`}>
                <div className="relative md:h-[22rem] mobile:h-[12rem]">
                    <img className={`relative mobile:mx-auto md:mx-0 md:-top-[7rem] md:left-20 scale-[80%] ${!isLaptop && 'max-h-[400px]'} -top-[10rem]`} src="/images/illustration-phones.svg"/>
                </div>

                <div className="md:text-start mobile:text-center px-10 md:mb-0 mobile:mb-32">
                    <h2 className="text-[35px] font-bold mb-3 ">State of the Art Infrastructure</h2>
                    <p className="md:w-[30rem]">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>
        </div>
    )
}

export default Content2