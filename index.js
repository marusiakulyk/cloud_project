console.log('function starts');

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.getImg = function (event, context, callback) {
    let scanningParameters = {
        TableName: 'images',
        Limit: 100
    };

    db.scan(scanningParameters, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            let response = {
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                "statusCode": 200,
                "body": JSON.stringify(data),
                "isBase64Encoded": false
            };
            callback(null, response);
        }
    });
};

exports.postImg = function (event, context, callback) {
    const data = JSON.parse(event.body);
    let params = {
        Item: {
            Email: data.email,
            Width: data.width,
            Height: data.height,
        },

        TableName: 'images'
    };


    db.put(params, function (err, data) {
        if (err) {
            callback(err, null)
        } else {

            let response = {
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                "statusCode": 200,
                "body": "Added successfully",
                "isBase64Encoded": false
            };
            callback(null, response);
        }
    });
};
