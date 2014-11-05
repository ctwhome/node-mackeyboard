# mackeyboard

A node.js module that enables you to create virtual keyboard input on Mac OS X.

## Credits
Uses [NodObjC](https://github.com/TooTallNate/NodObjC) to hook into the Cocoa framework. The mackeyboard module is merely a wrapper around key control commands to the Cocoa framework via NodObjC.
Special thanks to [Loknar](https://github.com/Loknar)

## Installation

Install using `npm`,

``` bash
$ npm install mac-keyboard
```

## Usage Example
``` javascript

var pressKey = function(key){
    // Key to press
    key = key || 125;

    // Keyboard key event
    var keyEvent = $.CGEventCreateKeyboardEvent(null, key, true);
    
    // Fire event
    $.CGEventPost($.kCGHIDEventTap, keyEvent);

    console.log("Key fired: ", key);
}

```

## Keyboard Codes
![Keyboard Keys](https://raw.githubusercontent.com/ctwhome/node-mackeyboard/master/keyboardmac.png)

## License
(MIT License)
