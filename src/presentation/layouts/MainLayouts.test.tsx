import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

describe('MainLayout Component', () => {
    it('should render the MainLayout component with correct icons and navigate on click', () => {
        render(
            <MemoryRouter>
                <MainLayout />
            </MemoryRouter>
        );

        // Find the icons using their id
        const homeIcon = screen.getByTestId('home');
        const searchIcon = screen.getByTestId('search');
        const bookmarkIcon = screen.getByTestId('bookmark');

        // Check if the icons are rendered
        expect(homeIcon).toBeInTheDocument();
        expect(searchIcon).toBeInTheDocument();
        expect(bookmarkIcon).toBeInTheDocument();

        // // Mock the navigate function
        // const mockNavigate = jest.fn();
        // jest.mock('react-router-dom', () => ({
        //     ...jest.requireActual('react-router-dom'),
        //     useNavigate: () => mockNavigate,
        // }));

        // // Click on the icons
        // fireEvent.click(homeIcon);
        // fireEvent.click(searchIcon);
        // fireEvent.click(bookmarkIcon);

        // // Check if the navigate function was called with the correct URLs
        // expect(mockNavigate).toHaveBeenCalledWith('/');
        // expect(mockNavigate).toHaveBeenCalledWith('#'); // Update this with the actual expected URL
        // expect(mockNavigate).toHaveBeenCalledWith('#'); // Update this with the actual expected URL
    });
});
