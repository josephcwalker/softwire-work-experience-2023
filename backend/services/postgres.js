import postgres from 'postgres'

const sql = postgres({
    host                 : 'database',
    port                 : 5432,
    username             : 'postgres',
    password             : 'g1raffe',
});


await sql`
CREATE TABLE IF NOT EXISTS all_play 
    (name varchar(255),
    score int)
    `;

export default sql;