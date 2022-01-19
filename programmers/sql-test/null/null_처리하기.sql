SELECT animal_type, IFNULL(name, 'No name'), sex_upon_intake
  FROM animal_ins
 order by animal_id;