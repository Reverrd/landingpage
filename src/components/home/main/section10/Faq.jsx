import { useState } from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import './faq.scss'

const items = [
    {id:1,
    question:"What Problem is this solving",
    answer: "Big question: if you needed to hear the tenor/alto/soprano/drum/piano part of a very popular worship song right now on the original key, where or who do you go to?"},
    {id:2,
    question:'How does it work',
    answer: "lorem ipsum"},
    {id:3,
    question:'How does it work',
    answer:"lorem ipsum"},
    {id:4,
    question:'How does it work',
    answer:'lorem ipsum'}
]
export default function Faq() {
  const [isTouched, setIsTouched]= useState(Array(items.length).fill(false))

  const handleToggle = (index)=>{
    const newIsTouched = [...isTouched];
    newIsTouched[index] = !newIsTouched[index];
    setIsTouched(newIsTouched);
  }
  return (
    <div className='faq'>
        <div className="faqWrapper">
            <h1>FAQ</h1>
            
            {
                items.map((data, index)=>(
                  <div key={items.id} className='faqList'>
                    <div className='faqQuestion'>
                        <h3>{data.question}</h3>
                      
                        <span onClick={()=>{
                         handleToggle(index)
                        }}>{isTouched[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</span>
                   </div>
                   {
                    isTouched[index] && (
                   <p>{data.answer}</p> 
                   ) }
                  </div>
                ))
            }
            </div>
      
    </div>
  )
}
