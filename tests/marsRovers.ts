import chai, { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

import MarsRovers from '../src/MarsRovers';
import Plateau from '../src/Plateau';

describe('MarsRover', () => {
  const inputFileTest = './tests/input.txt';
  const marsRovers = new MarsRovers(inputFileTest);

  it('should validate file format', async () => {
    await expect(
      () => marsRovers.deployRovers()
    ).to.not.throw(new Error('Wrong file format'));
  });

  it('should validate plateau configuration', async () => {
    await expect(
      () => marsRovers.deployRovers()
    ).to.not.throw(new Error('Plateau configuration should be "number number"'));
  });

  it('should validate rover configuration', async () => {
    await expect(
      () => marsRovers.deployRovers()
    ).to.not.throw(new Error('Rover configuration should be "x y direction"'));
  });
});

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

    expect(
      plateau.activeRover.direction
    ).to.eql(
      'N'
    );
  });
});
