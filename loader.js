window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "sizzle.js",
                "main.js"
            ],
            complete : function() {
                bubble.start();
            }
        }
    ]);

}, false);
