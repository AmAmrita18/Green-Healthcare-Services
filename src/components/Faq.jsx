import React, { useState } from 'react'
import { faqs } from '../constants/faqs'
import { FaAngleRight, FaAngleDown  } from "react-icons/fa6";

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState(-1);

    const selectFaq = (index) => {
        if(index === activeFaq) {
            setActiveFaq(activeFaq);
        }
        else {
            setActiveFaq(-1);
        }
    }

  return (
    <div className="w-full py-20">
        <div className="w-[85%] mx-auto flex flex-col gap-y-4" id='faq'>
            {
                faqs.map(({id, question, answer}, index) => (
                    <div key={id} className="w-full border-b border-b-[#FFB238] pt-2 pb-6">
                        <div className="w-full cursor-pointer flex justify-between items-center pr-2 duration-500">
                            <h4 className={`font-[600] text-[25px] leading-9 tracking-wide ${activeFaq === index && 'text-[#489E55]'}`}>{question}</h4>
                            {
                                activeFaq === index ? (
                                    <span onClick={() => setActiveFaq(-1)}>
                                        <FaAngleDown className='w-4 h-4 text-[#262E27]'/>
                                    </span>
                                ) : (
                                    <span onClick={() => setActiveFaq(index)}>
                                        <FaAngleRight className='w-4 h-4 text-[#262E27]'/>
                                    </span>
                                )
                            }
                        </div>
                        {
                            activeFaq === index && (
                                <p className='text-[22px] font-[500] mt-2 leading-[33px] tracking-wide'>
                                    {answer}
                                </p>
                            ) 
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Faq