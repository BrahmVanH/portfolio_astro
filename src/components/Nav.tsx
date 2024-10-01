import React from 'react';

export default function Nav() {
	return (
		<nav className='w-min sticky top-0 left-0 border border-white shadow-md shadow-blue-50 bg-[radial-gradient(circle,rgba(1,156,213,1)_53%,rgba(1,169,184,1)_92%,rgba(231,231,231,0.81)_100%)]'>
			<ul>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<li>
						<a href='/projects'>Projects</a>
					</li>
					<a href='/about'>About</a>
				</li>
			</ul>
		</nav>
	);
}
