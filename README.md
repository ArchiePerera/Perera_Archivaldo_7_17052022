# Groupomania

## Installez MySQL sur votre machine

Pour cela, référez-vous à la [documentation officielle](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) et suivez les instruction en fonction de votre OS.

## Créez une base de données MySQL

### Via le terminal

Lancer le terminal et accéder à MySQL

>mysql -u root -p

Puis lancer la requête suivante en changeant nom_de_la_BDD par un nom de votre choix

>CREATE DATABASE nom_de_la_BDD;

### Via un éditeur SGBD

Je vous recommande [MySQL WORKBENCH](https://dev.mysql.com/doc/workbench/en/) pour gérer vos base de données sans passer par le terminal.

## Lancement du serveur back

Clonez le repo sur votre machine

Créer un fichier <code>.env</code> à la racine du dossier 'back' et renseignez les champs suivant :

>PORT=3000
>DBPORT=3001
>
>DB_USERNAME=root
>DB_PASSWORD=VotreMotDePasseMySQL
>DB_DATABASE=nomDeVotreBaseDeDonnées
>DB_HOST=127.0.0.1

Dans le dossier 'back', ouvrez le terminal et lancer l'installation des dépendances

>npm install

Ceci, fait, il vous suffit de lancer le script pour démarrer le serveur

>npm run dev


