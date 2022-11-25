# JS-IndexedDBGetSet

A simple JavaScript function; variable setter/getter in HTML5 IndexedDB, similar to but tinier (<1kb minified) than [localforage](https://localforage.github.io/localForage/).  

### Usage:
```
<script src="./IDBGetSet.js"></script>
```
- `cookIDB.set(key_name, key_value, callback_function))` > stores `key_name:key_value`, runs `callback_function` if successful.  
- `cookIDB.set(key_name, null)` > deletes the key pair, runs `callback_function` if successful.  
- `cookIDB.get(key_name, callback_function)` > callback result `key_value` passed into first parameter of `callback_function`*  

<sub>* For example: `cookIDB.get(key_name,(x)=>{console.log(x)})` logs `key_value`.</sub>  
<br><br>
[Donate](https://paypal.me/auyousef) some caffiene.
