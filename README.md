This website is built with MEAN stack.
Mongodb, Expressjs, Angularjs, and Nodejs.
Brandon Trieu, Cecilia Tran, Sassan Bahrahmirad

<b> About the Application </b>
This application includes a page where you can add as many videos or images
in a list and view them and the pages after are some random for 
fun css and javascript graphic tests where you can interact with them.
There is audio running in the background on two of them.

<b> Links </b>
You can run this application by going to this Heroku link:
https://afternoon-caverns-60170.herokuapp.com/

<b> How to run application</b>
If you want to run this app locally, make sure to have mongodb running
and use the command node index.js.

How to run app locally on a MAC: <br>
1) Edit index.js and comment out " mongoose.connect(process.env.MONGODB_URI); " without quotes.<br>
2) Then, uncomment " mongoose.connect("mongodb://localhost/meanapp"); ". This will allow you to run your database locally.<br>
3) If you haven't had mongoDB installed yet, follow these instructions https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/. If you have mongodb  on a mac or linux, use "sudo mangod" to start mongodb.<br>
4) Run node index.js<br>
5) Navigate to http://localhost:3000<br>
Run on AWS<br>
Navigate to your EC2 instance link.

<b>Dependencies</b> 
Yeoman was used to install most of the template files.
Dependencies include: body-parser, clipboard, express, method-override, mongoose, node-restful, and resourcejs.



