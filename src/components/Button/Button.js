import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {

    const clickHandler = e =>{
        e.preventDefault()
        console.log('Name: ', props.name)
        console.log('Price: ',props.price)
        console.log('Size: ',props.size)
        console.log('Color: ',props.color)
    }


    return (<button onClick={clickHandler} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;