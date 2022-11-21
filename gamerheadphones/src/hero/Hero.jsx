import './Hero.scss';
import bg from'../assets/headphones.png';
import Button from '../button/Button';

const Hero = () => {
  return (
    <div className="heroWrap">
        <div className="heroCon">
            <div className="text">
                <h2>The Ethereal Works</h2>
                <h3>50% off first purchase</h3>
                <Button >Shop Now</Button>
            </div>
            <div className="imageWrap">
                <img src={bg} alt='overEars' width='400px' />
            </div>
        </div>
    </div>
  )
}

export default Hero;