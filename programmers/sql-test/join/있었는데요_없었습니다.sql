SELECT ins.animal_id, ins.name
  FROM ANIMAL_INS ins INNER JOIN ANIMAL_OUTS outs ON ins.animal_id = outs.animal_id
 WHERE ins.datetime > outs.datetime
 Order by ins.datetime Asc;