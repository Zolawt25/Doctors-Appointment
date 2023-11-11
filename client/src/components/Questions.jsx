import { useState } from 'react'
import { faqs } from '../assets/data/faqs'
import Question from './Question'

const Questions = () => {
    const [questions, setquestions] = useState(faqs)
    return (
        <div className='questionsContainer'>
        <div className='questionsLeft'>
            <div className='questionsImg'>
                <img src="/img/faq-img.png" alt="faq-img.png" />
            </div>
        </div>
        <div className='questionsRight'>
            <h2>Most questions by our beloved patients</h2>
            <div className='questionsQuestion'>
                {
                    questions.map((item, index)=>{
                        return <Question key={index} {...item}/>
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default Questions
