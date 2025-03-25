# Utilisation de Node.js 20
FROM node:20

# Définition du répertoire de travail
WORKDIR /app/my-bank-frontend

# Copie des fichiers de dépendance
COPY my-bank-frontend/package*.json ./
RUN npm install

# Copie du reste des fichiers
COPY my-bank-frontend/. .
# Construction de l'application pour la production (si nécessaire)
RUN npm run build

# Exposition du port (si nécessaire)
EXPOSE 3000

# Lancement de l’application
CMD ["npm", "run", "dev"]