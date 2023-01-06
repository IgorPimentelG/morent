import React from 'react';
import { FaHeart, FaBell, FaCog } from 'react-icons/fa';

import styles from './styles.module.scss';
import { Logo, IconButton, IconProfile, InputFilter } from '@presentation/components/ui';

const Header: React.FC = () => {
	return (
		<header className={styles.headerWrap}>
			<div className={styles.filter}>
				<Logo />
				<InputFilter
					placeholder="Search something here"
					action={() => {}}
					filter={() => {}}
				/>
			</div>
			<div className={styles.actions}>
				<IconButton title="Favorites" Icon={FaHeart} action={() => {}} />
				<IconButton title="Notifications" Icon={FaBell} action={() => {}}	/>
				<IconButton title="Settings" Icon={FaCog} action={() => {}}	/>
				<IconProfile />
			</div>
		</header>
	);
};

export { Header };
