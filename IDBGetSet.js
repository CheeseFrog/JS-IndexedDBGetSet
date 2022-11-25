cookIDB.set = (name, value, fn) => { // Set pair, callback success fn 
    cookIDB(name, value, 1, fn); 
}

cookIDB.get = (name, fn) => { // Get value, callback success result passed into first fn parameter
    cookIDB(name, 0, 0, fn);
}

function cookIDB(n, v, RW, fn) {
    var openDB = indexedDB.open("database", 1);

    openDB.onupgradeneeded = () => { // Create  schema
        var db = openDB.result;
        db.createObjectStore("store", {keyPath: "name"});
    }

    openDB.onsuccess = () => {
        var db = openDB.result; // Start transaction
        var tx = db.transaction("store", "readwrite");
        var store = tx.objectStore("store");
        var query;
        
        if (RW == 1) { // Modify Data
            if (v == null) query = store.delete({id: n})
            else query = store.put({name: n, value: JSON.stringify(v)});
            query.onsuccess = () => {if (fn) (fn)()}
        }
        
        if (RW == 0) {
            query = store.get(n);
            query.onsuccess = () => {
                if (fn) (fn)(JSON.parse(query.result.value||null));
            }
        }

        tx.oncomplete = () => {db.close();} // close DB when transaction done
    }
}