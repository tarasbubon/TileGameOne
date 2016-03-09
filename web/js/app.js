requirejs.config(
    {
    "baseUrl":"js",
    "paths":
    {
        //Libs
        "Class":"libs/class",
        "Jquery":"libs/jquery",
        //Classes
        "Display":"app/classes/display/Display",
        "Game":"app/classes/game",
        "Launcher":"app/classes/Launcher"
    }
});

require(['app/main']);