# Проект: todo-list-work

## Описание

Этот проект включает в себя фронтенд и бэкенд, которые запускаются с помощью Docker. Для правильной работы необходимо создать `.env` файлы в каталогах фронтенда и бэкенда, скопировав их из примеров `.env.example`. Эти файлы содержат важные переменные окружения, которые используются для конфигурации приложений. Затем нужно собрать и запустить контейнеры с помощью Docker Compose.

## Установка и запуск

1. **Клонировать репозиторий**:

    ```bash
    git clone https://github.com/TohaLike/todo-list-work.git
    ```

2. **Создать `.env` файлы**:

    Создайте файл `.env` в каждой из папок (фронтенда и бэкенда) на основе примера `.env.example`:

    - Для **фронтенда**:
        Перейдите в папку фронтенда и скопируйте пример `.env.example` в новый файл `.env`:

        ```bash
        cd ../todo-list-frontend
        cp .env.example .env
        ```

    - Для **бэкенда**:
        Перейдите в папку бэкенда и скопируйте пример `.env.example` в новый файл `.env`:

        ```bash
        cd ../todo-list-backend
        cp .env.example .env
        ```

3. **Собрать и запустить контейнеры**:

    После того как вы создали `.env` файлы, выполните команду для сборки и запуска контейнеров:

    ```bash
    docker-compose up --build
    ```

    Эта команда соберет все сервисы, указанные в `docker-compose.yml`, и запустит их.







