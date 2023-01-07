import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import styles from './styles.module.scss';

type Props = {
	label: string;
	placeholder: string;
}

const InputSelect: React.FC<Props> = ({ label, placeholder }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={styles.inputWrap} onClick={() => setIsOpen(!isOpen)}>
			<div className={styles.select}>
				<label>{label}</label>
				<div>
					<span>{placeholder}</span>
					<IoIosArrowDown />
				</div>
			</div>

			<div className={[styles.dropdown, isOpen ? styles.open : styles.close].join(' ')}>
				<option></option>
			</div>
		</div>
	);
};

export { InputSelect };
