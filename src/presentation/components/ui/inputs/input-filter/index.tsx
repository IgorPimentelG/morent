import React from 'react';
import { BsSearch, BsSliders } from 'react-icons/bs';

import styles from './styles.module.scss';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	action: () => void;
	filter: () => void;
}

const InputFilter: React.FC<Props> = ({ action, filter, ...props }) => {
  return (
		<div className={styles.inputWrap}>
			<BsSearch />
			<input {...props} />
			<button onClick={filter}>
				<BsSliders />
			</button>
		</div>
	);
}

export { InputFilter };
