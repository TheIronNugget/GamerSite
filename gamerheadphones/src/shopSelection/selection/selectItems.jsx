import './selectItems.scss';

const SelectItems = ({select}) => {
    const {imageUrl, title, subtitle} = select;
    return(
    <div className='select-container'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='select-body-container'>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <p>Shop Now</p>
        </div>
    </div>
);
};

export default SelectItems;