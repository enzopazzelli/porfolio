import React from 'react'
import Bibliotek from '../../assets/bibliotek.jpg'
import inProcess from '../../assets/process.jpg'
import citasApp from '../../assets/citasapp.jpg'
import Raise from '../../assets/raise.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: Bibliotek,
      codeLink: "https://github.com/enzopazzelli/Bibliotek",
      demoLink: "https://bibliotek-m1.netlify.app"
    },
    {
      id: 2,
      src: citasApp,
      codeLink: "https://github.com/enzopazzelli/citas_app",
      demoLink: "https://ejp-citasapp.netlify.app"
    },
    {
      id: 3,
      src: Raise,
      codeLink: "https://github.com/enzopazzelli/raise-website",
      demoLink: "https://raise-web.netlify.app/"
    }
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Echá un vistazo a mis trabajos</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
         
        {
  portfolios.map(({ id, src, codeLink, demoLink }) => {
    return (
      <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
        <img
          src={src}
          alt=""
          className='h-[200px] w-full object-cover rounded-md duration-200 hover:scale-105'
        />
        <div className='flex items-center justify-center'>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
          </a>
        </div>
      </div>
    );
  })
}

        </div>
      </div>
    </div>
  )
}

export default Portfolio