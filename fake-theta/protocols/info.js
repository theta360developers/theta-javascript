const response = await fetch('https://fake-theta.vercel.app/osc/info', 
    {method: 'GET', 
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

const data = await response.json();

console.log(data);