import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="w-full md:py-12">
        <div className="w-[85%] max-w-[1300px] flex flex-col md:flex-row justify-between mx-auto min-h-[80vh]">
            <div className="w-[100%] md:w-[45%] flex flex-col py-7">
                <h1 className='text-[64px] font-[700] leading-[75.14px]'>Let&apos;s Talk</h1>
                <p className='text-[20px] leading-[23.48px] font-[400] mt-6'>
                Contact us with any questions about our home care services, to provide feedback, or for any other inquiries - our team at Green Health Care Service Ltd is here to assist you.
                </p>
             
                <h2 className='mt-12 text-[32px] font-[700] leading-[37.57px]'>
                    Email
                </h2>
                <p className='text-[16px] leading-[25px] font-[400] mt-5'>
                    contact@greenhealthcare.services
                </p>
                <h2 className='mt-12 text-[32px] font-[700] leading-[38px]'>
                    Socials
                </h2>
                <Link target='_blank' to='#' className='text-[16px] leading-[18.78px] font-[400] mt-5 underline'>
                    Facebook
                </Link>
                <Link target='_blank' to='#' className='text-[16px] leading-[18.78px] font-[400] mt-5 underline'>
                    Instagram
                </Link>
                <Link target='_blank' to='#' className='text-[16px] leading-[18.78px] font-[400] mt-5 underline'>
                    Linkedin
                </Link>
            </div>
            <div className="w-[100%] md:w-[47%]">
                <form className='flex flex-col gap-y-2'>
                    <label htmlFor="name" className='text-[14px]'>
                        Name
                    </label>
                    <input type="text" className='bg-[#F7F7F7] py-3 px-3' />

                    <label htmlFor="name" className='text-[14px] mt-3'>
                        Email
                    </label>
                    <input type="text" className='bg-[#F7F7F7] py-3 px-3' />

                    <label htmlFor="name" className='text-[14px] mt-3'>
                        Phone Number
                    </label>
                    <input type="text" className='bg-[#F7F7F7] py-3 px-3' />

                    <label htmlFor="name" className='text-[14px] mt-3'>
                        Subject
                    </label>
                    <select type="text" className='bg-[#F7F7F7] py-3 px-3 pr-8'>
                        <option value="">
                            Service
                        </option>
                    </select>
                    <label htmlFor="name" className='text-[14px] mt-3'>
                        Message <span className='text-black/40'>(Optional)</span>
                    </label>
                    <textarea name="" id="" cols="3" rows="7"  className='bg-[#F7F7F7] resize-none'></textarea>
                    <div className="flex justify-end mt-4">
                        <button type='submit' className='py-4 px-6 w-fit bg-[#FDF04F] rounded-md font-[700] text-[16px] text-[#262E27]'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact