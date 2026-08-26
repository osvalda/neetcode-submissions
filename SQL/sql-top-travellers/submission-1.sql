-- Write your query below
select u.name, COALESCE(SUM(r.distance), 0) as travelled_distance from users as u left join rides r on r.user_id = u.id
group by u.id, u.name
order by travelled_distance desc, u.name asc