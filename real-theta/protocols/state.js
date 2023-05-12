const response = await fetch('http://192.168.1.1/osc/state', 
    {method: 'POST', 
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

const data = await response.json();

console.log(data);