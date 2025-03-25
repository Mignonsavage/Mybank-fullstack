#!/bin/sh
# Démarre Apache
apache2-foreground &

# Affiche le message avec des espaces
printf '\n  \033[32m➜  Local:   http://localhost:8080/\033[0m\n\n'

# Attendre que le processus Apache se termine
wait