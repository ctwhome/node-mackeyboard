/**
 * Node mac-keyboard. by Jesus García
 * ----------------------------------------------------------------
 *
 * @link http://www.ctwhome.com/leaplearn
 * @copyright 2014 Jesus García
 * @date 26/09/14, 11:25.
 *
 * SERVER NODE.JS
 * ---------------------
 * Node module to fire keyboard events from a node server.
 * using NodObjC (https://github.com/TooTallNate/NodObjC).
 */

'use strict'

var $ = require('nodobjc');
$.framework('Cocoa');

var pool;

var init = function() {
    pool = $.NSAutoreleasePool('alloc')('init');
}

var pressKey = function(key){
    // Key to press
    key = key || 125;

    // Keyboard key event
    var keyEvent = $.CGEventCreateKeyboardEvent(null, key, true);
    
    // Fire event
    $.CGEventPost($.kCGHIDEventTap, keyEvent);

    console.log("Key fired: ", key);
}


//*********
var quit = function() {
    pool('drain');
}

// Make visible the funcitons
module.exports = {
    init: init,
    pressKey: pressKey, 
    quit: quit
}