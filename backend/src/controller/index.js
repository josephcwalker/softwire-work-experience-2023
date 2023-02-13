import sql from '../../services/postgres.js';

export const someAction = async (res, parameters) => {
    await sql`CREATE TABLE IF NOT EXISTS example (a INTEGER, b TEXT)`;
    await sql`INSERT INTO example (a, b) VALUES (1, 'hello')`;
    const data = await sql`SELECT * FROM example`;
    
    return  res.status(200).json({
        status: 200,
        message: 'This is an example',
        data: data
    })
}