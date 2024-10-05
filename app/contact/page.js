"use client"
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const info = [
  {
    icon: <FaPhoneAlt />,
    name: "Phone",
    des: "(+92) 3354747057",
  },
  {
    icon: <FaEnvelope />,
    name: "Email",
    des: "saadimran936@gamil.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    name: "Address",
    des: "House no 4 Shah Jahan Street Islamia Park, Lahore",
  },
]

const contact = () => {
  useGSAP(()=>{
    gsap.from(".container >div",{
      y:-20,
      opacity:0,
      delay:0.5,
      duration:0.5,
      stagger:0.3
    })
  })
  
  return (
    <div className='container items-center  mx-auto flex flex-col lg:flex-row gap-[30px] w-[100vw] md:w-[95vw] xl:w-[85vw] min-h-[85vh]  2xl:max-h-[85vh] my-2'>
      <div className="form w-[90%] lg:w-[60%] max-h-full order-2 lg:order-none">
        <form action="" className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl min-h-full 2xl:max-h-full'>
          <h3 className='text-4xl text-accent'>Let&apos;s Work together</h3>
          <p className='text-white/60'>Get in touch to discuss your project.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <input className='flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' type="text" placeholder='Firstname' />
            <input className='flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' type="text" placeholder='Lastname' />
            <input className='flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' type="email" placeholder='Email' />
            <input className='flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none' type="phone" placeholder='Phone' />
          </div>

          <select
            name="service"
            id=""
            defaultValue="ss"
            className="flex h-[58px] w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10 focus:border-accent outline-none"
          >
            <option value="ss" className="bg-primary text-accent py-1.5 text-sm rounded-sm">
              Select a Service
            </option>
            <option value="web" className="bg-primary text-accent py-1.5 text-sm rounded-sm">
              Web Development
            </option>
            <option value="ui" className="bg-primary text-accent py-1.5 text-sm rounded-sm">
              UX/UI Design
            </option>
            <option value="database" className="bg-primary text-accent py-1.5 text-sm rounded-sm">
              Database Development
            </option>
          </select>
          <textarea name="message" id="" cols="30" rows="6" placeholder='Type your message here...' className='h-[200px] flex min-h-[80px] rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50'></textarea>
          <button className='bg-accent min-w-[200px] lg:max-w-40 py-2 px-3 rounded-full text-primary font-bold hover:bg-accent-hover mx-auto lg:mx-0'>Send Message</button>
        </form>
      </div>

      <div className="info my-4 lg:my-0 w-[90%] lg:w-[40%] min-h-full flex justify-center items-center order-1 lg:order-none">
        <ul className='flex flex-col gap-10 justify-center'>
          {info.map((item,index)=>{
            return(
              <li key={index} className='flex items-center gap-6 '>
                <div className='w-[40px] h-[40px] md:w-[52px] md:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                  <div className='text-[28px]'>{item.icon}</div>
                </div>
                <div className='flex-1'>
                  <p className='text-white/60'>{item.name}</p>
                  <h3 className='text-white/80 md:text-xl text-[15px]'>{item.des}</h3>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default contact
