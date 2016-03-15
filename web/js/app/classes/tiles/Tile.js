define(['Class', 'Assets'], function(Class, Assets)
{
    var TILEWIDTH = 32, TILEHEIGHT = 32;
    var tiles = [];

    var Tile = Class.extend({
        init:function(_texture, _id)
        {
           this.texture = _texture;
           this.id = _id;
           tiles[_id] = this;
        },
        tick:function(_dt)
        {

        },
        render:function(_g, _x, _y)
        {
            _g.myDrawImage(this.texture, _x, _y, TILEWIDTH, TILEHEIGHT);
        },
        //Getters
        getId:function()
        {
            return this.id;
        },
        isSolid:function()
        {
            return false;
        }
    });

    Tile.tiles = tiles;
    Tile.TILEWIDTH = TILEWIDTH;
    Tile.TILEHEIGHT = TILEHEIGHT;
    Tile.assets = Assets.getAssets("tiles");

    return Tile;
});