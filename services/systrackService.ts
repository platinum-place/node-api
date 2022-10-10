// var url_systrack = process.env.SYSTRACK_url;
// var app_id_systrack = process.env.SYSTRACK_App_id;
// var user_systrack = process.env.SYSTRACK_User;
// var pass_systrack = process.env.SYSTRACK_Pass;
// var Authorization_systrack = process.env.SYSTRACK_Authorization;

var url_systrack =
  "http://190.166.123.174/comGpsGate/api/v.1/applications/261/users?FromIndex=0&PageSize=1000";
var app_id_systrack = "261";
var user_systrack = "apinobe";
var pass_systrack = "123456";
var Authorization_systrack =
  "EDn8jRS0NPf%2bXFuHm3nGKpxsp%2btVjlr%2bXViZX1JS5%2fM7s8HKUR1U9CfrD02BO7De";

export const getSystrackLocations = async () => {
  const response = await fetch(url_systrack, {
    headers: {
      Accept: "application/json",
      "App-id": app_id_systrack,
      User: user_systrack,
      Pass: pass_systrack,
      Authorization: Authorization_systrack,
    },
  });

  const r = await response.json();

  return r;
};

export const getSystrackLocationsById = async (id) => {
  let data = await getSystrackLocations();

  return data;
};

export const getSystrackLocationById = (id: string) => {};
