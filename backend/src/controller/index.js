import sql from '../../services/postgres.js';

export const getScores = async (res, parameters)=> {
  
  const data = await sql`
      select *
      from all_play
      order by score DESC
    `
  return  res.status(200).json(
      {status: 200,
      data: data}
  )
}

//users = Result [{ name: "Walter", score: 80 }, { name: 'Murray', score: 68 }, ...]
//new score

var max_score = 50

export const newScore = async ( res, parameters )=> {
  var name = parameters.name
  var score = parameters.score
  
  await sql`
   INSERT INTO all_play
     (name, score)
   VALUES
     (${ name }, ${ score }) 
  `;
  var num = await sql`
  SELECT COUNT(score) FROM all_play;
  `
  num = num[0].count

  if ( num > max_score) {
    var diff = num - max_score;
    await sql`
    DELETE FROM all_play
      WHERE id IN (
          SELECT id
          FROM all_play
          ORDER BY score ASC
          LIMIT ${ diff }
      )
    `
  }
   
  
  return  res.status(200).json(
    {status: 200})
  }


  // sql command to get all the entries DONE!!!
  // count how many entries and sotre in variable DONE!!!

  // if its more than 50 then
  // do another sql call to delete the last 55-50
 