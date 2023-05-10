import {get} from 'https'
import { createWriteStream } from 'fs';
// from listFiles

const thumbnailStorageBase = 'https://codetricity.github.io/fake-storage/files/100RICOH/thumb/';

const body = {
    'name': 'camera.listFiles',
    'parameters': {
        "fileType": "image",
        "entryCount": 16,
        "maxThumbSize": 0
    }
}

const response = await fetch('https://fake-theta-alpha.vercel.app/osc/commands/execute', 
    {method: 'POST', 
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
const index = Math.floor(Math.random() * 17 )
const filename = data['results']['entries'][index]['name']

const url = thumbnailStorageBase + filename




get(url, resp => resp.pipe(createWriteStream(filename)));