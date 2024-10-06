import '@testing-library/jest-dom';
// Extend jest matchers for DOM assertions
import { render, screen } from '@testing-library/react';
import React from 'react';
import QuizState from '../../context/QuizState';
import Home from './Home';


test('renders start quiz message', () => {
    render(
        <QuizState>
            <Home />
        </QuizState>
    );
    const linkElement = screen.getByText(/Start your Quiz Now/i);
    expect(linkElement).toBeInTheDocument();
});