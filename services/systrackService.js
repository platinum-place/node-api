export default async function handler(metro) {
  const response = await fetch(
    "http://190.166.123.174/comGpsGate/api/v.1/applications/261/users?FromIndex=0&PageSize=1000",
    {
      headers: {
        Accept: "application/json",
        "App-id": "261",
        User: "apinobe",
        Pass: "123456",
        Authorization:
          "EDn8jRS0NPf%2bXFuHm3nGKpxsp%2btVjlr%2bXViZX1JS5%2fM7s8HKUR1U9CfrD02BO7De",
      },
    }
  );

  const r = await response.json();

  var data = [];

  r.forEach((element) => {
    if (metro.includes(element.name)) {
      data.push({
        name: element.name,
        latitude: element.trackPoint.position.latitude,
        longitude: element.trackPoint.position.longitude,
      });
    }
  });

  return data;
}
