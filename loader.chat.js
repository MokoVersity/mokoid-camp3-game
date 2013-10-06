window.addEventListener("load", function() {

    Modernizr.load([
        {
            load : [
                "sizzle.js",
                "jquery.min.js",
                "jquery.tmpl.min.js",
                "bootstrap.min.js"
            ]
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
