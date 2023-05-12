const response = await fetch('http://192.168.1.1/osc/info', 
    {method: 'GET', 
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

const data = await response.json();

console.log(data);