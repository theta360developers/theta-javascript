const body = {'name': 'camera.getOptions',
              "parameters": {
                    "optionNames": [
                        "videoStitching",
                        "iso",
                        "isoAutoHighLimit",
                        "dateTimeZone",
                        "_shutterVolume",
                        "sleepDelay",
                        "captureMode",
                        "fileFormat",
                        "offDelay",
                        "shutterSpeed",
                        "_powerSaving"
        ]					
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