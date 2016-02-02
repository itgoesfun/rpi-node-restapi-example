FROM hypriot/rpi-node
MAINTAINER Kasper Nissen <kaspernissen@gmail.com>

# Adding source files into container
ADD src/ /src

# Define working directory
WORKDIR /src

# Install app dependencies
RUN npm install

# Open Port 8080
EXPOSE 8080

# Run Node.js
CMD ["node", "server.js"]
