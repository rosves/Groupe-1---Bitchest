# Presentation du projet 

Bienvenue surt le repository du projet bitChest ! 

## Installation et deploiement du projet 

1) Télécharger et lancer **xampp** en activant **Apache** et **MySQL**  
2) Accéder au sous-dossier **BackEnd** et effectuer les commandes suivantes :   
```bash
php bin/console doctrine:schema:update --force
```
```bash
php bin/console Bitcoins
```
Ces commandes permettent de setutp la base données avec les bonnes tables et d'initier le prix et le cours des cryptos-monnaies.

Installer les dépendances du projet avec la commande : 
```bash
composer install
```
Puis lancer l’api en utilisant la commande : 
```bash
symfony server:start
```

3) Accéder au sous-dossier FrontEnd et effectuer les commandes suivantes :

installer les dépendance du projet react avec : 
```bash
npm install 
```
Puis lancer le serveur avec : 
```bash
npm start
```
