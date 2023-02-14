import postgres from 'postgres'

const sql = postgres({
    host                 : 'database',
    port                 : 5432,
    username             : 'postgres',
    password             : 'g1raffe',
});

await sql`

CREATE TABLE all_plays (
    column1 name,
    column2 score,
    column3 time,
    column4 location,
)

SELECT column1, column3, column4
FROM all_plays
ORDER BY column2 DESC
`;

export default sql;