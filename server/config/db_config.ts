import mysql from 'mysql2';

console.log(process.env.DB_USER);
const db_info = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  socketPath: process.env.SOCKET_PATH,
};

const db = {
  init: () => {
    return mysql.createConnection(db_info);
  },
  connect: (conn) => {
    conn.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successful mySQL connection !');
      }
    });
  },
  disconnect: (conn) => {
    conn.end((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successful mySQL disconnection !');
      }
    });
  },
};

const connection = db.init();
db.connect(connection);

export default connection;
