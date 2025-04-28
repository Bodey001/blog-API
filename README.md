# My Awesome Blog API
[![License]]

## Description

This is a backend API built with Node.js to manage your amazing blog! It provides endpoints for managing your articles.

## Table of Contents

-   [Descritption](#description)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Configuration](#configuration)
    -   [Runnung the API](#running-the-api)
-   [API Endpoints](#api-endpoints)
    -   [/articles](#articles)
        -   [`GET /articles`](#get-articles)
        -   [`POST /articles`](#post-articles)
        -   [`GET /articles/:id`](#get-articlesid)
        -   [`PATCH /articles/:id`](#patch-articlesid)
        -   [`DELETE /articles/:id`](#delete-articlesid)
-   [Error Handling](#error-handling)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)


##  Getting Started

Follow these steps to get the Blog API running on your local machine.

### Prerequisites

Make sure your have the following installed:

-   [Node.js](https://nodejs.org/) (v16 or higher is recommended)
-   [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))
-   [MySQL](https://www.mysql.com/)

### Installation

Clone the respository:

``` bash
git clone [https://github.com/Bodey001/blog-API]
cd [blog-API] 
```

To install dependencies using npm:
`npm install`

### Configuration

-   Create a .env file in the root of the project
-   Update the variables in the .env file with your specific configuration, such as: 
PORT=your-server-port

DB_NAME=your-database-name
DB_USERNAME=your-database-username
DB_PASSWORD=your-database-password
DB_HOST=your-database-host

### Running the API
-   Start the MySQL service
-   Run the API using npm:
npm run dev

-    The API will be accessible at http://localhost:[PORT]

## API Endpoints
- Swagger Documentation available at http://localhost:[3000]/api-docs

##  Error Handling
The API follows standard HTTP status codes to indicate the outcome of requests

##  Contributions
Contributions are welcome! Please follow these guidelines:

-   Fork the repository.
-   Create a new branch for your feature or bug fix (git checkout -b feature/your-feature-name).   
-   Make your changes and commit them (git commit -am 'Add feature for post tagging').
-   Push to the branch (git push origin feature/your-feature-name).
-   Create a new Pull Request.

Please ensure your code adheres to the existing style and includes appropriate tests.
##  License
This project is licensed under the MIT License - see the https://www.google.com/search?q=LICENSE file for details.

##  Contact 
If you have any questions or suggestions, feel free to contact us at [[oyewunmi1010@gmail.com]] or through the issue tracker.