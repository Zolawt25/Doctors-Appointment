import { useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Feedback = () => {
    const [isTrue, setIsTrue] = useState(true)
    const [value, setValue] = useState(5)
    return (
        <div className='doctorPageFeedback'>
            <h4 className='doctorPageAboutTitle'>All Reviews(2)</h4>
            <div className='doctorPageReviewCont'>
                <div className='doctorPageReviewId'>
                    <div className='doctorPageReviewProfile'>
                        <div className='doctorPageReviewImg'>
                            <img src="/img/doctor-img03.png" alt="doctor-img03.png" />
                        </div>
                        <div>
                            <p className='doctorPageReviewName'>Ahmed Ali</p>
                            <p className='doctorPageReviewDate'>june 27, 2023</p>
                        </div>
                    </div>
                    <div className='doctorPageReviewStar'>
                    <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small"/>
                    </Stack>
                    </div>
                </div>
                <p className='doctorPageReviewComment'>He is a good doctor</p>
            </div>
            <div className='doctorPageReviewCont'>
                <div className='doctorPageReviewId'>
                    <div className='doctorPageReviewProfile'>
                        <div className='doctorPageReviewImg'>
                            <img src="/img/doctor-img03.png" alt="doctor-img03.png" />
                        </div>
                        <div>
                            <p className='doctorPageReviewName'>Ahmed Ali</p>
                            <p className='doctorPageReviewDate'>june 27, 2023</p>
                        </div>
                    </div>
                    <div className='doctorPageReviewStar'>
                    <Stack spacing={1}>
                    <Rating name="read-only" value={5} readOnly size="small"/>
                    </Stack>
                    </div>
                </div>
                <p className='doctorPageReviewComment'>He is a good doctor</p>
            </div>
            <div className='feedbackcontainer'>
                {
                    isTrue ? 
                    <div className='feedbackBtn'>
                        <button onClick={()=> setIsTrue(false)}>Give Feedback</button>
                    </div> :
                    <div className='feedbackInputcontainer'>
                        <div className='feedbackStars'>
                            <p>How would you rate the overall experience?*</p>
                            <div>
                                <Stack spacing={1}>
                                    <Rating name="simple-controlled" size="small" value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                                </Stack>
                            </div>
                        </div>
                        <div className='feedbackInput'>
                            <p>Share your feedback or suggestions.*</p>
                            <textarea rows="8" cols="70" placeholder='Write your message...'></textarea>
                            <button>Submit Feedback</button>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Feedback
