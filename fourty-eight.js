let body = JSON.parse($response.body);
let pcrInfo = body.data.pcrInfo;
pcrInfo.pcrTime = pcrTime();
pcrInfo.checkTime = pcrInfo.pcrTime;
pcrInfo.compareTime = pcrInfo.pcrTime;
pcrInfo.time = "1";
pcrInfo.newPcrStatusDesc = "阴性";
pcrInfo.colorCss = "#27AE64";
pcrInfo.inceptTime = pcrInfo.pcrTime;
pcrInfo.pcrStatus = "1";
pcrInfo.newPcrStatus = "1";
pcrInfo.pcrResult = "1";
body.data.travelInfo = "1";
body.data.pcrInfo = pcrInfo;
$done({ body: JSON.stringify(body) });

function pcrTime() {
  let date = new Date();
  var yesterday = new Date(date.getTime());
  yesterday.setDate(date.getDate() - 1);

  let month = (yesterday.getMonth() + 1).toString();
  if (month.length < 2) month = "0" + month;
  let day = yesterday.getDate().toString();
  if (day.length < 2) day = "0" + day;

  return month + "-" + day + " 15:33";
}
