define(['Class', 'TileLoader'], function(Class, Tile)
{
    var World = Class.extend({
        init:function(_path)
        {
            this.tiles = [];
            this.width = 5;
            this.height = 5;
            this.loadWorld(_path);
        },
        loadWorld:function(_path)
        {
            for(var x = 0; x < this.width; x++)
            {
                for(var y = 0; y < this.height; y++)
                {
                    if(!this.tiles[x])
                        this.tiles[x] = [];
                    this.tiles[x][y] = 2;
                }
            }
        },
        tick:function(_dt)
        {

        },
        render:function(_g)
        {
            for(var y = 0; y < this.height; y++)
            {
                for(var  x = 0; x < this.width; x++)
                {
                    this.getTile(x, y).render(_g, x * Tile.TILEWIDTH, y * Tile.TILEHEIGHT);
                }
            }
        },
        getTile:function(x, y)
        {
            return Tile.tiles[this.tiles[x][y]];
        }
    });

    return World;
});