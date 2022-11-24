# JS-IndexedDBGetSet

A simple JavaScript function; variable setter/getter in HTML5 IndexedDB.
### Usage:
`cookset(key_name, key_value)` > stores `key_name`:`key_value` in IndexedDB.  
`cookset(key_name, null)` > deletes the key pair.  
`cookget(key_name, callback_function)` > callback result passed into first parameter of `callback_function`, `x` of `fn(x)` ; e.g. `(x)=>{console.log(x)}`
