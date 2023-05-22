// What is the Value to enable off Delay?

const body = {'name': 'camera.setOptions',
              "parameters": {
                "options": {
                    "offDelay": 60
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