document.body.onkeydown = function( e ) {
    var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
        32: 'drop'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};

bl.onmousedown=function() {leftPressed = true;}
bl.ontouchstart=function() {leftPressed = true;}
bl.onmouseup=function() {leftPressed = false;}
bl.ontouchend=function() {leftPressed = false;}
bp.onmousedown=function() {rightPressed = true;}
bp.ontouchstart=function() {rightPressed = true;}
bp.onmouseup=function() {rightPressed = false;}
bp.ontouchend=function() {rightPressed = false;}
