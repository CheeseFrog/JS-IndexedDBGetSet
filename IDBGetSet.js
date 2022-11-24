function IDBset(n, v) { // store name and value
    cookIDB(n, v, 1, 0); 
}

function IDBget(n, fn) { // callback result passed into first parameter, 'x' of fn(x) ; e.g. (x)=>{console.log(x)} 
    cookIDB(n, 0, 0, fn);
}

function cookIDB(xn, xv, RW, fn) {
    var openDB = indexedDB.open("database", 1);

    openDB.onupgradeneeded = () => { // create  schema
        var db = openDB.result;
        db.createObjectStore("store", {keyPath: "name"});
    }

    openDB.onsuccess = () => {
        var db = openDB.result; // Start transaction
        var tx = db.transaction("store", "readwrite");
        var store = tx.objectStore("store");
        
        if (RW == 1) { // Modify Data
            if (xv == null) store.delete({id: xn})
            else store.put({name: xn, value: JSON.stringify(xv)});
        }
        
        if (RW == 0) { // Query Data
            var query = store.get(xn);
            query.onsuccess = () => {
                var r = query.result.value;
                if (r) r = JSON.parse(r);
                if (fn) (fn)(r);
            }
        }

        tx.oncomplete = () => {db.close();} // close DB when transaction done
    }
}