import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentColor, setCurrentColor] = useState(props.colors[0])

  

  const getPrice = useMemo(() => {
    const size = props.sizes.find(size => size.name === currentSize)
    return (props.basePrice + size.additionalPrice)
  }, [currentSize, props]);


  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <form>
          <ProductOptions 
          setColor={setCurrentColor} 
          setSize={setCurrentSize} 
          cColor={currentColor} 
          cSize={currentSize}
          colors={props.colors}
          sizes={props.sizes}/>
      
          <Button className={styles.button} name={props.title} size={currentSize} color={currentColor} price={getPrice}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = { 
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;