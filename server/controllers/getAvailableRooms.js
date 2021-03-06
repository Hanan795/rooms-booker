const getAvailableRooms = require('../database/queries/getAvailableRooms')

const getAvailableRoom = (req, res) => {
  const eventDate = req.query.date
  getAvailableRooms(eventDate)
    .then(data => res.send(data))
    .catch(err => err)
}

module.exports = getAvailableRoom
