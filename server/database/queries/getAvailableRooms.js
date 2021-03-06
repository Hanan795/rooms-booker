const dbconnection = require('../db_connection')

const availableRooms = (eventDate) => {
  const sql = {
    text:
      'SELECT room_name FROM rooms WHERE room_id NOT IN (SELECT room_id FROM events WHERE event_date = $1)',
    values: [eventDate]
  }

  return dbconnection
    .query(sql)
    .then(res => res.rows)
    .catch(err => err)
}

module.exports = availableRooms
