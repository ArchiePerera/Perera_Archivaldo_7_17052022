# Groupomania

## Installez MySQL sur votre machine

Pour cela, référez-vous à la [documentation officielle](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) et suivez les instruction en fonction de votre OS.

Lancez le terminal et accédez à MySQL

## Gestion des bases de données MySQL

### Via un éditeur SGBD

Je vous recommande [MySQL WORKBENCH](https://dev.mysql.com/doc/workbench/en/) pour gérer vos bases de données sans passer par le terminal.

## Lancement du serveur back

Clonez le repo sur votre machine

Créer un fichier <code>.env</code> à la racine du dossier 'back' et renseignez les champs suivant :

```
# Définition des variables pour la BDD

PORT=3000
DBPORT=3001
DB_USERNAME=votreidentifiantMySQL
DB_PASSWORD=VotreMotDePasseMySQL
DB_DATABASE=groupomania
DB_HOST=127.0.0.1

# Définition des ports serveurs & BDD

PORT=3000
DBPORT=3001

# Définition des clefs secrètes pour les tokens et sessions

TOKEN=SECRET_RANDOM_TOKEN

SESSION_SECRET=SECRET_RANDOM_SESSION

# Définition du compte administrateur

LASTNAME=admin
FIRSTNAME=admin
MAIL=administrator@groupomania.com
PASSWORD=Administrator1!
ISENABLE=1
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

## Lancement du serveur front

## Paramètres de l'API

### User's path

|Verb|EndPoint|req|res|Comportement|
|:--:|:-------|:-:|:-:|:-----------|
|POST|/api/auth/signup|{ firstName, lastName, email, password }|{ message: "utilisateur créé" }|Création et enregistrement d'un utilisateur
|POST|/api/auth/login|{ email, password }|{ UserId, token }|Vérification et accés utilisateur aux autres chemins|

### Profile's path

|Verb|EndPoint|req|res|Comportement|
|:--:|:-------|:-:|:-:|:-----------|
|GET|/api/profiles|-|[{firstName, lastName, email, bio, img_profile}]|Renvoie un array contenant tous les objets user en BDD|
|GET|/api/profiles/:id|-|{firstName, lastName, email, bio, img_profile}|Renvoie l'objet user concerné|
|PUT|/api/profiles/:id|{firstName, lastName, email, bio, img_profile}|{message: "Profil utilisateur modifié"}|Modifie l'objet user concerné|
|DELETE|/api/profiles/:id|-|{message: "Utilisateur supprimé"}|Supprime l'utilisateur concerné|

### Post's path

|Verb|EndPoint|req|res|Comportement|
|:--:|:-------|:-:|:-:|:-----------|
|POST|/api/posts|{ UserId, title, content, file }|{message: "Post créé"}|Création et enregistrement d'un post (une image *file* n'est pas obligatoire)|
|GET|/api/posts|-|[{UserId, title, content, file}]|Renvoie un array contenant tous les objets post en BDD|
|GET|/api/posts/:id|-|{UserId, title, content, file}|Renvoie l'objet post concerné|
|PUT|/api/posts/:id|{title, content, file}|{message: "Post modifié"}|Modifie le post concerné|
|DELETE|/api/posts/:id|-|{message: "Post supprimé"}|Supprime le post concerné|

### Post's like path

|Verb|EndPoint|req|res|Comportement|
|:--:|:-------|:-:|:-:|:-----------|
|POST|/api/posts/:id/like|{UserId, PostId, like(*Boolean*)}|-|Créé un like en BDD pour le post et l'user ciblés

## Sécurité

|Package|Utilisation|
|:------|:----------|
|Helmet|Configuration des headers|
|Cors|Configuration des la politiques cors sur le même domaine|
|Bcrypt|Cryptage des mots de passe en BDD|
|Dotenv|Gestion des données sensibles|
|express-rate-limit|Limitations des requêtes utilisateurs sur un temps donnée|
|jsonwebtoken|Gestion de token pour la connexion des utilisateurs|
|express-session|Gestion des cookies|