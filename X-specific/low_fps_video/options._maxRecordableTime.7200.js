/* THETA X can set 7200 max recordable time only for 5.7K 2/5/10fps and 8K 2/5/10fps */
const body = {'name': 'camera.setOptions',
              "parameters": {
                "options": {
                    "_maxRecordableTime": 7200
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