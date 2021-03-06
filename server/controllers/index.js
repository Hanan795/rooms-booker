const express = require('express')
const router = express.Router()
const { getAllRooms } = require('./getAllRooms')
const { getAllEvents } = require('./getAllEvents')
const userEvents = require('./userHome')
const { login } = require('./login')
const addEvent = require('../controllers/addEvent')
const searchAvailableRooms = require('./getAvailableRooms')
const editEvent = require('./editEvent.js')

router.get('/api/rooms', getAllRooms)
router.get('/api/user-events/:id', userEvents)
router.post('/api/update-event', editEvent)
router.get('/api/events', getAllEvents)
router.get('/api/available-rooms', searchAvailableRooms)
router.post('/api/login', login)
router.post('/api/booking', addEvent)

module.exports = router
