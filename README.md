# Prison Break API

This project was inspired by my fondness for the Prison Break Tv show...

![Prison Break](https://static3.srcdn.com/wordpress/wp-content/uploads/2019/12/GP-Prison-Break-3-Cropped.jpg)



This is a RESTful placeholder API based on the Prison Break series solely for the purpose of API integration testing.

![Add a character.](https://github.com/EmediongFrancis/Prison-Break-API/blob/main/frontend/gifs/POST.gif)

To see the full project, visit [this link.](https://prisonbreakapi.me)

To read about how I managed to build the project, visit [this link.]()
This project was built by Emediong &lsquo;Bendito&rsquo; Francis, check him out on [LinkedIn.]()


## Installation 
Installation is not exactly necessary for this REST API as it can be tested directly via instructions in the documentation online. But if you still want to test local installation, I will walk you through.

### Prerequisites.
* MySQL installed and configured with `root` as username and `prisonbreak` as password.
* A CLI (Command Line Interface).
* Knowledge of Linux terminal navigation.
* Node installed.

### Steps:
* Clone the repository.
* Switch to its directory.
* Install necessary dependencies: `npm install`.
* Start your MySQL server: `sudo service mysql start`.
* Populate database with data: `mysql -u root -p < backend/PrisonBreakAPI.sql`.
* Provide password (`prisonbreak`) when prompted for a password.
* Start PrisonBreakServer: `node PrisonBreakServer.js`.


Your terminal should look like this: 
```                                                                                         
┌──(emediongfrancis㉿benditos-pc)-[~/Prison-Break-API]
└─$ node PrisonBreakServer.js                   
Prison Break API 🚨 is listening on port 3000

```
* Head to your browser and type in `localhost:3000`.

You should be greeted with the Welcome Page:

![Landing Page](https://github.com/EmediongFrancis/Prison-Break-API/blob/main/frontend/images/LandingPage.png)