const response = await fetch('https://fake-theta.vercel.app/osc/state', 
    {method: 'POST', 
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

const data = await response.json();

console.log(data);