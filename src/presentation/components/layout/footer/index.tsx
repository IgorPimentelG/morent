import React from 'react';

import styles from './styles.module.scss';
import { Links, Props as LinksProps } from './components';
import { Logo } from '@presentation/components/ui';

const Footer: React.FC = () => {

	const options: LinksProps[] = [
		{
			title: 'About',
			options: [
				{ label: 'How it workds', value: ''},
				{ label: 'Featured', value: ''},
				{ label: 'Partnership', value: ''},
				{ label: 'Bussiness Relation', value: ''}
			]
		}, {
			title: 'Community',
			options: [
				{ label: 'Events', value: ''},
				{ label: 'Blog', value: ''},
				{ label: 'Podcast', value: ''},
				{ label: 'Invite a friend', value: ''}
			]
		}, {
			title: 'Socials',
			options: [
				{ label: 'Discord', value: ''},
				{ label: 'Instagram', value: ''},
				{ label: 'Twitter', value: ''},
				{ label: 'Facebook', value: ''}
			]
		}
	];

	return (
		<footer className={styles.footerWrap}>
			<section className={styles.header}>
				<div>
					<Logo />
					<span>
						Our vision is to provide convenience<br/>
						and help increase yout sales business.
					</span>
				</div>
				<div className={styles.links}>
					{options.map((item, index) => (
						<Links key={index} {...item} />
					))}
				</div>
			</section>
			<hr />
			<section className={styles.footer}>
				<div>
					<span>© 2023 MORENT. All rights reserved</span>
				</div>
				<div>
					<a>Privacy & Policy</a>
					<a>Terms & Condition</a>
				</div>
			</section>
		</footer>
	);
}

export { Footer };
