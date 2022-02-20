SELECT ins.ANIMAL_ID, ins.NAME 
  FROM animal_ins ins JOIN animal_outs outs ON ins.ANIMAL_ID = outs.ANIMAL_ID
 ORDER BY ins.DATETIME - outs.DATETIME LIMIT 2