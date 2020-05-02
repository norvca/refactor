// We want to extract all India office, format them with {city, telephone}
const input = `
office, country, telephone 
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766
`;

function acquireData(input) {
  const lines = input.split('\n');
  const result = lines
    .slice(1)
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(','))
    .filter((field) => field[1].trim() === 'India')
    .map((field) => ({ city: field[0].trim(), phone: field[2].trim() }));

  return result;
}
