# Introduction

## How to run
simply build the docker file with

```bash
docker build . -t introduction
```

Then run it with

```bash
docker run --rm --name introduction introduction
```

You can even adjust the speed by setting the speed environment variable

```bash
docker run --rm --name introduction -e SPEED=[desired speed] introduction
```
