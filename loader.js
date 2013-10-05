window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "main.js",
                "sizzle.js"
            ],
            complete : function() {
                bubble.start();
            }
        }
    ]);

}, false);
