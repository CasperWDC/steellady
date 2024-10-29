# Используем базовый образ с Apache и PHP 8
FROM php:7.4-apache

# Устанавливаем необходимые модули PHP
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-install zip

# Устанавливаем необходимые расширения
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Устанавливаем Composer для управления зависимостями
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Копируем исходники проекта в контейнер
COPY . /var/www/html

# Устанавливаем права на папки
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Включаем модуль rewrite для Apache
RUN a2enmod rewrite

# Открываем порт 80 для доступа
EXPOSE 80
