
const DoctorPageRight = () => {
  return (
    <div className="doctorPageRight">
      <div className="doctorRightContianer">
        <div className="doctorRightPrice">
            <p>Ticket Price</p>
            <span>700 BDT</span>
        </div>
        <h5>Available Time Slotes:</h5>
        <div className="doctorRightTimeContainer">
            <div className="doctorRightTime">
                <p>Sunday:</p>
                <p>4:30pm - 9:30pm</p>
            </div>
            <div className="doctorRightTime">
                <p>Tuesday:</p>
                <p>4:30pm - 9:30pm</p>
            </div>
            <div className="doctorRightTime">
                <p>Thursday:</p>
                <p>5:00pm - 8:30pm</p>
            </div>
        </div>
        <a href="/">Book Appointment</a>
      </div>
    </div>
  )
}

export default DoctorPageRight
