var createCase = async (data, token) => {
  const response = await fetch("https://zohoapis.com/crm/v2/Cases", {
    method: "POST",
    headers: {
      Authorization: "Zoho-oauthtoken " + token,
    },
    body: JSON.stringify(data),
  });
  const r = await response.json();
  return r;
};

export { createCase };
