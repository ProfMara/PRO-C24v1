class Caixa {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 70;
        var mexe = { isStatic: false, restitution: 0.8, friction: 1, density: 1 };
        this.body = Bodies.rectangle(x, y, 70, 70, mexe);

        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();


    }

}