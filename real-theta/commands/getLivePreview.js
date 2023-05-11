const body = {'name': 'camera.getLivePreview'}
const response = await fetch('http://192.168.1.1/osc/commands/execute', 
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