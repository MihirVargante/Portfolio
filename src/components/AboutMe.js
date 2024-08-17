import React from 'react'
import HomePic from '../assets/home-main.svg'
import { TypeAnimation } from 'react-type-animation';
const AboutMe = () => {
  return (
    <div className='z-100 text-white flex justify-center items-center h-screen'>
      <div  className='flex flex-row items-center space-x-10'>
        <div>
          <div className="mb-10 text-xl">
            <span>Hey There! 👋</span><br/>
            <span>I'm Mihir Vargante</span>
          </div>
          <div className='w-[30rem] mt-4'>
        <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am a Full Stack Developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I am a Backend Developer',
              1000,
              'I am a FrontEnd Developer',
              1000,
              'I am a Software Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
          </div>
        </div>
        <div>
          <img 
          src={HomePic} 
          alt="icon" 
          width={500}
          height={500}/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe