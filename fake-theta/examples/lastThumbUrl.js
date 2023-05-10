// from listFiles

const thumbnailStorageBase = 'https://codetricity.github.io/fake-storage/files/100RICOH/thumb/';

const body = {
    'name': 'camera.listFiles',
    'parameters': {
        "fileType": "image",
        "entryCount": 10,
        "maxThumbSize": 0
    }
}

const response = await fetch('https://fake-theta-alpha.vercel.app/osc/commands/execute', 
    {method: 'POST', 
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
const filename = data['results']['entries'][0]['name']

const url = thumbnailStorageBase + filename

console.log(JSON.stringify(url))
// console.log(JSON.stringify(data, null, 4))