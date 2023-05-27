'use client'
import { useEffect, useState } from "react";
import { CardsClimax } from "@/Shared/Cards";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BiSearchAlt, BiWind } from "react-icons/bi";
import { AiFillCloud } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import Swal from 'sweetalert2'
import axios from "axios";

export default function ProjectSearch() 
{
    const [Search , setSearch] = useState<string>('');
    const [Loading , setLoading] = useState<Boolean>(true);
    const [TempAtual , setTempAtual] = useState<number>(0)
    const [TempMAX , setTempMAX] = useState<number>(0);
    const [TempMIN , setTempMIN] = useState<number>(0);
    const [Velocidade , setVelocidade] = useState<number>(0);
    const [Umidade , setUmidade] = useState<number>(0);
    const [Cidade , setCidade] = useState<string>('');
    const [Clima, setClima] = useState<string>('');
    const [Lat , setLat] = useState<number>(0);
    const [Log , setLog] = useState<number>(0);

    useEffect(()=>
    {
      setTimeout(()=>
      {
        setLoading(false);
      },2000)
    },[])

    
    const ClimaxAPI = () =>
    {
      const API_Key:string = 'afa809f86d34378755fc93205db38eee';
      const cidade:string = Search;
      const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${API_Key}&lang=pt_br`;

      axios.get(URL)
      .then(async (response: any) =>
      {
        setTempMAX(response.data.main.temp_max);
        setTempMIN(response.data.main.temp_min);
        setTempAtual(response.data.main.temp_min);
        setUmidade(response.data.main.humidity);
        setVelocidade(response.data.wind.speed);
        setCidade(response.data.name);
        setClima(response.data.weather[0].description);
        setLat(response.data.coord.lat);
        setLog(response.data.coord.lon);
      })

      .catch(()=>
      {
        Swal.fire({
          icon: 'error',
          title: 'Falha no endereço informado',
          text: 'Cidade inexistente',
        })
      })
    }

    const viewSearch = ()=>
    {
      if(typeof window !== 'undefined')
      {
        document.getElementById('myHeader')?.classList.remove('hidden');
      }
    }
    

  return(

    <>
    
    {
      Loading 
        ? 
        <main
        className="
        flex
        items-center
        justify-center
        h-screen
        ">

        <div
        className="
        Loading
        ">

        </div>

        </main>
        :
        viewSearch()
    }
    
    

    <header
    id="myHeader"
    style=
    {{
        backgroundImage: `url('https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}
    className="
    hidden
    flex
    items-center
    justify-center
    h-screen
    ">


    <main
    className="
    block
    mx-auto
    text-center
    ">

    <input
    id="Search_Input"
    type="text"
    value={Search}
    onChange={(e)=>setSearch(e.target.value)}
    placeholder="Digite sua cidade"
    className="
    sm:w-[16rem]
    md:w-[28rem]
    h-[2.4rem]
    mx-auto
    mb-4
    relative
    border-black
    outline-none
    border-4
    rounded-l-2xl
    text-center
    duration-1000
    ease-in-out
    transition-all
    "/>

    <div
    onClick={ClimaxAPI}
    className="
    inline
    mx-auto
    text-center
    cursor-pointer
    ">
      
      <BiSearchAlt
      className="
      sm:w-[1.9rem]
      md:w-[2rem]
      lg:w-[4rem]
      h-[2.4rem]
      mt-[-.2rem]
      inline
      mx-auto
      text-center
      border-black
      border-4
      border-l-0
      rounded-r-2xl
      duration-1000
      transition-all
      ease-in-out
      bg-cyan-400
      hover:text-white
      "/>

    </div>

    <article
    className="
    grid
    sm:grid-cols-2
    md:grid-cols-2
    sm:gap-2
    md:gap-4
    ">

    <CardsClimax
    ICON=
    {
      <TiWeatherPartlySunny
      className="
      sm:text-[30pt]
      block
      md:text-[40pt]
      relative
      text-orange-400
      text-center
      mx-auto
      mt-[.8rem]
      mb-4
      "
      />
    }
    Title="Temperatura"
    
    Info1=
    {
      <div
      className="mb-4">
        Temp: <span className="font-black md:ml-[1.2rem] sm:ml-[.2rem]">{TempAtual}ºC</span> 
      </div>
    }
    
    Info2=
    {
      <div
      className="mb-4">
        max: <span className="font-black md:ml-[2rem] sm:ml-[.2rem]">{TempMAX}ºC</span> 
      </div>
    }
    
    Info3=
    {
      <div
      className="mb-4">
        min: <span className="font-black md:ml-[2.2rem] sm:ml-[.2rem]">{TempMIN}ºC</span> 
      </div>
    }
    />

    <CardsClimax
    ICON=
    {
      <BiWind
      className="
      sm:text-[30pt]
      md:text-[40pt]
      block
      relative
      text-cyan-400
      text-center
      mx-auto
      mt-[.8rem]
      mb-4
      "
      />
    }
    Title="Vel. Vento"
    
    Info1=
    {
      <div
      className="mb-4">
        Velocidade: <span className="font-black md:ml-[1.2rem]">{Velocidade}km/h</span> 
      </div>
    }
    
    Info2=
    {
      <div
      className="mb-4">
        Umidade: <span className="font-black md:ml-[2rem]">{Umidade}%</span> 
      </div>
    }
    />

    <CardsClimax
    ICON=
    {
      <AiFillCloud
      className="
      sm:text-[30pt]
      md:text-[40pt]
      block
      relative
      text-center
      mx-auto
      mt-[.8rem]
      mb-4
      "
      />
    }
    Title="Clima"
    
    Info1=
    {
      <div
      className="mb-4">
        City:<span className="font-black md:ml-[1rem] sm:ml-[.2rem]">{Cidade}</span> 
      </div>
    }
    
    Info2=
    {
      <div
      className="mb-4">
        Clima:<span className="font-black md:ml-[1rem] sm:ml-[.2rem]">{Clima}</span> 
      </div>
    }
    />

    <CardsClimax
    ICON=
    {
      <FiMapPin
      className="
      sm:text-[30pt]
      md:text-[38pt]
      block
      relative
      text-center
      text-red-600
      mx-auto
      mt-[.8rem]
      mb-4
      "
      />
    }
    Title="Location"
    
    Info1=
    {
      <div
      className="mb-4">
        Lat:<span className="font-black md:ml-[1.2rem] sm:ml-[.2rem]">{Lat}</span> 
      </div>
    }
    
    Info2=
    {
      <div
      className="mb-4">
        Log:<span className="font-black md:ml-[2rem] sm:ml-[.2rem]">{Log}</span> 
      </div>
    }
    />

    </article>
    

    </main>
    </header>

    </>

  );
}
