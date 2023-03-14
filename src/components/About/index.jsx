import React from 'react'

const About = () => {
  return (
    <div name='about'
     className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid totam, fugit ducimus, modi quibusdam reiciendis cumque illum quas dolor impedit nemo voluptatibus voluptatum, alias omnis aliquam dolore commodi provident eaque quis accusamus earum magni molestiae culpa qui. Quis accusamus facilis nam rerum. Eum harum facere, doloribus incidunt quaerat modi ipsam!</p>
            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem tenetur beatae est, minus dignissimos debitis temporibus adipisci laboriosam recusandae ex odit amet, necessitatibus repellat ratione eum excepturi vero tempore veniam. Libero autem cupiditate tempore incidunt quos voluptate veniam dolor blanditiis tempora inventore, non iusto sequi minima praesentium? Dolores, blanditiis.
            </p>
        </div>
    </div>
  )
}

export default About