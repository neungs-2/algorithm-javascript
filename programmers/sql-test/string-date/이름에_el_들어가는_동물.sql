SELECT animal_id, name
  FROM animal_ins
 WHERE animal_type = 'DOG' and name LIKE '%el%'
 ORDER BY name;