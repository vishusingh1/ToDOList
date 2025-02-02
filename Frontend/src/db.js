import Dexie from 'dexie';

const db = new Dexie('ToDoApp');
db.version(1).stores({
  
});

export { db };
