require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./views/helpers/SiteMapRoutes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSiteMap() {
  return new Sitemap(router)
    .build("https://www.glratings.com")
    .save("./public/sitemap.xml");
}
generateSiteMap();
