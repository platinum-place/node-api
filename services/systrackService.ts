var url_systrack = process.env.SYSTRACK_url;
var app_id_systrack = process.env.SYSTRACK_App_id;
var user_systrack = process.env.SYSTRACK_User;
var pass_systrack = process.env.SYSTRACK_Pass;
var Authorization_systrack = process.env.SYSTRACK_Authorization;

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


export const getSystrackLocationById =  (id:string) => {

}