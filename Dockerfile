# Use a base image for the web application
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the application code into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the necessary port for the web application
EXPOSE 3000

# Define the command to start the web application
CMD ["npm", "start"]
