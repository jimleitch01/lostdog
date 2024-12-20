# lostdog
help citizens find their pets

## Setup and Running the Application

### Prerequisites
- Docker
- Docker Compose

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/jimleitch01/lostdog.git
   cd lostdog
   ```

2. Build and start the services using Docker Compose:
   ```sh
   docker-compose up --build
   ```

3. The web application will be available at `http://localhost:3000`.

### Database Configuration
The PostgreSQL database is configured with the following environment variables:
- `POSTGRES_DB`: Name of the database
- `POSTGRES_USER`: Database user
- `POSTGRES_PASSWORD`: Database password

These variables can be set in the `docker-compose.yml` file.

### Photo Storage
Uploaded photos are stored on the physical disk in the `uploads` directory.

## Web Page for User Registration and Pet Registration

The web application provides a web page for user registration and pet registration. The page includes forms for entering owner details and uploading photos of lost pets.

### User Registration
Users can register by providing their name, email, and password.

### Pet Registration
Registered users can add details about their lost pets, including the pet's name, description, and a photo.
