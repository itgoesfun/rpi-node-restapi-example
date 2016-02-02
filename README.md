# rpi-node-restapi

This is a simple Node.js application. The application exposes a rest api with one endpoint /api/v1/animals that just returns a JSON response with 20 animals. If you update you get 20 new animals. 

The application is build using express and fakerjs to fake the animals names, images and their catchphrase!


Builds on: https://hub.docker.com/r/hypriot/rpi-node/

## How to use

### Step 1: Build the image

Clone this project on your Raspberry Pi with the following command

```bash
$ git clone https://github.com/rpicloud/rpi-node-restapi-example.git
$ cd rpi-node-example-hello-world
```

Now build the image

```bash
$ docker build -t rpi-node-restapi-example .
```

### Step 2: Run the container

Now run the container with

```bash
$ docker run -p 8080:8080 -d rpi-node-restapi-example
```

### Step 3: Test it

Open a web browser and enter the following `http://<Raspberry Pi ip>:8080` or use `curl` to connect to the container as follows.

```bash
curl http://<Raspberry Pi ip>:8080/api/v1/animals
```

## License

The MIT License (MIT)

Copyright (c) 2016 rpi-cloud.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
