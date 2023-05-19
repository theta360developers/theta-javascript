const body = {'name': 'camera.setOptions',
              "parameters": {
                "options": {
                    "_preset": "lensbylensExposure"
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