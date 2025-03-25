
FROM php:8.2-apache


WORKDIR /var/www/html

FROM php:8.2-apache


RUN apt-get update && apt-get install -y \
    nano \
    iputils-ping \
    && docker-php-ext-install pdo pdo_mysql \
    && a2enmod rewrite \
    && apt-get clean && rm -rf /var/lib/apt/lists/*



COPY ./mybank-backend/. .

# Copie du script de démarrage
COPY start-symfony.sh /usr/local/bin/start-symfony.sh


RUN chmod +x /usr/local/bin/start-symfony.sh

# Installation de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer install

# Exposition du port 80
EXPOSE 80


CMD ["sh", "/usr/local/bin/start-symfony.sh"]