// from listFiles

const body = {
    'name': 'camera.listFiles',
    'parameters': {
        "fileType": "image",
        "entryCount": 10,
        "maxThumbSize": 0
    }
}

const response = await fetch('http://192.168.1.1/osc/commands/execute', 
    {method: 'POST', 
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
const fileUrl = data['results']['entries'][0]["fileUrl"]

console.log(JSON.stringify(fileUrl, null, 4))