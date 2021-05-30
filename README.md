# theraplanner

## About

TheraPlanner is an all-in-one workspace for mental health professionals. TheraPlanner’s primary feature is providing a story of the client through simple and powerful visualizations. TheraPlanner can also tackle note taking, session scheduling and client management. Through these tools presented in a unified manner the counsellor can recollect notes from previous sessions, identify trends and plan for upcoming sessions better.

## Setup

1. Clone the front-end git repo `https://github.com/deeox/theraplanner.git` and run the commands:

   `$ npm install`

   `$ Node app.js`
   
2. Clone the back-end repo `https://github.com/aneeshgarg1998/Therapy-Dashboard.git`
3. Start the MySQL docker container 
    Go to `docker_local` directory and run the command 
    `docker-compose -f docker-compose.yml up -d`

    Confirm that docket image `td_mysql` is up by using the command `docker ps -a`

4. Currently, migration is not supported for the application. The queries in 

   `/Therapy-Dashboard/src/main/resources/migration/v001__init.sql` file will have to be run manually on the mysql server manually.

   `$ docker exec -it td_mysql bash`
   `$ mysql -u root -p`
   password `root`

   Use the db `services` and run the queries in above mentioned file

5. Open the project in an ide an load all the maven dependencies

6. Run the server with following configuration

![Configuration](Configuration.png)
