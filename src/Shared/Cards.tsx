import { ReactNode } from "react"

interface settingsCard
{
    ICON:      ReactNode,
    Title:     string,
    Info1:     string | ReactNode,
    Info2?:    string | ReactNode,
    Info3?:    string | ReactNode,
}

export const CardsClimax: React.FC<settingsCard> = 
(
    { 
        ICON,
        Title,
        Info1,
        Info2, 
        Info3, 

    }) =>
{
    return(
        <>
        
        <header
        className="
        flex
        justify-center
        items-center
        ">

        <main
        className="
        sm:w-[9rem]
        sm:h-[14rem]
        md:w-[12rem]
        md:h-[15rem]
        xl:w-[20rem]
        text-center
        md:ml-0 
        rounded-3xl
        bg-black
        bg-opacity-95
        text-white
        ">


        <h1
        className="
        block
        relative
        mt-2
        ">
        {ICON}
        </h1>

        <h1
        className="        
        mb-4
        uppercase
        font-extrabold
        ">{Title}</h1>

        <article>
        
        {Info1}
        {Info2}
        {Info3}

        </article>

        
        </main>  
        </header>
        </>
    )
}