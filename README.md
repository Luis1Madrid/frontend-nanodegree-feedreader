# Starter
The webpage is a Udacity RSS feeder to show case multiple articles within the coding community. This .html is given to students to learn how to test using Jasmine.

# Objective
The objective of this test (using Jasmine) is to make sure the RSS feed correctly loads and multiple functionality within the webpage works as intended.

There where four overall test created using Jasmine to test the webpage.

## Test #1 "RSS Feeds"
Within this test there were 3 main objectives.
  1. Make sure allFeed array (full of objects) is define and not empty.
  2. URLs within those object on the allFeed array are declared and not empty.
  3. Name within those object on the allFeed array are declared and not empty.
All the problems above were tested by .toBe and .toBeDefine Jasmine property.

## Test #2 "The Menu"
Within this test there were 2 main objectives.
  1. The menu within the index.html page is hidden by default. This is accomplished by
    checking if the CSS class is present from the start of the load page. The test was solved similarly to the first test by making sure the class existed within the index.html form the start.
  2. The menu button is tested to make sure it works accordingly. A test is writen to click once and the twice and make sure the class in the DOM is toggle between on/off.

## Test #3 "Initial Entries"
This test used an asynchronous function to intially load loadFeed function before starting the tests.
Within this test there was only one main objective.
  1. Ensure a new feed is loaded within the loadFeed. Therefore the test was written to make sure the DOM had more than zero "a" elements within the section of the code.

## Test #4 "New Feed Section"
This test used asynchronous handling to make sure the loadFeed finishes loading the first and second feeds. There was only a single objective within this test.
  1. The objective of this test was to compare the 1 and 2 feeds to make sure they were distinct from one another.

-Luis Madrid
