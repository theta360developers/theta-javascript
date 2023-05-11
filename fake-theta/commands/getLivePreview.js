const body = {'name': 'camera.getLivePreview'}
const response = await fetch('https://fake-theta.vercel.app/osc/commands/execute', 
	{method: 'POST', 
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});
const data =  response.body

const reader = data.getReader()

while (true) {
	const {value, done} = await reader.read();
	if (done) break;
	console.log('Received', value);
}

console.log(data);