import Fake from '../Fake/Fake';
import FakeDommy from '../Fake/FakeDommy';
const Shop = (props) => {







  return (
    <div>
<FakeDommy addToCart={props.addToCart}/>
<Fake/>


      
    </div>
  );
}

export default Shop;
