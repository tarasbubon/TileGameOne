define(['Class', 'Display', 'Assets'], function(Class, Display, Assets){

    var _this;
    var running = false;
    var title, width, height, g, display;
    var ast = new Assets("test", "res/textures/mario.png", Assets.DEFAULT_WIDTH, Assets.DEFAULT_HEIGHT);
    var img = ast.sheet.crop(0, 0, 32 ,45);
    var img2 = ast.sheet.crop(32, 0, 32 ,45);

    var Game = Class.extend(
        {
        init:function(_title, _width, _height){
            _this = this;
            title = _title;
            width = _width;
            height = _height;
        }
    });

    function init()
    {
        display = new Display(title, width, height);
        g = display.getGraphics();
    }

    function tick(_dt)
    {

    }
    function render()
    {
        g.clearRect(0, 0, width, height);
        g.myDrawImage(img, 10, 15, 32, 32);
        g.myDrawImage(img2, 50, 15, 32, 32);
    }

    Game.prototype.run = function()
    {
        init();
        var fps = 30;
        var timePerTick = 1000/fps;
        var delta = 0;
        var now;
        var lastTime = Date.now();
        var timer = 0;
        var ticks = 0;
        function loop()
        {
            if(running)
            {
                now = Date.now();
                delta = now - lastTime;
                timer += delta;
                lastTime = now;
            }
            if(timer >= timePerTick)
            {
                dt = timer/1000;
                tick(dt);
                render();
                timer = 0;
            }
            window.requestAnimationFrame(loop);
        }
        loop();
    };

    Game.prototype.start = function()
    {
        if(running)return;
        running = true;
        this.run();
    }

    return Game;
});