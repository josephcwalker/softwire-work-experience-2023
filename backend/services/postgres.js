import postgres from 'postgres'

const sql = postgres({
    host                 : 'database',
    port                 : 5432,
    username             : 'postgres',
    password             : 'g1raffe',
});

export default sql;