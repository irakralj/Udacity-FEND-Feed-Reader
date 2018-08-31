
$(function() {
    // test suite just contains a related set of tests
    describe('RSS Feeds', function() {
        // Tests to make sure that the allFeeds variable has been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test that loops through each feed and checks that it has a URL defined and that the URL is not empty
        it ('URL defined and not empty', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
        });

        // Test that loops through each feed and checks it has a name defined and that the name is not empty
        it ('name defined and not empty', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });
    });

    // Test suite named "The menu"
    describe('The menu', function() {

    var body = document.body;
    var menuIcon = document.querySelector(".menu-icon-link");
        // Test that ensures the menu element is hidden by default
        it("body has 'menu-hidden' initially", function() {
          expect(body.className).toContain("menu-hidden");
        });

         // Test that ensures the menu changes visibility when the menu icon is clicked
         it("body toggles the class 'menu-hidden' on clicking menu icon", function() {
           menuIcon.click();
           expect(body.className).not.toContain("menu-hidden");

           menuIcon.click();
            expect(body.className).toContain("menu-hidden");
          });
        });
    // Test suite named "Initial Entries"
    describe('Initial Entries', function() {

        /* Test that ensures that minimum one .entry element exist withing
        .feed container when the loadFeed function is called */
         beforeEach(function(done) {
           loadFeed(0, done);
         });
         it ('there is at least one entry element within feed container', function(done) {
           expect($('.feed .entry').length).toBeGreaterThan(0);
         });

    // Test suite named "New Feed Selection"
    describe('New Feed Selection', function() {
      var originalFeed;
        // Inital load setup
         beforeEach(function (done) {
           loadFeed(0, function() {
             originalFeed = $('.feed').html();

             loadFeed(1, function() {
               done();
            });
           });
         });
         // Test that ensures that the content changes when new feed is loaded
         it ('loades new feed', function(done) {
           var newFeed = $('.feed').html();
           expect($('.feed').html()).not.toBe(originalFeed);
           done();
         });
       });
}());
