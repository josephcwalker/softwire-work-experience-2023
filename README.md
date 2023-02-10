# Softwire Work Experience 2023

## Running Locally

To run the services locally, use the `docker-compose` files in the root of the repository.

Run the command `$ docker-compose up` in the terminal to start all 3 services (frontend, backend, database)

TIP: *Pressing CTRL+C in the terminal sends a signal to stop whatever application is currently running*

If you would like control of your terminal instead, run `$ docker-compose up -d` to run them in the background. Make sure to run `$ docker-compose down` when you want them to stop

You should now be able to access these services using a web browser. Just visit:

 - `localhost:8080` for the frontend
 - `localhost:3000` for the backend

You can also access the database using a database management program. I suggest `pgAdmin`.
Then logging in with the username: `postgres` and the password: `g1raffe`
