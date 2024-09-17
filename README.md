Project Overview
This project is designed to manage and interact with a MongoDB database named MyData, which contains three collections: User, Book, and Event. Each collection has its own schema, routes, and associated functionality for data management.

Database Structure
Collections:
User: Stores user information.
Book: Contains details about books.
Event: Records event information.
Implementation
Schemas: Each collection (User, Book, Event) has its schema defined using Mongoose, ensuring data consistency and validation.
Routes: Custom routes have been created to handle CRUD operations (Create, Read, Update, Delete) for each collection.
Indexing: Sensible indexes have been implemented to optimize query performance and data retrieval.
Data Operations
To interact with the API and manage data, use the following tools and methods:

Retrieve Data: Fetch data from the collections using GET requests.
Update Data: Modify existing records with PATCH requests.
Delete Data: Remove records from the database with DELETE requests.
Tools Used
Postman: Employed for testing and interacting with the API endpoints. You can perform POST, PATCH, and DELETE operations using Postman to manage data in the MyData database.
Validation and Indexing
Data Validation: Validation rules are applied to the User and Book collections to ensure data integrity and correctness.
Indexes: Appropriate indexes have been created for frequently queried fields to enhance query performance.