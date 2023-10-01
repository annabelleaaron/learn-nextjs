'use client'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import Image from 'next/image'
import aalogo from '../../public/annabelle_logo.png'
// dark mode
import { useState } from 'react' // will only be able to use it when there is 'use client'  

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className='bg-white px-10 text-gray-800 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className=' min-h-screen'>
        <nav className='py-5 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>annabelleaaron</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /></li>
            <li><a className='bg-gradient-to-r from-yellow-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
          </ul>
        </nav>
        <div className='text-slate-900 text-center p-10 dark:text-white'>
          <h2 className='text-5xl py-2 text-purple-600 font-medium md:text-6xl'>Annabelle Aaron</h2>
          <h3 className='text-2xl py-2'>Developer and designer.</h3>
          {/* max-w-xl assigns the max width for -xl related classes, mx-auto automatically adjusts the item to scale in the center */}
          <p className='text-md py-5 leading-8 md:text-xl max-w-xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur distinctio et labore at, accusantium illum ipsam, exercitationem numquam ad laborum perspiciatis explicabo. Quibusdam inventore fugit, tempore magni ut similique.</p>
        </div>
        <div className='text-gray-600 text-5xl flex justify-center gap-16 py-3'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className='relative mx-auto bg-gradient-to-t from-gray-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={aalogo} layout='fill' objectFit='cover' />
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1 '>Services I offer</h3>
          <p className='text-md py-5 leading-8 '>Lorem ipsum dolor sit amet, <span className='text-purple-500'>consectetur</span> adipisicing elit. Iste <span className='text-purple-500'>consectetur</span> distinctio et labore at, accusantium illum ipsam, exercitationem numquam ad laborum perspiciatis explicabo. Quibusdam inventore fugit, tempore magni ut similique.</p>
          <p className='text-md py-5 leading-8 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur distinctio et labore at, accusantium illum ipsam, exercitationem numquam ad laborum perspiciatis explicabo. Quibusdam inventore fugit, tempore magni ut similique.</p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='shadow-lg p-10 rounded-xl my-10 flex flex-col items-center text-center'>
            <Image src={aalogo} width={200} height={200}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur distinctio et labore at,</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='py-1'>Photoshop</p>
            <p className='py-1'>Illustrator</p>
            <p className='py-1'>Figma</p>
          </div>
          <div className='shadow-lg p-10 rounded-xl my-10 flex flex-col items-center text-center'>
            <Image src={aalogo} width={200} height={200}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur distinctio et labore at,</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='py-1'>Photoshop</p>
            <p className='py-1'>Illustrator</p>
            <p className='py-1'>Figma</p>
          </div>
          <div className='shadow-lg p-10 rounded-xl my-10 flex flex-col items-center text-center'>
            <Image src={aalogo} width={200} height={200}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Code</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur distinctio et labore at,</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='py-1'>Photoshop</p>
            <p className='py-1'>Illustrator</p>
            <p className='py-1'>Figma</p>
          </div>
        </div>
      </section>

      <section>
        <div>
        <h3 className='text-3xl py-1 '>Portfolio</h3>
          <p className='text-md py-5 leading-8 '>Lorem ipsum dolor sit amet, <span className='text-purple-500'>consectetur</span> adipisicing elit. Iste <span className='text-purple-500'>consectetur</span> distinctio et labore at, accusantium illum ipsam, exercitationem numquam ad laborum perspiciatis explicabo. Quibusdam inventore fugit, tempore magni ut similique.</p>
          <p className='text-md py-5 leading-8 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste consectetur distinctio et labore at, accusantium illum ipsam, exercitationem numquam ad laborum perspiciatis explicabo. Quibusdam inventore fugit, tempore magni ut similique.</p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          {/* basis-1/2 is basically give this element 50% width, flex-1 is to fill all available space */}
          <div className='basis-1/3 flex-1'>
          {/* object-cover allow the object to fill in the whole div, */}
            <Image src={aalogo} className='rounded-lg onject-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={aalogo} className='rounded-lg onject-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={aalogo} className='rounded-lg onject-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={aalogo} className='rounded-lg onject-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={aalogo} className='rounded-lg onject-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={aalogo} className='rounded-lg onject-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}
