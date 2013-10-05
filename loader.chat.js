window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "sizzle.js",
                "jquery.min.js"
            ],
            complete : function() {
            }
        },
        {
            test : Modernizr.websockets,
            yep: ['main.chat.js'],
            nope : ['main.chat-alert.js'],
            complete : function() {
                chat.init();
            }
        },        
    ]);

}, false);
