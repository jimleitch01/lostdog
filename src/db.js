const { Pool } = require('pg');

const pool = new Pool({
  user: 'lostdoguser',
  host: 'db',
  database: 'lostdog',
  password: 'lostdogpassword',
  port: 5432,
});

const insertUser = async (name, email, password) => {
  const client = await pool.connect();
  try {
    const res = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return res.rows[0];
  } finally {
    client.release();
  }
};

const insertPet = async (userId, name, description, photoPath) => {
  const client = await pool.connect();
  try {
    const res = await client.query(
      'INSERT INTO pets (user_id, name, description, photo_path) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, name, description, photoPath]
    );
    return res.rows[0];
  } finally {
    client.release();
  }
};

module.exports = {
  insertUser,
  insertPet,
};
