import Rover from './Rover';

interface IGridSize {
    x: number;
    y: number;
}

class Plateau {
    size: IGridSize;
    rovers: Rover[];
    activeRover: any;

    constructor(gridX: number, gridY: number)
    {
        this.size = { x: gridX, y: gridY }
        this.rovers = [];
        this.activeRover = null;
    }

    isValidPosition(x: number, y: number ) {
        return (
            x > -1 && y > -1 &&
            x <= this.size.x &&
            y <= this.size.y
        );
    }

    addRover(x: number, y: number, direction: string) {
        // Avoid rover collision on adding
        if (!this.isValidPosition(x, y )) {
          return false;
        }

        // Create rover.
        const rover = new Rover(x, y, direction);
        this.rovers.push(rover);

        // Set active rover last added
        this.activeRover = rover;
    }
}

export default Plateau;