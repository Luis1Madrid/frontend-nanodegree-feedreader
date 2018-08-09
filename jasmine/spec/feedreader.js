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

      it("HMTL Menu is hidden by default", function() {
        expect(document.querySelector("body").className).toBe("menu-hidden");

      });

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
      beforeEach(function(cb) {
        loadFeed(0, function(){
          cb();
        })
      });

      it("At least 1 entry within .feed container", function() {

        let divSelect = document.querySelectorAll("div")[2];
        let aLength = divSelect.querySelectorAll("a").length;

        expect(aLength).not.toBe(0);

      });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
