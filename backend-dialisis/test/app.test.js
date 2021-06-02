const { setupStrapi } = require("./helpers/strapi");

jest.setTimeout(15000);

/** this code is called once before any test is called */
beforeAll(async (done) => {
  await setupStrapi(); // singleton so it can be called many times
  done();
});

describe("Strapi in general", () => {
  it("strapi is defined", async (done) => {
    expect(strapi).toBeDefined();
    done();
  });
});

require("./users")
require("./noticias")