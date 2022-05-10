let body = JSON.parse($response.body);
let pcrInfo = body.data.pcrInfo;
pcrInfo.pcrTime = "05-09 15:33";
pcrInfo.pcrStatus = "1";
pcrInfo.newPcrStatus = "1";
pcrInfo.pcrResult = "1";
body.data.travelInfo = "1";
body.data.pcrInfo = pcrInfo;
$done({body: JSON.stringify(body)});