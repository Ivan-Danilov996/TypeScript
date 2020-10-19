import Movie from '../domain/Movie';
import Cart from '../service/Cart';

test('sumPrice without sale', () => {
    const cart = new Cart();
    cart.add(new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'fantasy'], '137 мин./ 02:17', 3000))
    cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'fantasy'], '137 мин./ 02:17', 1000))
  
    expect(cart.sumPrice()).toBe(4000);
  });

  test('sumPrice with sale', () => {
    const cart = new Cart();
    cart.add(new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'fantasy'], '137 мин./ 02:17', 3000))
    cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'fantasy'], '137 мин./ 02:17', 1000))
  
    expect(cart.sumPrice(10)).toBe(3600);
  });
