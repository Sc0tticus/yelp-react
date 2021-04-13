import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { MemoryRouter } from 'react-router-dom';

// it('renders without crashing', () => {
// 	const div = document.createElement('div');
// 	ReactDOM.render(
// 		<MemoryRouter>
// 			<App />
// 		</MemoryRouter>,
// 		div
// 	);
// 	ReactDOM.unmountComponentAtNode(div);
// });
