// What is the Value to enable off Delay?

const body = {'name': 'camera.setOptions',
              "parameters": {
                "options": {
                    "offDelay": 600
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