# MERN_PROD_INV
Product Inventory Application

Steps to start the application:
1. cd server —> Modify server.js to include the mongoDB details 
2. npm install
3. npm start 
4. cd client
5. npm install
6. npm start   --> application launches on - http://localhost:3001


Now lets enable APM and open telemetry  
1. Goto server directory   
    npm install opentelemetry 
    npm install @opentelemetry/sdk-node 
    npm install @opentelemetry/auto-instrumentations-node  
2. Copy tracing.js to the server directory and add APM endpoint and data key 
3. Modify package.json to change start to include tracing.js as well —> node -r ./tracing.js server.js
4. Copy app-rum.js to client/public directory with APM endpoint and data key 
5. Edit index.html to include apm-rum.js file 
<script src="./apm-rum.js"></script> 
<script async crossorigin="anonymous" src="https://aaaadcdobxuhuaaaaaaaaacc74.apm-agt.us-ashburn-1.oci.oraclecloud.com/static/jslib/apmrum.min.js"></script>   

6. cd server 
7. npm start
8. cd client
9. npm start 

Both server and client applications once started will send application traces to OCI APM

<img width="710" alt="image" src="https://github.com/Anand-GitH/MERN_PROD_INV/assets/60418080/8c2430a8-532a-4a39-97c9-ef05f5e0e563">
<img width="1399" alt="image" src="https://github.com/Anand-GitH/MERN_PROD_INV/assets/60418080/e47f3fd0-8ec2-4743-b153-f26431d43c8d">



 
