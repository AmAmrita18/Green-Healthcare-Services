import React from 'react'
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { Link } from 'react-router-dom'

const Caregivers = () => {
    const bgImage='/caregiver.png'
  return (
    <div className="w-full">
        <div className="w-[85%] max-w-[1300px] mx-auto flex md:flex-row-reverse flex-col md:gap-y-0 gap-y-8 gap-x-14 items-center min-h-[80vh] py-20">
            <div className="w-[100%] md:w-[50%] relative flex justify-start mt-16">
                <div className="w-[360px] md:w-[558px] h-[480px] md:h-[600px] absolute top-[-50px] left-[50px]" style={{ backgroundImage: `url('${bgImage}')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}></div>
                <div className="w-[360px] md:w-[558px] h-[480px] md:h-[600px] border-2 border-[#489E55] top-[50px]"></div>
            </div>
            <div className="w-[100%] md:w-[42%] flex flex-col justify-center gap-y-4">
                <h2 className='text-[48px] leading-[58px] font-[700]'>Our Dedicated Caregivers</h2>
                <p className='text-[#707070] font-[400] text-[18px] leading-7'>
                    The Green Healthcare Service Ltd. team is a select group of healthcare professionals, each dedicated to providing exceptional and empathetic service. Our staff—comprised of skilled nurses, attentive support workers, and specialized care experts—shares a commitment to our clients' well-being. Rigorous training and a shared ethos of dignity and kindness ensure that our care is a harmonious blend of expertise and compassion, making a tangible difference in the lives we touch.                </p>
                <div className="mt-8">
                <Link to='#' className='py-4 px-6 bg-[#FDF04F] rounded-md font-[700] text-[16px] text-[#262E27]'>
                      Learn More
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Caregivers