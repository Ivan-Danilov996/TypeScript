import Movie from '../domain/Movie';
import Cart from '../service/Cart';

test('delete product', () => {
    const cart = new Cart();
    cart.add(new Movie(1009, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'fantasy'], '137 мин./ 02:17', 3000))
    cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble', ['fantastic', 'fantasy'], '137 мин./ 02:17', 1000))
    cart.deleteProduct(1010);
  
    expect(cart.items.length).toBe(1)
  });