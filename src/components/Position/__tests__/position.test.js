import { render, screen } from '@testing-library/react'
import Position from '../position'

test('should render position component', () => {
    render(<Position />)
    const positionElement = screen.getByTestId('position');
    expect(positionElement).toBeInTheDocument();
}) 