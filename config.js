const config = {
  ownerID: "439683620064722945", //kendi IDınızı yazınız
  admins: ["789539683482861583"],
  support: ["789539683482861583"],
  token: "ODEzNzYwOTMzMTM4NTMwMzU1.YDT_7Q.EtdxBXgIIUvOVK7o4QdPjxdHSfU", //botunuzun tokenini yazınız
  dashboard: {
    oauthSecret: "DhQztdFkldbXdyyMgV2ojXpr6Hw-TjpU", //botunuzun secretini yazınız
    callbackURL: `https://full-nimble-printer.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
    sessionSecret: "super-secret-session-thing", //kalsın
    domain: "https://full-nimble-printer.glitch.me/", //site URLnizi yazınız!
    port: process.env.PORT
  }
};

module.exports = config;
