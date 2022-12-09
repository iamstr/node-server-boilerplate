# This is a node server boilerplate for production

This is a refactored a Node.js server with a  number of routes is to organize the routes into separate files and we are using 
the ```express.Router``` class to create route handlers for each file. This allows you to organize your code and make it more modular and maintainable.
The other feature of this boiler plate is :
* It also handles exceptions and errors gracefully by using try-catch blocks and the ```app.use()``` method to define error-handling middleware. 
This will prevent unhandled exceptions from crashing your server and ensure that any errors are logged and dealt with properly.
* Lastly it uses a  Winston library as the logging library, to log events and errors in your server.
This will provide you with valuable information about what is happening in your server and help you identify and fix problems.

