import { expect } from 'chai';
import Plateau from '../src/Plateau';


describe('Rover', () => {
  it('should correctly follow the given commands', () => {
    const plateau = new Plateau(5, 5);

    plateau.addRover(1,2,'N');
    plateau.activeRover.move('LMLMLMLMM');

    expect(
      plateau.activeRover.position
    ).to.eql(
      { x: 1, y: 3 }
    );
  });
});
