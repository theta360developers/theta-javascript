/**
 * Example shows how to find the start and stop of a 
 * motionjpeg frame.
 * fake-theta only returns a single frame for testing.
 */

import { writeFile } from 'fs';

const body = {'name': 'camera.getLivePreview'}
const response = await fetch('https://fake-theta.vercel.app/osc/commands/execute', 
	{method: 'POST', 
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});

const data =  response.body

function fetchStream() {
    let startIndex = -1;
    let endIndex = -1;
    var buf =[];

    const reader = data.getReader();
    let charsReceived = 0;
    
    // read() returns a promise that resolves
    // when a value has been received
    reader.read().then(function processFrames({ done, value }) {
        Array.prototype.push.apply(buf, value);
      // Result objects contain two properties:
      // done  - true if the stream has already given you all its data.
      // value - some data. Always undefined when done is true.
      if (done) {
        console.log("Stream complete");
        return;
      }
      for (var i = 0; i < value.length - 1; i++) {
        if (value[i] == 0xff) {
          if (value[i + 1] == 0xd8) {
            startIndex = i;
            console.log(`start index is at position ${startIndex}`);
          }
          if (value[i] == 0xff && value[i+1] == 0xd9) {
            endIndex = buf.length
          }
        }
    }

    if (startIndex != -1 && endIndex != -1) {
        console.log('saving frame');
        writeFile('frame.jpg', Buffer.from(buf), ()=> console.log('done. frame saved as frame.jpg'))
        
    }
  
      
      // Read some more, and call this function again
      return reader.read().then(processFrames);
    });
  }
  
  fetchStream();
