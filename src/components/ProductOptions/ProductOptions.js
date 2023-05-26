import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';


const ProductOptions = (props) => {
	return(
	<div>
		<OptionSize setSize={props.setSize} cSize={props.cSize} sizes={props.sizes}/>
		<OptionColor setColor={props.setColor} cColor={props.cColor}  colors={props.colors}/>
	</div>
	)
};

export default ProductOptions