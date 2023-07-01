"use client"
import Image from "next/image"
import {useState} from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import web1 from "/public/web1.png"
import web2 from "/public/web2.png"
import web3 from "/public/web3.png"
import web4 from "/public/web4.png"
import web5 from "/public/web5.png"
import web6 from "/public/web6.png"

export default function page() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
     <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-cyan-400">developedbynb</h1>
        <ul className="flex items-center">
          <li><BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className="cursor-pointer text-2xl dark:text-white"/></li>
          <li><a className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white font-burtons px-4 py-2 ml-8 rounded-md tracking-widest " href="#">Resume</a></li>
        </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text font-medium font-burtons py-2 md:text-6xl">Nabeel Zafar</h2>
          <h3 className="text-2xl py-2 font-burtons text-black dark:text-white  md:text-3xl">Developer And Designer.</h3>
          <p className="pt-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-xl mx-auto">Freelancer providing services for programming design content needs. join me down below and let's get cracking!</p>
        </div>
        <div className="text-5xl flex justify-center gap-x-16 text-gray-600">
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
          <Image src={"/deved.png"} alt="pic1" layout="fill" objectFit="cover" />
        </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl mt-10 font-burtons dark:dark:text-cyan-400">Services I offer</h3>
            <p className="py-2  leading-8 text-gray-800 dark:text-gray-200">Since the beginning of my journey as a freelance 
            designer and developer, I've done remote work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and 
            collaborated with talented people to create digital products for both business and consumer use.</p>
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200"> I offer from a wide range of services, including
            brand design, programming and teaching.</p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex flex-col text-center justify-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image src={"/design.png"} alt="pic2" width={150} height={150}/>
              <h3 className="text-lg font-bold font-burtons pt-8 pb-2 text-cyan-400">Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-200">Creating elegant designs suited for your needs following core design theory</p>
              <h4 className="py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text font-bold font-burtons">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
              </div>

              <div className="flex flex-col text-center justify-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image src={"/consulting.png"} alt="pic2" width={150} height={150}/>
              <h3 className="text-lg font-bold font-burtons pt-8 pb-2 text-cyan-400">Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-200">Creating elegant designs suited for your needs following core design theory</p>
              <h4 className="py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text font-bold font-burtons">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
            </div>

            <div className="flex flex-col text-center justify-center items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image src={"/code.png"} alt="pic2" width={150} height={150}/>
              <h3 className="text-lg font-bold font-burtons pt-8 pb-2 text-cyan-400">Beautiful Designs</h3>
              <p className="py-2 dark:text-gray-200">Creating elegant designs suited for your needs following core design theory</p>
              <h4 className="py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-transparent bg-clip-text font-bold font-burtons">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
            </div>
          </div>
          </section>

          <section>
            <div>
              <h3 className="text-3xl py-1 font-burtons dark:dark:text-teal-400">Portofolio</h3>
              <p className="py-2  leading-8 text-gray-800 dark:text-gray-200">Since the beginning of my journey as a freelance 
            designer and developer, I've done remote work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and 
            collaborated with talented people to create digital products for both business and consumer use.</p>
            <p className="py-2 leading-8 text-gray-800 dark:text-gray-200"> I offer from a wide range of services, including
            brand design, programming and teaching.</p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className=" basis-1/3 flex-1">
                <Image src={web1} alt="web1" className="rounded-lg object-cover" layout="responsive" />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image src={web2} alt="web2" className="rounded-lg object-cover" layout="responsive" />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image src={web3} alt="web3" className="rounded-lg object-cover" layout="responsive" />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image src={web4} alt="web4" className="rounded-lg object-cover" layout="responsive" />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image src={web5} alt="web5" className="rounded-lg object-cover" layout="responsive" />
              </div>
              <div className=" basis-1/3 flex-1">
                <Image src={web6} alt="web6" className="rounded-lg object-cover" layout="responsive" />
              </div>
            </div>
          </section>
     </main>
     </div>
    </>
  ) 
}
 