import './Features.scss';
import bs from '../assets/boomSpeakers.png';
import gs from '../assets/computerSetup.png';


const Features = () => {
  return (
    <div className='features'>
        <div className="featureWrapper">

          <div className="layer">


            <div className="bassText">
              <h1 className='titlet mod'>Loud and Proud</h1>
              <p className='titlet mod2'>Deep bass with loud and clear sound to bring an extra layer of depth!</p>
            </div>
            <div className="imageWrapper">
              <img src={bs} alt='speakers' />
            </div>

            <div className="imageWrapper2">
              <img src={gs} alt='setup' />
            </div>

            <div className="gamingText">
              <h1 className='titlet mod3'>Gamer Sense</h1>
              <p className='subti mod4'>
                Made with gaming in mind all the way down to everyday use.
              </p>
            </div>
            
           


          </div>
        </div>
    </div>
  )
}

export default Features;