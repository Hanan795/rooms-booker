const getAllRooms = require('../database/queries/getAllRooms')


exports.getAllRooms = (req, res) => {

  getAllRooms()
    .then(result => {
      res.json(result.rows)
    })
    .catch(err => console.log(err))
}

