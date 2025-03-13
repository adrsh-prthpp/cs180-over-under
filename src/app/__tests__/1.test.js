test('BetCard renders with correct initial vote counts', () => {
  render(<BetCard name="Test Bet" overCount={42} underCount={58} />);
  
  expect(screen.getByText('Over (42)')).toBeDefined();
  expect(screen.getByText('Under (58)')).toBeDefined();
});

test('BetCard displays name correctly', () => {
  render(<BetCard name="Bitcoin Price" overCount={0} underCount={0} />);
  expect(screen.getByText('Bitcoin Price')).toBeDefined();
});

test('BetCard shows expiry time when provided', () => {
  const futureTime = Date.now() + 60000; // 1 minute in the future
  render(<BetCard 
    name="Test Bet" 
    expiry={futureTime}
    overCount={0} 
    underCount={0} 
  />);
  
  expect(screen.getByText(/Expires in:/)).toBeDefined();
});

test('BetCard handles missing expiry gracefully', () => {
  render(<BetCard name="No Expiry Bet" overCount={10} underCount={20} />);
  expect(screen.queryByText(/Expires in:/)).toBeNull();
});
