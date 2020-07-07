# 

## Introduccion
Tecnología utilizada:
```shell
Docker
docker-compose
React 
Next.JS
NodeJS
socket.io

```

## Requirimientos

* Docker 
* Docker desktop dashboard https://docs.docker.com/docker-for-windows/install/  (recomendado)

## Instalacion

`git clone ...`

Agregue un archivo .env en la carpeta raíz del proyecto con las siguientes variables:

```shell
# Environment type
APP_SERVER_PORT=5000

# HTTP service
NEXT_APP_PORT=3000
```

Despues:

```shell
$ make build
$ make up
```

Estos comandos descargarán las imágenes enumeradas en la configuración [docker-compose.yml] (./ docker-compose.yml) e instalarán los requisitos de los contenedores. El servicio de cliente estará disponible en localhost con el puerto definido en `NEXT_APP_PORT` y el servidor estara con el puerto definido en `APP_SERVER_PORT` o por la configuración predeterminada .

