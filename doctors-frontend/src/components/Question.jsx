import { useState } from 'react'

const Question = ({question, content}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='questionContainer'>
            <div>
                <h3>{question}</h3>
                <span onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</span>
            </div>
            
            {isOpen && <p>{content}</p>}
        </div>
    )
}

export default Question
