FROM php:8.2-cli

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    git unzip libicu-dev libzip-dev zip libonig-dev \
    && docker-php-ext-install intl pdo pdo_mysql zip mbstring

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

ENV COMPOSER_MEMORY_LIMIT=-1

WORKDIR /app
COPY symfony-backend/ .
# Instalar dependencias Symfony
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Puerto dinámico de Render
ENV PORT=10000
EXPOSE 10000

CMD php bin/console cache:clear --env=prod && php -S 0.0.0.0:$PORT -t public

