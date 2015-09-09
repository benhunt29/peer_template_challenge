Peer Challenge - Templates

Welcome to templates! In this challenge you will be creating a meme server that renders HTML using Jade templates. 

This time you can use Webstorm to auto generate your project for you. You do not need to use express-generator :-)

IMPORTANT: Select Jade as the rendering engine.

Use pair programming to complete the assignment. At each “section” below, switch who is driving and who is observing.

Section 1
You and your partner need to select a meme (safe for work please) and pick some images. If you need some ideas, 
check out http://knowyourmeme.com/memes/popular 

Create a json file that will act as a model to store images for your memes. Select 5 images for your memes and 
store them in /public/images.

Create a page named “memes.jade” that will display your meme images. Create a route that renders the page along 
with the images.

Note: You can’t use “partials” like with HBS. If you want to move any parts of the html into a new Jade file, 
use the “includes” keyword to render it.

Section 2
Create a new data model that will associate messages (i.e. sentences related to the image) to each image. 

Modify the template to display the correct message with each image.

Section 3
Create a new route for posting messages. It should take the image ID, along with a message. 
Use the fs library to write these to the messages.json file. Test this using Postman.

Section 4
Create a form on the page, underneath the image, that will allow users to add a message. 
You should use Ajax to post the form.

Section 5
Implement handlebars templating for client-side display of messages. Hint: You’ll need to include the 
handlebars JavaScript library in your Jade layout, and to get the new data using jQuery. 

Bonus

Experiment with CSS or Bootstrap, etc. to get the messages to appear on top of the meme image, and flip 
through them using left and right buttons.

