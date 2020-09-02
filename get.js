const app = document.getElementById('stat');
const container = document.createElement('div');

app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'https://aej6cebqnf.execute-api.eu-central-1.amazonaws.com/v1/getImg', true);
request.setRequestHeader("Access-Control-Allow-Origin", "*");


request.onload = function () {
    const data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.Items.forEach(user => {
            const item = document.createElement('div');

            const h1 = document.createElement('h4');
            h1.textContent = `Email: ${user.Email}`;

            const p1 = document.createElement('p');
            p1.textContent = `Width: ${user.Width} `;

            const p2 = document.createElement('p');
            p2.textContent = `Height: ${user.Height} `;

            container.appendChild(item);
            item.appendChild(h1);
            item.appendChild(p1);
            item.appendChild(p2);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
};

request.send();