import React from 'react'
import { Link } from 'react-router-dom'

const Contact2 = () => {
  return (
    <div className="w-full md:py-12" id="contact2">
        <div className="w-[85%] max-w-[1300px] flex flex-col md:flex-row justify-between mx-auto min-h-[80vh]">
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
                            Nurse
                        </option>
                    </select>
                    <label htmlFor="name" className='text-[14px] mt-3'>
                        Message <span className='text-black/40'>(Optional)</span>
                    </label>
                    <textarea name="" id="" cols="3" rows="7"  className='bg-[#F7F7F7] resize-none'></textarea>
                    <div className="flex justify-end mt-4">
                        <button type='submit' className='py-4 px-6 w-fit bg-[#489E55] rounded-md font-[700] text-[16px] text-white'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-[100%] md:w-[45%] flex flex-col juse py-7 md:mt-0 mt-8">
                <h1 className='text-[64px] font-[700] leading-[75.14px] text-end'>Join Our Team</h1>
                <p className='ml-4 text-[20px] leading-[23.48px] font-[400] mt-6 text-end'>
                Want to be a caregiver? Apply with Green Health Care Service Ltd. We may have a position for you. 
                </p>
             
                <h2 className='mt-12 text-[32px] font-[700] leading-[37.57px] text-end'>
                    Email
                </h2>
                <p className='text-[16px] leading-[25px] font-[400] mt-5 text-end' >
                    contact@greenhealthcare.services
                </p>
                <h2 className='mt-12 text-[32px] font-[700] leading-[38px] text-end'>
                    Socials
                </h2>
                <Link target='_blank' to='#' className='text-[16px] leading-[18.78px] font-[400] mt-5 underline text-end'>
                    Facebook
                </Link>
                <Link target='_blank' to='#' className='text-[16px] leading-[18.78px] font-[400] mt-5 underline text-end'>
                    Instagram
                </Link>
                <Link target='_blank' to='#' className='text-[16px] leading-[18.78px] font-[400] mt-5 underline text-end'>
                    Linkedin
                </Link>
            </div>
           
        </div>
    </div>
  )
}

export default Contact2