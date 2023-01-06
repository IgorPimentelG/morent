import React from 'react';
import { FaHeart, FaBell, FaCog } from 'react-icons/fa';

import styles from './styles.module.scss';
import { Logo } from '@presentation/components/ui';
import { IconButton } from '@presentation/components/ui/icon-button';

const Header: React.FC = () => {
	return (
		<header className={styles.headerWrap}>
			<div>
				<Logo />
			</div>

			<div className={styles.actions}>
				<IconButton title="Favorites" Icon={FaHeart} action={() => {}}	/>
				<IconButton title="Notifications" Icon={FaBell} action={() => {}}	/>
				<IconButton title="Settings" Icon={FaCog} action={() => {}}	/>
			</div>
		</header>
	)
}

export { Header };
