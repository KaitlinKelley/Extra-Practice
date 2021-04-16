const {init, GameLoop, Sprite} = kontra;

const {canvas, context} = init();
console.log(canvas);
console.log(context);

const blockImage = new Image();
blockImage.src = "assets/images/bean_blue.png"

const sprite = Sprite({
    x: 200,
    y: 200,
    dx: 2,
    image: blockImage
});
console.log(sprite);

const loop = GameLoop({
    update: () => {
        // console.log("Update");
        sprite.update();

        if(sprite.x > canvas.width){
            sprite.x = -sprite.width;
        }
    },
    render: () => {
        // console.log("Render");
        sprite.render();
    }
});

loop.start();