# CodeWithUs #
A real-time collaborative code editing environment. This project was created for my Hack Reactor 2-day MVP sprint.

## MVP Features ##
- Multiple users can edit the same file
- Syntax highlighting
- Multiple users can work on separate files

## Tech Stack ##
### Front-end ###
- [Feathers.js](http://feathersjs.com/)
- [Socket.io](http://socket.io/)
- [React](https://facebook.github.io/react/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [CodeMirror](https://github.com/codemirror/codemirror)
- [React-CodeMirror](https://github.com/JedWatson/react-codemirror)

### Back-end ###
- [Node.js](https://nodejs.org/en/)
- [Feathers.js](http://feathersjs.com/)
- [mongoDB](https://www.mongodb.com/)
- [mongoose](http://mongoosejs.com/)

## Getting Started ##
Clone the app with ``git clone https://github.com/mikelduffy/codewithus.git``. Install MongoDB globally on a mac with ``brew install mongo`` and run it in the background with ``mongod --dbpath ./data --syslog --fork``. Then run ``npm install && npm start`` and enjoy collaborative code editing!
