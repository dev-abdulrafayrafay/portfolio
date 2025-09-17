describe('Simple Test', () => {
  it('should pass basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle string concatenation', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World');
  });
});