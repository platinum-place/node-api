var url_oauth = process.env.ZOHO_oauth_url;
var url_apis = process.env.ZOHO_apis_url;
var refresh_token = process.env.ZOHO_refresh_token;
var client_id = process.env.ZOHO_client_id;
var client_secret = process.env.ZOHO_client_secret;

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

export const zohoCreate = async (module: string, data: any) => {
  const token = await generateZohoAceessToken();

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
  const token = await generateZohoAceessToken();

  const response = await fetch(url_apis + "/" + module + "/" + id, {
    headers: {
      Authorization: "Zoho-oauthtoken " + token,
    },
  });

  const r = await response.json();

  return r;
};
