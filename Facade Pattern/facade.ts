/* It is used to provide a simple interface to a complex system */

// We have a Notification server and wants push notification to users.For this we'll have a simple notification service to handle all the heavy server related works

// Complex operations
class Connection {
  disconnect() {
    console.log("Session Ended");
  }
}
class AuthToken {}

// Notification Message
class Message {
  private message;
  constructor(message: string) {
    this.message = message;
  }
  getMessage() {
    return this.message;
  }
}

// Notification server -> handle all complex logic
class NotificationServer {
  connect(port: number): Connection {
    console.log(`Connected to server at port ${port}`);
    return new Connection();
  }
  authentication(appId: string, key: string): AuthToken {
    console.log("user authorized");
    return new AuthToken();
  }
  send(authToken: AuthToken, message: Message, target: string) {
    console.log("Sending message...");
    console.log(`Message: ${message.getMessage()}`);
  }
}

// All the server related works like establish connection, authorize a user will be handled here. This just just gonna provide a simple function for the main function to send message
class NotificationService {
  send(message: string, target: string) {
    const server = new NotificationServer();
    const connection = server.connect(2140);
    const token = server.authentication("1828192921", "12182");
    server.send(token, new Message(message), target);
    connection.disconnect();
  }
}

// main
const service = new NotificationService();
service.send("Hello World", "target");
