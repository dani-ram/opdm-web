FROM php:8.2-cli

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    git unzip libicu-dev libzip-dev zip libonig-dev \
    && docker-php-ext-install intl pdo pdo_mysql zip

# Instalar Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY symfony-backend/ /public/
# Instalar dependencias Symfony
RUN composer install --no-dev --optimize-autoloader

# Puerto dinámico de Render
ENV PORT=10000
EXPOSE 10000

CMD php -S 0.0.0.0:$PORT -t public

