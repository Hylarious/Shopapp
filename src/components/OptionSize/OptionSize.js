import styles from './OptionSize.module.scss'

const OptionSize = (props) => {
	return(
		<div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(item => <li key={item.name} ><button type="button" onClick={() => props.setSize(item.name)} className={item.name === props.cSize ? styles.active : ''}>{item.name}</button></li>)}
      </ul>
    </div>
	)
}

export default OptionSize