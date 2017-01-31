
// var ffmpeg   = require('ffmpeg');
// var arDrone = require('ar-drone');
// var client  = arDrone.createClient();
// ffmpeg();

// client.takeoff();

// client
  // .after(5000, function() {
  //   this.clockwise(1.0);
  // })
  // .after(3000, function() {
    // this.stop();
  //   this.land();
  // });

  var arDrone = require('ar-drone');
  var ffmpeg = require('ffmpeg');
  var client = arDrone.createClient();
  var fs = require('fs');

  var pngStream = client.getPngStream();
  var frameCounter = 0;
  var period = 5000; // Save a frame every 5000 ms.
  var lastFrameTime = 0;

  pngStream
    .on('error', console.log)
    .on('data', function(pngBuffer) {
      var now = (new Date()).getTime();
      if (now - lastFrameTime > period) {
        frameCounter++;
        lastFrameTime = now;
        console.log('Saving frame');
        fs.writeFile('frame' + frameCounter + '.png', pngBuffer, function(err) {
          if (err) {
            console.log('Error saving PNG: ' + err);
          }
        });
      }
    });



// console.log(ffmpeg);

  // var pngStream = client.getPngStream();
  // pngStream.on('data', console.log);

  /usr/local/Cellar/opencv/2.4.13.1/lib/pkgconfig/opencv.pc
