module.exports = {
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans|Permanent+Marker&display=swap"
      }
    ]
  },
  plugins: ["./plugins/in-view.client.js"]
};
