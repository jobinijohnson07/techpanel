import { render, screen } from '@testing-library/react'
import Interviewers from '../interviewers'

test('should render interviewers component', () => {
    render(<Interviewers />)
    const interviewersElement = screen.getByTestId('interviewers');
    expect(interviewersElement).toBeInTheDocument();
}) 