import postgres from 'postgres'

const sql = postgres({
    host                 : 'database',
    port                 : 5432,
    username             : 'postgres',
    password             : 'g1raffe',
});

await sql`
CREATE TABLE IF NOT EXISTS all_play 
    (
    id serial primary key,
    name varchar(255),
    score int)
    `;

export default sql;