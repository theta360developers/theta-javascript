const body = {'name': 'camera.getOptions',
              "parameters": {
                    "optionNames": [
                        "_filter",
                        "dateTimeZone",
                        "fileFormat",
                        "iso",
                        "isoAutoHighLimit",
                        "shutterSpeed",
                        "_shutterVolume",
                        "_powerSaving",
                        "sleepDelay",
                        "offDelay",
                        "captureMode",
                        "videoStitching"
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