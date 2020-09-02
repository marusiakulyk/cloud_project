1. Create bucket for artifacts
2. <code>sam package --output-template-file packaged.yaml --s3-bucket <artifact-bucket></code>
3. <code>sam deploy --template-file packaged.yaml --stack-name image-scale --capabilities CAPABILITY_IAM --region eu-central-1</code>
4. Change request URL in index.html and statistics.html to ApiUrl from outputs
5. Copy static files to host bucket (scriptImg.js, statistics.html, index.html)

<p>Demo page - http://d35pxlpvgkrgs1.cloudfront.net/</p>
<p>Report - https://docs.google.com/document/d/12J3yfSEneSeZ1AuFr54Z2CKzuCqExdagdI-3xdSe3nw/edit</p>
