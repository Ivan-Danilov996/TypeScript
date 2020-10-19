import Movie from '../domain/Movie';
import Cart from '../service/Cart';

test('add movie to cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'fantasy'], '137 мин./ 02:17', 300))

  expect(cart.items.length).toBe(1);
});