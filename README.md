## API Documentation
**BASE URL** https://w-l-j.herokuapp.com
- Attach endpoints to the end of the base URL in order to make HTTP Requests.

### Table of Contents
Endpoints that do _**not**_ require authentication (Not Protected):

| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#register">POST Registration</a>  | /api/auth/register | <b>POST</b> request to register new user
|<a href="#login">POST Login</a>            | /api/auth/login|  <b>POST</b> request to login new user

Endpoints that **_DO_** require authentication (Protected):
<b>GET</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#users">GET Users</a>                    | /api/users |<b>GET</b> request to get all users
|<a href="#userID">GET User By ID</a>              | /api/users/:id | <b>GET</b> by user id gets user by id
|<a href="#all Workouts">GET All workouts</a>       | /api/workouts | <b>GET</b> request get all workouts
|<a href="#workoutID">GET Workout by ID</a>        | /api/workouts/:id | <b>GET</b> request to get all workouts by thier ID
|<a href="#exercises">GET exercises</a>            | /api/exercises | <b>GET</b> request to get all exercises
|<a href="#exerciseById">GET exercises by ID</a>    | /api/exercises/:id| <b>GET</b> request to get exercises by thier ID
|<a href="#get workouts_exercises">GET workouts_exercises</a>              | /api/w-e | <b>GET</b> request to get all workouts_exercises  

<b>POST</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#workouts">POST workout</a>                    | /api/workouts |<b>POST</b> request to add new workout
|<a href="#exerciese">POST exercise</a>              | /api/exercises | <b>POST</b> request to add new exercise
|<a href="#workouts_exercise">POST workouts_exercises</a>       | /api/w-e | <b>POST</b> request to add new Workouts_exercises

<b>PUT</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#edit a workout">PUT workout by ID</a>                    | /api/workouts/:id |<b>PUT</b> request to edit a workout
|<a href="#edit a exercise">PUT exercise by ID</a>                    | /api/exercise/:id |<b>PUT</b> request to edit a workout

<b>DEL</b> request endpoints:

| Requests         | Endpoints | Description
|----------------- | --------------------|---------------------|
|<a href="#delete user">DEL user by ID</a>                    | /api/users/:id |<b>POST</b> request to delete user by ID




<hr />

<div id="register"></div>

## [POST] Registration 

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/auth/register

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|username (required)           | string (4+ characters) |
|password (required)       | string (4+ characters)    |


_An example of how the body should appear:_

```js
{
	"username": "carly",
	"password": "carly"
}
```

### What will be returned:

_You will receive the user object an a JWT._

```js
{
  "id": 11,
  "username": "carly",
  "workouts": []
}
```

<hr />

<div id="login"></div>

## [POST] Log In

<a href="#top">Return to the top</a>

**URL:** https://w-l-j.herokuapp.com/api/auth/login

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)           | string (4+ characters) |
|password (required)       | string (8+ characters)    |

_An example of how the body should appear:_

```js
{
	"username": "carly",
	"password": "carly"
}
```

### What will be returned:

_You will receive the user_id, and a JWT. and a message saying welcome

```js
{
{
  "id": 10,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphZGUgU2F2YWdlIiwiaWF0IjoxNTc4NTEwMzEwLCJleHAiOjE1Nzg1OTY3MTB9.PubFmKU1nI3IbiYc5uMq7hwMtOQGztQ5roYzIOKlxoo",
  "message": "Welcome carly!"
}
```

<hr />

<div id="users"></div>

## [GET] Users

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/users

### What will be returned:
_An array of all users within the database._
```js
[
  {
    "id": 11,
    "username": "carly"
  },
  {
    "id": 4,
    "username": "elizabeth2"
  },
  {
    "id": 2,
    "username": "jade"
  },
  {
    "id": 10,
    "username": "jade Savage"
  },
  {
    "id": 3,
    "username": "lilly"
  },
  {
    "id": 1,
    "username": "maddy"
  },
  {
    "id": 7,
    "username": "savanna"
  },
  {
    "id": 8,
    "username": "savanna2"
  },
  {
    "id": 9,
    "username": "savanna23"
  }
]
```

<hr />


<div id="userID"></div>

## [GET] User by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/users/:id

**NOTE:** Be sure to include the `id` of an existing user on the end of the endpoint.

### What will be returned:
_An object of the user information._

```js
{
  "id": 2,
  "username": "jade",
  "workouts": [
    {
      "id": 4,
      "name": "workout name",
      "exercises": 0
    },
    {
      "id": 5,
      "name": "leg Workout",
      "exercises": 0
    },
    {
      "id": 6,
      "name": "arm Workout",
      "exercises": 1
    }
  ]
}
```

<hr />

<div id="All workouts"></div>


## [GET] All workouts

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/workouts

**NOTE:** returns all workouts in database for all users

### What will be returned:
_An object of the workouts information._

```js
[
  {
    "id": 1,
    "name": "workout name",
    "date": null,
    "user_id": 1
  },
  {
    "id": 2,
    "name": "leg Workout",
    "date": null,
    "user_id": 1
  },
  {
    "id": 3,
    "name": "arm Workout",
    "date": null,
    "user_id": 1
  },
  {
    "id": 4,
    "name": "workout name",
    "date": null,
    "user_id": 2
  },
  {
    "id": 5,
    "name": "leg Workout",
    "date": null,
    "user_id": 2
  },
  {
    "id": 6,
    "name": "arm Workout",
    "date": null,
    "user_id": 2
  },
]
```

<hr />

## [GET] Workout by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/workouts/:id

**NOTE:** returns all workouts in database by id

### What will be returned:
_An object of the workout by id._

```js
{
  "id": 11,
  "name": "brain Workout",
  "date": null,
  "user_id": 10
}
```

<hr />

<div id="AllExercises"></div>


## [GET] All Exercises

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/exercises

**NOTE:** returns all exercises in database

### What will be returned:
_An object of the exercise information._

```js
[
  {
    "id": 1,
    "name": "Squats",
    "region": "Quads"
  },
  {
    "id": 2,
    "name": "Curls",
    "region": "Biceps"
  },
  {
    "id": 3,
    "name": "Pushups",
    "region": "Chest"
  },
  {
    "id": 4,
    "name": "Lunges",
    "region": "Hamstrings"
  },
  {
    "id": 5,
    "name": "Pull Ups",
    "region": "Back"
  },
  {
    "id": 6,
    "name": "testExercises",
    "region": "brain"
  },
  {
    "id": 7,
    "name": "testExercises2",
    "region": "brain"
  }
]
```

<hr />

<div id="exerciseById"></div>

## [GET] All Exercises by id

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/exercises/:id

**NOTE:** returns exercises by exercise_id

### What will be returned:
_An object of the exercises by id._

```js
{
  "name": "Pushups",
  "region": "Chest"
}
```

<hr />

<div id="get workouts_exercises"></div>

## [GET] All workoutExercises

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/w-e

**NOTE:** returns all workoutExercises in database

### What will be returned:
_An object of the workoutsexercise information._

```js
[
  {
    "id": 1,
    "reps": 10,
    "sets": 10,
    "workout_id": 1,
    "exercise_id": 1
  },
  {
    "id": 2,
    "reps": 10,
    "sets": 10,
    "workout_id": 1,
    "exercise_id": 2
  },
  {
    "id": 3,
    "reps": 10,
    "sets": 10,
    "workout_id": 1,
    "exercise_id": 3
  },
  {
    "id": 4,
    "reps": 10,
    "sets": 10,
    "workout_id": 2,
    "exercise_id": 1
  },
  {
    "id": 5,
    "reps": 10,
    "sets": 10,
    "workout_id": 2,
    "exercise_id": 2
  },
  {
    "id": 6,
    "reps": 10,
    "sets": 10,
    "workout_id": 2,
    "exercise_id": 3
  },
 
]
```

<hr />

<hr />

<div id="workout"></div>

## [POST] post workout 

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/workouts

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)           | string |
|user_id (required)       | integer    |


_An example of how the body should appear:_

```js
  {
    "name": "testing workout",
    "user_id": 10
  }
```

### What will be returned:

workouts id will be returned 

```js
[
  16
]
```

<hr />

<div id="exercise"></div>

## [POST] exercise

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/exercises

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)           | string |
|region (required)       | string   |


_An example of how the body should appear:_

```js
  {
    "name": "Coding",
    "region": "the brain"
  }
```

### What will be returned:

exercise id will be returned

```js
[
  9
]
```

<hr />

<div id="workouts_exercise"></div>

## [POST] workouts_exercise

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/w-e

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|reps (required)            | integer   |
|sets(required)             | integer   |
|workouts_id(required)      | integer   |
|sets(required)             | integer   |

_An example of how the body should appear:_

```js

    "reps": 10,
    "sets": 10,
    "workout_id": 6,
    "exercise_id": 7
}

```

### What will be returned:

workouts_exercise id will be returned

```js
[
  11
]
```

<hr />


<div id="edit a workout"></div>

## [PUT] workouts by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/workouts/:id

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)            | string    |
|user_id (optional)         | integer   |

_An example of how the body should appear:

```js
{
  "name": "brainworkout",
	"user_id": 2
}
```

### What will be returned:

message saying the workout of the targeted id was changed, the workout_id and the changes made and by which user

```js
{
  "message": "workout of id: 11 was changed",
  "workout": 1,
  "changes": {
    "name": "brainworkout",
    "user_id": 2
  }
}
```

<hr />

<div id="edit a workouts_exercise"></div>

## [PUT] workouts_exercise by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/w-e/:id

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|reps (required)            | string |
|sets (required)            | string   |
|workout_id (optional)      | integer|
|sets (optional)            | integer  |


_An example of how the body should appear:

```js
{
    "reps": 11,
    "sets": 11,
    "workout_id": 4,
    "exercise_id": 4
}
```

### What will be returned:

message saying the workout of the targeted id was changed, the workout_id and the changes made and by which user

```js
{
  "message": "workouts_exercise of id: 1 was changed",
  "Workouts_exercise": 1,
  "changes": {
    "reps": 11,
    "sets": 11,
    "workout_id": 4,
    "exercise_id": 4
  }
}
```
<div id="edit a exercise"></div>

## [PUT] exercise by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/exercise/:id

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|name (required)            | string    |
|region (required)          | string   |

_An example of how the body should appear:

```js
  {
    "name": "changing squats",
    "region": "changing quads"
  }
```

### What will be returned:

message saying the workout of the targeted id was changed, the workout_id and the changes made and by which user

```js
{
  "message": "exercise of id: 1 was changed",
  "exercise": 1,
  "changes": {
    "name": "changing squats",
    "region": "changing quads"
  }
}
```

<div id="delete user"></div>

## [DEL] User by ID

<a href="#top">Return to the top</a>

URL: https://w-l-j.herokuapp.com/api/users/:id

_An example of how the endpoint should appear:_

```js
https://w-l-j.herokuapp.com/api/users/7
```

### What will be returned:

message saying user was deleted and number of users removed

```js
{
  "message": "user deleted",
  "removed": 1
}
```

<hr />
