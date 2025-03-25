#!/bin/sh

# Démarre Apache
#!/bin/sh

# Démarre Apache

apache2-foreground &


# Affiche le message avec des espaces et en couleur

printf '\n  \033[32mLionel Savage your Symfony is running at http://localhost:8000/\033[0m\n\n'


# Attendre que le processus Apache se termine

wait