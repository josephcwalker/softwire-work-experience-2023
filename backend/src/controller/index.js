import sql from '../../services/postgres.js';



export const getScores = async (res, parameters)=> {
  
  const data = await sql`
      select *
      from all_play
    `
  return  res.status(200).json(
      {status: 200,
      data: data}
  )
}

//users = Result [{ name: "Walter", score: 80 }, { name: 'Murray', score: 68 }, ...]
//new score




export const newScore = async ( res, parameters )=> {
  
  var name = parameters.name
  var score = parameters.score
  await sql`
   INSERT INTO all_play
     (name, score)
   VALUES
     (${ name }, ${ score })
  `
  return  res.status(200).json(
    {status: 200})
  }
