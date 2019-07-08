import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const dbWrite = () =>{
    const adapter = new LocalStorage('db')
    const db = low(adapter);


// Set some defaults (required if your JSON file is empty)
    db.defaults({ posts: [], user: {}, count: 0 })
        .write();

// Add a post
    db.get('posts')
        .push({ id: 1, title: 'lowdb is awesome'})
        .write();

// Set a user using Lodash shorthand syntax
    db.set('user.name', 'typicode')
        .write();

// Increment count
    db.update('count', n => n + 1)
        .write();
};

export {dbWrite}