## Website Performance Optimization portfolio project

This web project was based Cameron Pittman's portfolio website. The goal of this project was to optimize 
the site with a number of optimization- and perfomance-related issues so that it achieved a target PageSpeed
score and runs at 60 frames per second.

In order to set up and check the project locally:

1) Click on the Clone or download button on the top-right of the page.

2) Click Download Zip

2) Unzip the file

3) Open index.html in Google Chrome

4) The page will load up. Head over to Cam's Pizzeria. Right-click and hit inspect. DevTools should open up.

5) Click the Timeline tab and check off the JS profile under Capture.

6) Click record and scroll up and down the page and change the pizza size.

7) Click record again to stop recording and view the results.

Here were the optimizations that were applied:

* Pizzeria.jpg had to be duplicated (PizzeriaSmall.jpg was used in index.html), resized and compressed.

* All other images were also compressed.

* External Javascript source calls (analytics.js and perfmatters.js) have been assigned the async attribute.

* External CSS source calls have been relocated above the </body> tag.

* The function changePizzaSizes contained repititions of *document.querySelectorAll(".randomPizzaContainer")*. They have been saved in a variable called randomPizzas and the for loop had to be restructured.

* The function updatePositions had to be restructured for the sliding background pizzas.

* The variable *items* was predefined in the addEventListener 'DOMContentLoaded'.

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
