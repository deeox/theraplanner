# theraplanner

## About

### All-in-one workspace for mental health professionals

### Features: 
TheraPlanner’s primary feature is providing a story of the client through simple and powerful visualizations. TheraPlanner can also tackle note taking, session scheduling and client management. Through these tools presented in a unified manner the counsellor can recollect notes from previous sessions, identify trends and plan for upcoming sessions better.

### Inspiration: 
From personal experience we identified a pattern among therapy sessions that, due to a large number of clientele, the counsellor finds it laborious to keep a track of mental health records of their clients leading to repetition of the same themes in multiple sessions. After speaking to the in-house counsellor at MPower in our college, we identified that the issue arises from the counsellor finding it strenuous to revise through notes from all the previous sessions. As the session notes are exhaustive and bulky, we decided to organize the notes in an intuitive format.

### Future Scope: 
We are planning to introduce habit tracking to keep accountability and exporting entire session notes in the case of a change in counsellor.

### Team Name: 
RajGunda

### Team Members: 
- Deepak Divya Tejaswi 
- Aneesh Garg 
- Shagun Sood 
- Praveen Karra

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
