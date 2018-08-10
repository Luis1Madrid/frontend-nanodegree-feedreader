/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //test to loop through each feed in allFeeds object to make sure URL
        // is define and not empty.
        it("URLs are define and not empty", function() {
            let i;
            for (i = 0; i < allFeeds.length; i++){
              let placeType = allFeeds[i].url;
              expect(placeType).toBeDefined();
              expect(typeof placeType).toBe("string");
            }
        });
        // Test to loop through each feed in allFeeds object to make sure name
        // is define and not empty.
        it("names are define and not empty", function() {
          let i;
          for (i = 0; i < allFeeds.length; i++){
            let nameType = allFeeds[i].name;
            expect(nameType).toBeDefined();
            expect(typeof nameType).toBe("string");
          }
        });

    });

    describe("The Menu", function() {

      //Test if menu is hidden by default by looking into its class.
      it("HMTL Menu is hidden by default", function() {
        expect(document.querySelector("body").className).toBe("menu-hidden");

      });
      //Test if Menu button works to hide/unhide, by searching on the DOM if class
      //is toggle on and off.
      it("Toggle menu from Hidden to unhidden", function() {
        let classOnOff = document.querySelector("a");
        let classHideShow = document.querySelector("body").className;

        classOnOff.addEventListener("click", function(){});
        classOnOff.click();
        expect(document.querySelector("body").className).not.toBe("menu-hidden");

        classOnOff.click();
        expect(document.querySelector("body").className).toBe("menu-hidden");

      });
    });

    describe("Initial Entries", function() {

      //BeforeEach is used to asynchonously functions to make sure loadFeed
      // is done loading.
      beforeEach(function(cb) {
        loadFeed(0, function(){
          cb();
        })
      });

      //Test makes sure there is at least 1 entry on the .feed div DOM.
      it("At least 1 entry within .feed container", function() {

        let divSelect = document.querySelectorAll("div")[2];
        let aLength = divSelect.querySelectorAll("a").length;

        expect(aLength).not.toBe(0);

      });
    });

    describe("New Feed Selection", function() {
      let firstFeed;
      let secondFeed;

      //Load first and second .feed articles and makes sure it finish loading.
      beforeEach(function(cb) {

        loadFeed(0, function(){
          firstFeed = $(".feed").find(allFeeds.url);
          cb();
        });

        loadFeed(1, function(){
          secondFeed = $(".feed").find(allFeeds.url);
          cb();
        });
      });

      // test if first and second .feed articles are distinct from one another.
      it("New feeds are distinct from one another", function() {
        expect(firstFeed).not.toBe(secondFeed);

      });
    });

}());
