
const dbUpdate = () =>{
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:27017/data_storage';
    xhr.open('POST',url );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({   "id": 55,   "title": "test5666u449gu49ug94ugu4",   "author": "1233" }))

};

export {dbUpdate}