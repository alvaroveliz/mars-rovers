interface IPosition {
    x: number;
    y: number;
}

class Rover {
    position: IPosition;
    direction: string;

    constructor(posX: number, posY: number, direction: string) {
        this.position = { x: posX, y: posY }
        this.direction = direction;
        //console.log(`New rover landed at ${this.position.x}, ${this.position.y} - ${this.direction}`);
    }

    turnLeft() {
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;

            case 'S':
                this.direction = 'E';
                break;

            case 'E':
                this.direction = 'N';
                break;

            case 'W':
                this.direction = 'S';
                break;

        }
    }

    turnRight() {
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                break;

            case 'S':
                this.direction = 'W';
                break;

            case 'E':
                this.direction = 'S';

                break;

            case 'W':
                this.direction = 'N';
                break;
        }
    }


    moveForward() {
        switch (this.direction) {
            case 'N':
                this.position.y +=1;
                break;

            case 'S':
                this.position.y -= 1;
                break;

            case 'E':
                this.position.x += 1;
                break;

            case 'W':
                this.position.x -= 1;
                break;
        }
    }

    move(commands: string) {

        for (let i = 0; i < commands.length; i++) {
            let command = commands.charAt(i);
            if(command === 'M') {
              this.moveForward();
            }
            else if(command === 'L') {
              this.turnLeft();
            }
            else if(command === 'R') {
              this.turnRight();
            }
            else {
              console.log(`${command} is not a command, please enter M, R, or F.`);
            }
        }
    }

}

export default Rover;