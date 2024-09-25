
import './Titel.css'
export default function Title(props) {
  console.log(props)
  return (
    <div className='title'>
      <h1 className='h1-title'>
        {props.h1}
      </h1>

      <h2 className='h2-title'>
        {props.h2}
      </h2>
      {/* <div className='img'>
        <img className='photo1' src='./image/photo1.png' alt='photo' />
      </div> */}
    </div>



  )


}