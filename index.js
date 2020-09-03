const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.getImg = function (event, context, callback) {
    let scanningParameters = {
        TableName: 'images'
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

exports.loadToS3 = function (event, context, callback){
    let encodedImage =JSON.parse(event.body).image;
    let decodedImage = Buffer.from(encodedImage, 'base64');
    var filePath = "avatars/" + event.queryStringParameters.username + ".jpg"
    var params = {
        "Body": decodedImage,
        "Bucket": "find-my-mate-hasangi",
        "Key": filePath
    };
    s3.upload(params, function(err, data){
        if(err) {
            callback(err, null);
        } else {
            let response = {
                "statusCode": 200,
                "headers": {
                    "my_header": "my_value"
                },
                "body": JSON.stringify(data),
                "isBase64Encoded": false
            };
            callback(null, response);
        }
    });
}
