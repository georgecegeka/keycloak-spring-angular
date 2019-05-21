# Integrate Keycloak with a Spring Boot - Angular app

# Purpose
  Integrate Keycloak in an Angular-Spring application using a public keycloak client for angular and a bearer-only client for spring backend

# Run Keycloak:
  1. docker run -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=password -p 8380:8080 jboss/keycloak:4.8.3.Final
  2. Open http://localhost:8380 and use admin/password as credentials

# Backend:
  1. gradlew clean build
  2. Run main method from App class
# Frontend:
  1. npm install
  2. npm run start
  3. Open http://localhost:4200 in browser
  
# Usefull links:
  1. Keycloak documentation - https://www.keycloak.org/docs/4.8/
  2. Spring boot adapter - https://medium.com/@jinnerbichler/integrating-keycloak-4-with-spring-boot-2-microservices-6a6579f1d121, https://www.keycloak.org/docs/4.8/securing_apps/index.html#_spring_boot_adapter
  3. Angular adapter - https://www.npmjs.com/package/keycloak-angular
