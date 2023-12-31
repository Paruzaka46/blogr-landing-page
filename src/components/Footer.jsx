import { useMediaQuery } from "react-responsive"

const Footer = () => {
    const isLaptop = useMediaQuery({query: '(min-width: 768px)'})
    const burgers = [
        {
            name: 'Product',
            lists: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']
        },
        {
            name: 'Company',
            lists: ['About', 'Team', 'Blog', 'Career']
        },
        {
            name: 'Connect',
            lists: ['Contact', 'Newsletter', 'LinkedIn']
        }
    ]

    return (
        <div className={`bg-vd-black-blue text-white font-ubuntu ${isLaptop?'grid grid-cols-4':'flex flex-col gap-8 text-center'} px-32 py-14 rounded-tr-[5rem]`}>
            <img src="/images/logo.svg"/>
            {burgers.map((burger, index) => {
                return (
                    <div>
                        <h3 className="mb-5">{burger.name}</h3>
                        <ul className="flex flex-col gap-2">
                        {burger.lists.map((list,index) => {
                            return (
                                <li className="hover:underline underline-offset-2"><a href="#">{list}</a></li>
                            )
                        })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Footer