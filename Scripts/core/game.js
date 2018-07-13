//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var helloLabel;
    var startButton;
    var AssetManager;
    var Manifest = [
        { id: "StartButton", src: "/Assets/images/StartButton.png" },
        { id: "NextButton", src: "/Assets/images/NextButton.png" },
        { id: "BackButton", src: "/Assets/images/BackButton.png" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        // This is where all the magic happens
        Main();
    }
    function Update() {
        //helloLabel.rotation += 5;
        stage.update();
    }
    function Main() {
        console.log("%c Main Game Started...", "font-style:italic; font-size:16px; color:blue;");
        // this is the Label
        helloLabel = new objects.Label("Hello, World!", "60px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        startButton = new objects.Button("StartButton", 320, 360, true);
        stage.addChild(startButton);
        startButton.on("click", function () {
            helloLabel.text = "Clicked!";
        });
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map