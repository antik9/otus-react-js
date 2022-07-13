import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('render list with passed items', () => {

  it('has all elements from the list', () => {
    const items = ['first', 'second', 'third'];
    render(<App items={items}/>);

    expect(screen.getByText(/first/i)).not.toBeUndefined();
    expect(screen.getByText(/second/i)).not.toBeUndefined();
    expect(screen.getByText(/third/i)).not.toBeUndefined();
  });

  it('no visible elements', () => {
    const items = ['first', 'second', 'third'];
    const { container } = render(<App items={items}/>);

    container.querySelectorAll('span').forEach((element: HTMLSpanElement) => {
      expect(element).toHaveStyle('opacity: 0');
    });
  });

});
