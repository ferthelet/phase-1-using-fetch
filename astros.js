fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(`Holy cow, there are ${data.number} humans in space!`)
    });
