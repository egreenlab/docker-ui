const {Router} = require('express')
const images = require('./images')
const containers = require('./containers')
const volumes = require('./volumes')
const networks = require('./networks')

const router = module.exports = new Router()

router.get('/images', images.list)
router.get('/images/:id', images.read)
router.delete('/images/:id', images.destroy)
router.post('/images/prune', images.prune)

router.get('/containers', containers.list)
router.get('/containers/:id', containers.read)
router.put('/containers/:id/rename', containers.rename)
router.put('/containers/:id/restart', containers.restart)
router.put('/containers/:id/start', containers.start)
router.put('/containers/:id/stop', containers.stop)
router.put('/containers/:id/kill', containers.kill)
router.put('/containers/:id/pause', containers.pause)
router.put('/containers/:id/unpause', containers.unpause)
router.delete('/containers/:id', containers.destroy)
router.post('/containers/prune', containers.prune)

router.get('/volumes', volumes.list)
router.post('/volumes', volumes.create)
router.get('/volumes/:id', volumes.read)
router.delete('/volumes/:id', volumes.destroy)
router.post('/volumes/prune', volumes.prune)

router.get('/networks', networks.list)
router.post('/networks', networks.create)
router.get('/networks/:id', networks.read)
router.delete('/networks/:id', networks.destroy)
router.post('/networks/prune', networks.prune)
