WITH subdivision_tree AS (
SELECT id, name, parent_id, 1 AS level
FROM subdivisions
WHERE id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)

UNION ALL

SELECT s.id, s.name, s.parent_id, st.level + 1 AS level
FROM subdivisions s
JOIN subdivision_tree st ON s.parent_id = st.id
WHERE s.id NOT IN (100055, 100059)
)

SELECT
c.id,
c.name,
st.name AS sub_name,
st.id AS sub_id,
st.level AS sub_level,
COUNT(*) OVER (PARTITION BY st.id) AS colls_count
FROM collaborators c
JOIN subdivision_tree st ON c.subdivision_id = st.id
WHERE c.age < 40
ORDER BY st.level;