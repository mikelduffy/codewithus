# CodeWithUs #
A real-time collaborative code editing environment.

## Summary ##
This project was created for my Hack Reactor MVP.

## Features ##
### MVP ###
- Multiple users can edit the same file
- Syntax highlighting

### If Time Allows ###
- Multiple files/folders
- Multiple users can work on separate files
- Display cursors of users with their name

### Nice to have, but probably not ###
- Upload your files
- Code runner
- Light/Dark theme
- Logging user edits

## Technologies ##
### Front-end ###
- [Feathers.js](http://feathersjs.com/)
- [Socket.io](http://socket.io/)
- [React](https://facebook.github.io/react/)
- [React-Materialize](https://github.com/react-materialize/react-materialize)
- [CodeMirror](https://github.com/codemirror/codemirror)
- [React-CodeMirror](https://github.com/JedWatson/react-codemirror)

### Back-end ###
- [Node.js](https://nodejs.org/en/)
- [Feathers.js](http://feathersjs.com/)
- [mongoDB](https://www.mongodb.com/)
- [mongoose](http://mongoosejs.com/)

## Getting Started ##
Install MongoDB globally with ``brew install mongo`` and run it with ``mongod --dbpath ./data --syslog --fork``.
Clone the app with ``git clone https://github.com/mikelduffy/hrsf50-mvp.git`` then run the application with ``npm install && npm start`` and enjoy!
