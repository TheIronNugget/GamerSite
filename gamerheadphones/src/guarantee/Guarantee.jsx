import './Guarantee.scss';



const Guarantee = () => {

    const breaks=false;
    const sentence= breaks ? <div>Our 30-day Happiness Guarantee means <br/> 
    you'll love your headset or we'll take it right back.</div> : <div>Our 30-day Happiness Guarantee means <br/> 
    you'll love your headset or we'll take it right back.</div>; 

  return (
    <div className='guarantee'>
        <div className="headliner">
            <h3>We guarantee Greatness</h3>
            <p>{sentence}</p>
        </div>
        <div className="gBlocks">
            <div className="gWrapper">
                <div className="block">
                    <h4 className='top'>1 Year</h4>
                    <h4 className='bottom'>Warranty</h4>
                </div>
                <div className="block">
                    <h4 className='top'>Try Risk Free</h4>
                    <h4 className='bottom'>For 30 Days</h4>
                </div>
                <div className="block">
                    <h4 className='top'>Free Shipping</h4>
                    <h4 className='bottom'>And Returns</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Guarantee;