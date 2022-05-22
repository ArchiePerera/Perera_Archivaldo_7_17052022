# Groupomania

## Installez MySQL sur votre machine

Pour cela, référez-vous à la [documentation officielle](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) et suivez les instruction en fonction de votre OS.

## Gestion des bases de données MySQL

### Via le terminal

Lancez le terminal et accédez à MySQL

```
mysql -u root -p
```

### Via un éditeur SGBD

Je vous recommande [MySQL WORKBENCH](https://dev.mysql.com/doc/workbench/en/) pour gérer vos bases de données sans passer par le terminal.

## Lancement du serveur back

Clonez le repo sur votre machine

Créer un fichier <code>.env</code> à la racine du dossier 'back' et renseignez les champs suivant :

```
PORT=3000
DBPORT=3001
DB_USERNAME=root
DB_PASSWORD=VotreMotDePasseMySQL
DB_DATABASE=nomDeVotreBaseDeDonnées
DB_HOST=127.0.0.1
```

Dans le dossier 'back', ouvrez le terminal et lancer l'installation des dépendances

```
npm install
```

Créez la base de données groupomania dans le terminal

```
npx sequelize-cli db:create
```


Ceci, fait, il vous suffit de lancer le script pour démarrer le serveur

```
node server
```

## Paramètres de l'API


