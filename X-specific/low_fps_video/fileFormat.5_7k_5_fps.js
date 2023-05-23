const body = {'name': 'camera.setOptions',
              "parameters": {
                "options": {
                    "fileFormat": {"type": "mp4","width": 5760,"height": 2880, "_codec": "H.264/MPEG-4 AVC", "_frameRate": 5}
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