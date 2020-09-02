document.getElementById("contact").addEventListener("submit", function (e) {
        e.preventDefault();
        let request = new XMLHttpRequest();

        // request.onload = () => {
        //     if (request.status >= 200 && request.status < 300) {
        //         alert("success");
        //     }
        // };

        request.open('POST', 'https://aej6cebqnf.execute-api.eu-central-1.amazonaws.com/v1/postImg');
        request.setRequestHeader("Access-Control-Allow-Origin", "*");

        const json = JSON.stringify({
            email: document.getElementById("email").value,
            width: document.getElementById("width").value,
            height: document.getElementById("height").value
        });

        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(json);

        document.getElementById("contact").reset();

    }
);