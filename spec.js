
jest.mock('./index');

const m = require('./index');

describe('custom resolved mock', () => {
  it('loads the manual mock module', () => {
    expect(m).toBe('mocked');
  });
});
