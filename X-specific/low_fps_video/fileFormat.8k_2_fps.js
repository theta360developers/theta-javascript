const body = {'name': 'camera.setOptions',
              "parameters": {
                "options": {
                    "fileFormat": {"type": "mp4",
                    "width": 7680,
                    "height": 3840, 
                    "_codec": "H.264/MPEG-4 AVC", 
                    "_frameRate": 2}
        }   
    }
}

const response = await fetch('http://192.168.1.1/osc/commands/execute', 
	{method: 'POST', 
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});

const data =  await response.json();

console.log(data);