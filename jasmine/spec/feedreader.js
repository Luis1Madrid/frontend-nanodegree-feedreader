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

        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      it("Toggle menu from Hidden to unhidden", function() {

      });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

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
