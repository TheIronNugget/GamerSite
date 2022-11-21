import './ShopSelection.scss';


import SelectDir from './selection/selectDir';


const ShopSelection = () => {

  const selection = [
    {
      id: 1,
      title: 'Everyday Wear Earbuds',
      subtitle:'Great inside or outside!',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0249/4254/2941/products/santana-luna-square.png?v=1654203887',
    },
    {
      id: 2,
      title: 'Best-Selling Gift',
      subtitle:'Make Your Gamer Happy!',
      imageUrl: 'https://www.eposaudio.com/contentassets/e020606483aa4d7385764f6c1efd81ba/h6pro-open_bundle_packaging.png?width=860',
    },];

  return (
    <div className="shopSelection">
            <SelectDir selection={selection} />
    </div>
  )
};

export default ShopSelection;