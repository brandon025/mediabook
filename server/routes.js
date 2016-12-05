//assign movie controller to that model
module.exports = {
  '/movie': require('./controllers/movieController'),
  '/deers': require('./controllers/deersController'),
  '/image': require('./controllers/imageController')
    
};



//var routes = REQUIRE('Express').Routes