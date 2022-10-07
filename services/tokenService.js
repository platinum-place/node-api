export default async function handler() {
  const response = await fetch(
    "https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.f9f5b015bf885e6b3f4b6fab8290e7ae.5d7e5607032ed544e6491b557e191d12&client_id=1000.7FJQ4A2KDH9S2IJWDYL13HATQFMA2H&client_secret=c3f1d0589803f294a7c5b27e3968ae1658927da9d7&grant_type=refresh_token",
    {
      method: "POST",
    }
  );
  const r = await response.json();
  return r.access_token;
}
