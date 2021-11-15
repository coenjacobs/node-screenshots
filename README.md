# node-screenshots
Simple script that takes a screenshot of the provided URL.

Start the script locally, after installing the dependencies:

```
npm ci
node index.js
```

The server will now be listening on port `3000`. You can request a screenshot to be taken of a specific URL by providing the URL to the `/screenshot` endpoint via the `url` parameter, like so:

```
http://127.0.0.1:3000/screenshot?url=https://coenjacobs.me
```

This will take the screenshot and return a JSON success message, after the screenshot image has been stored in the `images` directory. If there was any failure, you are out of luck because error handling is not really helpful.

## Success response example
This response is providing a `201` status code as well as the following response. The `screenshot` path is relative to the root of the script.

```
{
    "success": true,
    "url": "https://coenjacobs.me",
    "screenshot": "images/screenshot-1637013700793.png",
}
```

## Failure response example
This response is providing a `500` status code as well as the following response.

```
{
    "success": false,
    "error": "Something went wrong, you broke it",
}
```
