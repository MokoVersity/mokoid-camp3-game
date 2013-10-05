window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "main.js"
            ],
            complete : function() {
                bubble.start();
            }
        }
    ]);

}, false);
