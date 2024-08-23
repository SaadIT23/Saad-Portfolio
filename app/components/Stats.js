'use client'
import React from 'react'
import CountUp from 'react-countup'
const stat=[
    {
        num:2,
        text:"Years of Experience"
    },
    {
        num:10,
        text:"Projects Completed"
    },
    {
        num:8,
        text:"Technologies Learned"
    },
    
]
const Stats = () => {
  return (
    <div className='container mx-auto lg:my-0 sm:my-[20px]'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none  lg:justify-around sm:justify-center items-center '>
            {stat.map((item,index)=>{
                return <div className='flex gap-4 items-center justify-center' key={index}>
                    <CountUp end={item.num} duration={5} delay={0} className='text-4xl xl:text-6xl font-extrabold'/>
                    <p className={`leading-snug text-accent/80 w-[50%] text-center`} >{item.text}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Stats
