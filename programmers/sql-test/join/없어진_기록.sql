SELECT outs.ANIMAL_ID, outs.NAME
  FROM animal_ins ins Right JOIN animal_outs outs 
    ON ins.ANIMAL_ID = outs.ANIMAL_ID
 WHERE ins.ANIMAL_ID IS NULL;