window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "sizzle.js",
                "jquery.min.js",
                "bootstrap.min.js",
                "main.js"
            ],
            complete : function() {
                bubble.start();
            }
        }
    ]);

}, false);
