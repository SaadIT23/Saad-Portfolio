"use client"
import React,{useRef,useEffect} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const pathname=usePathname()
    const ref = useRef()
    const Links=[
        {
            name:'Home',
            path:'/',
        },
        {
            name:'Services',
            path:'/services',
        },
        {
            name:'Resume',
            path:'/resume',
        },
        {
            name:'Work',
            path:'/work',
        },
        {
            name:'Contact',
            path:'/contact',
        },
    ]

    const handleClick=()=>{
      if(ref.current.style.display !== "none"){
        ref.current.style.display="none"
      }
      else{
        ref.current.style.display="flex"
      }
    }

    useEffect(() => {
      ref.current.style.display="none"     
    })
    

  return (
    <>
      <div ref={ref} className="transition-all duration-500 md:hidden mob min-h-screen sticky top-0 left-0 w-[80vw] border bg-primary hidden z-10 flex-col justify-center">
      <button onClick={handleClick} className='self-start absolute top-3 left-2 text-3xl font-bold'><RxCross2 /></button>
        <div className='h-[100%]'>
      <ul className='flex flex-col gap-5 justify-center items-center'>
        {Links.map((link,index)=>{
          return <Link className={`text-base ${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} href={link.path} key={index}>{link.name}</Link>
        })}
      </ul>
        </div>
      </div>
    <nav className='flex flex-row justify-between md:justify-around mx-4 md:mx-0 items-center py-[25px]  md:gap-0 gap-3'>
      <div className="logo">
        <Link href={'/'}><h1 className='text-4xl font-semibold'>Saad<span className='text-accent'>.</span></h1> </Link>
      </div>
      <div className='md:hidden block'>
        <button className='text-lg' onClick={handleClick}><GiHamburgerMenu /></button>
      </div>
      <ul className='md:flex gap-12 hidden'>
        {Links.map((link,index)=>{
          return <Link className={`text-base ${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} href={link.path} key={index}>{link.name}</Link>
        })}
      </ul>
    </nav>
        </>
  )
}

export default Navbar
