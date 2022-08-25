import { render, screen } from '@testing-library/react'
import Navbar from '../navbar'

test('should render navbar component', () => {
    render(<Navbar />)
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
}) 