SELECT ins.name, ins.datetime
  FROM ANIMAL_INS ins LEFT OUTER JOIN ANIMAL_OUTS outs
    ON ins.animal_id = outs.animal_id 
 WHERE outs.datetime IS NULL
 ORDER BY ins.datetime LIMIT 3;