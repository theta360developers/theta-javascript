const body = {'name': 'camera.setOptions',
              "parameters": {
                "options": {
                    "videoStitching": "none"
        }   
    }
}

const response = await fetch('https://fake-theta.vercel.app/osc/commands/execute', 
	{method: 'POST', 
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});

const data =  await response.json();

console.log(data);