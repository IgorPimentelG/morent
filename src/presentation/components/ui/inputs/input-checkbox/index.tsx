import { useRef } from 'react';
import styles from './styles.module.scss';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
}

const InputCheckbox: React.FC<Props> = ({ label, ...props }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	function labelHasClicked () {
		const isChecked = inputRef.current?.checked;
		if (!isChecked) {
			inputRef.current?.setAttribute('checked', 'true');
		} else {
			inputRef.current?.removeAttribute('checked');
		}
	}

	return (
		<div className={styles.checkboxWrap}>
			<input type="checkbox" {...props} ref={inputRef} />
			<label onClick={labelHasClicked}>{label}</label>
		</div>
	);
};


export { InputCheckbox };
