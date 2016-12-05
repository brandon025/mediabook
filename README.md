This website is built with MEAN stack.
Mongodb, Expressjs, Angularjs, and Nodejs.

<b> About the Application </b>

This application includes a page where you can add as many videos or images
in a list and view them and the pages after are some random for 
fun css and javascript graphic tests where you can interact with them.
There is audio running in the background on two of them.

<b> Links </b>

You can run this application by going to this Heroku link:
https://afternoon-caverns-60170.herokuapp.com/

Github Link: 
https://github.com/brandon025/mediabook <br>
NOTE: Github does not show individual contributions! We worked on local machine and tested on our own github to avoid errors!

<b> How to run application</b>

If you want to run this app locally, make sure to have mongodb running
and run it using node.

How to run app locally on a MAC: 
1) Edit index.js and comment out " mongoose.connect(process.env.MONGODB_URI); " without quotes.<br>
2) Then, uncomment " mongoose.connect("mongodb://localhost/meanapp"); ". This will allow you to run your database locally.<br>
3) If you haven't had mongoDB installed yet, follow these instructions https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/. If you have mongodb  on a mac or linux, use "sudo mangod" to start mongodb.<br>
4) Run node index.js<br>
5) Navigate to http://localhost:3000<br>

<b>Dependencies</b>

All CSS and Javascript is pure. 
Yeoman was used to make most of the template files, so that there
wasn't too much focus on adding controllers and html pages.

Other dependencies including body-parser, clipboard, express, method-override, mongoose, node-restful, and resourcejs.

<b>Credits</b>
-Brandon and Cecilia worked on making the MEAN STACK application run on Heroku. <br>
-Brandon developed "Home" and "Images" page. Also added "COPY" to the videos page. Also, combined individual work into one. <br>
-Cecilia developed "Videos" and Christmas graphics/audios.<br>
-Sassan worked on the "About US" page and attempted to get it working on AWS.<br>



