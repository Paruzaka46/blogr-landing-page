import { useMediaQuery } from "react-responsive"
import { useState } from "react"

const Content1 = () => {
    const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

    return (
        <div className="text-center font-overpass mb-44">
            <h2 className="text-[30px] m-auto md:mb-20 mobile:mb-10 font-bold text-vd-blue">Designed for the future</h2>
            <div className="md:grid md:grid-cols-2 mobile:flex mobile:flex-col-reverse justify-center items-center">
                <div className="text-start md:pl-44 mobile:pl-0 pb-20 ">
                    <h3 className="text-[25px] font-bold text-vd-blue md:pb-4 md:w-full mobile:w-[200px] md:m-0 mobile:m-auto md:text-start mobile:text-center">Introducing an extensible editor</h3>
                    <p className="leading-7 text-vdg-blue md:text-start mobile:text-center md:p-0 mobile:px-5">
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
    change the looks of a blog.
                    </p>
                    <br/>
                    <br/>
                    <h3 className="text-[25px] font-bold text-vd-blue md:pb-4 md:w-full mobile:w-[200px] md:m-0 mobile:m-auto md:text-start mobile:text-center">Robust content management</h3>
                    <p className="leading-7 text-vdg-blue md:text-start mobile:text-center md:p-0 mobile:px-5">
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog 
    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                    </p>
                </div>
                <div className="relative">
                    <img className={isLaptop && 'absolute -top-[400px] max-w-[800px] xl:left-44 md:left-24'} src={isLaptop?'/images/illustration-editor-desktop.svg':'/images/illustration-editor-mobile.svg'}/>
                </div>
            </div>
            
        </div>
    )
}

export default Content1