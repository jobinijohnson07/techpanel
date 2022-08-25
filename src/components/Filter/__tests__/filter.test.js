import { render, screen } from '@testing-library/react'
import Filter from '../filter'

test('should render filter component', () => {
    render(<Filter />)
    const filterElement = screen.getByTestId('filter');
    expect(filterElement).toBeInTheDocument();
}) 