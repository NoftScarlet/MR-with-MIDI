
const dbUpdate = () =>{
    let xhr = new XMLHttpRequest();
    let url = 'http://localhost:27017/posts';
    xhr.open('POST',url );
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({   "id": 5,   "title": "test5666u449gu49ug94ugu4",   "author": "aspcjka9scja90scj" }))

};

export {dbUpdate}