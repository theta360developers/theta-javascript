const body = {'name': 'camera.listFiles',
              "parameters": {
                  "fileType": "all",
                  "entryCount": 5,
                  "maxThumbSize": 0   
    }
}
const response = await fetch('http://192.168.1.1/osc/commands/execute', 
	{method: 'POST', 
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});
const data =  await response.json();

const prettyData = JSON.stringify(data,null,4)

console.log(prettyData);