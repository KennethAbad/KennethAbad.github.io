/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests are placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is a new test suite called "RSS Feeds" */
    describe('RSS Feeds', function() {
        /* This test make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('contain URLs that are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('contain names that are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* This is a new test suite named "The menu" */
    describe('The menu', function() {
            
        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. It
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when icon is clicked', function() {
            $('a.menu-icon-link').trigger('click');
            expect($(document.body).hasClass('menu-hidden')).not.toBe(true);
            $('a.menu-icon-link').trigger('click');
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This is a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        it('contains at least one entry in the feed container', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });
    /* This is a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
        var previousEntry, currentEntry;
        
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(1, function() {
                previousEntry = $('.feed').find('h2').text();
                loadFeed(0, function() {
                    currentEntry = $('.feed').find('h2').text();
                    done();
                });
            });
            
        });
        it('loads new feeds/content', function(done) {         
            console.log(previousEntry); // Check to see if the contents are actualy 
            console.log(currentEntry);  // string of feed's content, but not undefined, empty string, etc.
            expect(currentEntry).not.toEqual(previousEntry);
            done();
        });
    });
}());
