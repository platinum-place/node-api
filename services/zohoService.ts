// var url_oauth = process.env.ZOHO_oauth_url;
// var url_apis = process.env.ZOHO_apis_url;
// var refresh_token = process.env.ZOHO_refresh_token;
// var client_id = process.env.ZOHO_client_id;
// var client_secret = process.env.ZOHO_client_secret;

var url_oauth = "https://accounts.zoho.com/oauth/v2";
var url_apis = "https://zohoapis.com/crm/v2";
var refresh_token =
  "1000.f9f5b015bf885e6b3f4b6fab8290e7ae.5d7e5607032ed544e6491b557e191d12";
var client_id = "1000.7FJQ4A2KDH9S2IJWDYL13HATQFMA2H";
var client_secret = "c3f1d0589803f294a7c5b27e3968ae1658927da9d7";

export const generateZohoAceessToken = async () => {
  const response = await fetch(
    url_oauth +
      "/" +
      "token?refresh_token=" +
      refresh_token +
      "&client_id=" +
      client_id +
      "&client_secret=" +
      client_secret +
      "&grant_type=refresh_token",
    {
      method: "POST",
    }
  );

  const r = await response.json();

  return r.access_token;
};

export const zohoCreate = async (module: string, data: {}) => {
  let token = await generateZohoAceessToken();

  const response = await fetch(url_apis + "/" + module, {
    method: "POST",
    headers: {
      Authorization: "Zoho-oauthtoken " + token,
    },
    body: JSON.stringify(data),
  });

  const r = await response.json();

  return r;
};

export const zohoGet = async (module: string, id: string | string[]) => {
  let token = await generateZohoAceessToken();

  const response = await fetch(url_apis + "/" + module + "/" + id, {
    headers: {
      Authorization: "Zoho-oauthtoken " + token,
    },
  });

  const r = await response.json();

  return r;
};
