import React from 'react';
import '@testing-library/jest-dom';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Input with Button', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
