
# Pokemon Portfolio

This portfolio will clearly demonstrate my capabilities as a Full-Stack developer, creating a user experience that is both interactive and informative.


The previous version of this project is currently deployed [here](https://favilas-portfolio.com).

<img width="1512" alt="Screen Shot 2022-10-21 at 4 55 51 AM" src="https://user-images.githubusercontent.com/105952966/197190232-f58f3ae3-f146-4570-a5d2-74acedd1d100.png">

## The PokeAPI

### This project calls the PokeAPI with the following two endpoint methods.

You can find all documentation pertaining to the PokeAPI [here](https://pokeapi.co/docs/v2).

#### Get a Pokemon by {id}

```http
  GET https://pokeapi.co/api/v2/pokemon/{id}
```

#### Get a Pokemon by {name}

```http
  GET https://pokeapi.co/api/v2/pokemon/{name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of pokemon to fetch |
| `name`      | `string` | **Required**. name of pokemon to fetch |

#### This returns a JSON object holding all information pertaining to the selected Pokemon.



## Environment Variables

Please ensure to hide your Django secret key inside your Environment as 'djangoKey'.

You can find this key on line 25 inside: 

` ./portfolio_back/portfolio_back/settings.py `

`SECRET_KEY`


## Tech Stack

**Client:** React, React-BootStrap, CSS

**Server:** Django, PostgreSQL

**Libraries:** 
- [djangorestframeworks](https://www.django-rest-framework.org/): manages different request methods.
- [Shake](https://www.npmjs.com/package/react-native-shake): Allows react objects to 'shake'.
- [EmailJS](https://www.emailjs.com/): Give the user the ability to send me an email.
- [psycopg2](https://www.psycopg.org/docs/install.html): used by Django to communicate with database.


## Run Locally

- Clone the project

```bash
  git clone https://github.com/fravila08/PokemonPortfolio.git
```

- Go to the project directory, then create and activate a virtual environment.

```bash
  cd PokemonPortfolio
  python3 -m venv .venv
  source .venv/bin/activate
```

- Install requirements.txt

```bash
  pip install -r requirements.txt
```
- Create a .env file and place your Django Secret key inside under the variable {djangoKey}.
```bash
  touch .env 
```

- The following commands will be used to run the React portion of the project. 

```bash
  cd portfolio_front
  npm install
  npm run build
```
- Then create your database using PostgreSQL. We will use brew to install postgres, then we will enter postgres and create the portfolio database.
```bash
    brew doctor
    brew update
    brew install postgres
    psql postgres
    CREATE DATABASE portfolio;
    \q
```
- Now that we have the build and our database, we can move to Django and make migrations.

```bash
  cd ..
  cd portfolio_back
  python3 manage.py makemigrations
  python3 manage.py migrate
```

- Finally, we are ready to start the server.

```bash
  python3 manage.py runserver
```
- Now open your preferred browser and go to [localhost:8000](localhost:8000) to view this application!

#### Useful Resources for running Locally
[Django VS code tutorial](https://code.visualstudio.com/docs/python/tutorial-django) goes over creating and activating an environment

[This article](https://learnpython.com/blog/python-requirements-file/) goes over creating and installing requirements.txt

[This repository](https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3) breaks down installing PostgreSQL through brew commands.

[This article](https://scrimba.com/articles/create-react-app-with-vite/) covers creating and running a React application through Vite.


## Features

- User Authentication with sign up/in/out functionality.
- User can 'capture' and 'release' pokemon.
- User can collect gym badges by exploring the application.
- User can send me an email via the contact from in the contact page.

## Things I would do differently:
- A heavy amount of Modals were utilized throughout this project and each modal consists of its own component. Although it works well, I would like to figure out a way to use one modal whose content would change depending on the action causing the modal to be revealed. 

- Restarting the application views to add functionality, depending on the type of request rather than making an independent view for each individual action. Having a view for each request and desired information works well and makes the views and functionality of the application easy to follow, but hurts the application’s overall efficiency.

## Future Improvements:
- Implement more testing features in both React and Django. Currently, I am learning to utilize Jest with React to create test and will soon add more efficient test to my components.
- Stop the re-rendering of application! Currently, certain axios calls make the page re-render to allow new user data to appear. This could be fixed by using some JavaScript functionality to alter specific elements rather than rendering the entire page all over again.
- Implement an API to verify user emails and a password verifying functionality when signing up for an account.
- I would like to change my Back-End framework to run on Node.js and change my database to MongoDB, to determine which type of database would work best with this application.


## Got any advice?

I'm always looking to learn and grow, please email me at fr4v1l4@gmail.com
 with a quick introduction and your advice. 

I'm looking forward to hearing from you!


## Related Projects

Here are some related projects that have been deployed through AWS ec2 instances, Route53, Gunicorn, Nginx,
and Certbot

- [The Happy Pig](https://fathehappypig.com)
- [CP Fitness Store](https://cpfitstore.com)
- [Task Manager](https://fataskmanager.com)


[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/francisco-r-avila)

