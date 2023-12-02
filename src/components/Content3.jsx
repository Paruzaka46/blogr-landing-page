import { useMediaQuery } from "react-responsive"

const Content3 = () => {
    const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

    return (
        <div className="text-center font-overpass mb-44 mobile:pt-0 md:pt-44">
            <div className="md:grid md:grid-cols-2 mobile:flex mobile:flex-col justify-center items-center">

                <div className="relative">
                    <img className={isLaptop ? 'absolute -top-[400px] max-w-[800px] xl:right-44 md:right-24':'object-cover relative w-[406px] h-[331px]'} src={isLaptop?'/images/illustration-laptop-desktop.svg':'/images/illustration-laptop-mobile.svg'}/>
                </div>

                <div className="text-start pb-20 ">
                    <h3 className="text-[25px] font-bold text-vd-blue md:pb-4 md:w-full mobile:w-[200px] md:m-0 mobile:m-auto md:text-start mobile:text-center">Free, open, simple editor</h3>
                    <p className="leading-7 text-vdg-blue md:text-start mobile:text-center md:p-0 mobile:px-5">
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                    </p>
                    <br/>
                    <br/>
                    <h3 className="text-[25px] font-bold text-vd-blue md:pb-4 md:w-full mobile:w-[200px] md:m-0 mobile:m-auto md:text-start mobile:text-center">Powerful tooling</h3>
                    <p className="leading-7 text-vdg-blue md:text-start mobile:text-center md:p-0 mobile:px-5">
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.
                    </p>
                </div>

                {/* <div className="relative">
                    <img className={isLaptop && 'absolute -top-[400px] max-w-[800px] xl:left-44 md:left-24'} src={isLaptop?'/images/illustration-editor-desktop.svg':'/images/illustration-editor-mobile.svg'}/>
                </div> */}
            </div>
        </div>
    )
}

export default Content3