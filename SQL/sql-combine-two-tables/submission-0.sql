-- Write your query below
select person.first_name, person.last_name, city, state from person left join address on person.person_id = address.person_id