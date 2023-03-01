import {screen} from '@testing-library/react';
import {renderWithMasterAndRouter} from 'test/ReactTestingLibraryUtils';
import Contact from 'views/Contact';
import {describe, test, expect} from 'vitest';

describe('Contact', () => {
  beforeEach(() => {
    renderWithMasterAndRouter(<Contact />);
  });

  test('Should render correctly', () => {
    expect(screen.getByText('Contact view')).toBeDefined();
  });
});
