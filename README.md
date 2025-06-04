

2. **Installation des outils de développement**
3. **Créer une application Angular**
   1. Créer le dossier du projet
   2. Installer `@angular/cli`
   3. Créer l'application (frontend)

4. **Ajouter un en-tête (Header)**
   1. Générer un composant
   2. Ajouter le HTML
   3. Ajouter le CSS

5. **Lister les aliments (Foods)**
   1. Créer un modèle `Food`
   2. Créer `data.ts`
      1. Ajouter des exemples d'aliments
   3. Ajouter des images dans `assets`
   4. Créer un service `Food`
   5. Créer un composant `Home`
      1. Ajouter le TypeScript
      2. Ajouter le HTML
      3. Ajouter le CSS

6. **Recherche (Search)**
   1. Ajouter une méthode au service `Food`
   2. Ajouter une route de recherche
   3. Afficher les résultats dans le composant `Home`
   4. Générer un composant `Search`
      1. L'ajouter au composant `Home`
      2. Ajouter le TypeScript
      3. Ajouter le HTML
      4. Ajouter le CSS

7. **Barre d'étiquettes (Tags Bar)**
   1. Créer un modèle `Tag`
   2. Ajouter des étiquettes exemples dans `data.ts`
   3. Service `Food`
      1. Ajouter une méthode pour récupérer toutes les étiquettes
      2. Ajouter une méthode pour récupérer les aliments par étiquette
   4. Ajouter une route pour les étiquettes
   5. Afficher les résultats dans le composant `Home`
   6. Générer un composant `Tags`
      1. L'ajouter au composant `Home`
      2. Ajouter le TypeScript
      3. Ajouter le HTML
      4. Ajouter le CSS

8. **Page Aliment (Food Page)**
   1. Ajouter une méthode au service `Food`
   2. Générer un composant `FoodPage`
      1. Ajouter une route
      2. Ajouter le TypeScript
      3. Ajouter le HTML
      4. Ajouter le CSS

9. **Page Panier (Cart Page)**
   1. Créer un modèle `CartItem`
   2. Créer un modèle `Cart`
   3. Générer un service `Cart`
   4. Ajouter un bouton "Ajouter au panier" dans `FoodPage`
   5. Générer un composant `CartPage`
      1. Ajouter une route
      2. Ajouter le TypeScript
      3. Ajouter le HTML
      4. Ajouter le CSS

10. **Page Non Trouvée (Not Found)**
    1. Générer un composant
       1. Ajouter le TypeScript
       2. Ajouter le HTML
       3. Ajouter le CSS
    2. Ajouter aux pages
       1. Page d'accueil (`Home`)
       2. Page aliment (`FoodPage`)
       3. Page panier (`CartPage`)

11. **Connexion au Backend**
    1. Créer un dossier `backend`
    2. `npm init`
    3. `npm install typescript`
    4. Créer `tsconfig.json`
    5. Créer `.gitignore`
    6. Copier `data.ts` dans `backend/src`
    7. `npm install express cors`
    8. Créer `server.ts`
       1. Installer `@types`
       2. Ajouter les APIs
    9. `npm install nodemon ts-node --save-dev`
    10. Ajouter `urls.ts` dans le frontend
    11. Ajouter le module `HttpClient`
    12. Mettre à jour le service `Food`

12. **Page de Connexion (Login Page)**
    1. Générer un composant
       1. Ajouter aux routes
       2. Ajouter le TypeScript
       3. Ajouter le HTML
          1. Importer `ReactiveFormsModule`
       4. Ajouter le CSS
    2. Ajouter une API de connexion
       1. Utiliser JSON
       2. Ajouter `jsonwebtoken`
       3. Tester avec Postman
    3. Générer un service `User`
       1. Créer un modèle `User`
       2. Ajouter un `Subject` pour l'utilisateur
       3. Ajouter une méthode de connexion
          1. Ajouter les URLs utilisateur
          2. Générer une interface `IUserLogin`
          3. Ajouter `ngx-toastr`
             1. Importer le module
             2. Importer `BrowserAnimationsModule`
             3. Ajouter les styles dans `angular.json`
          4. Ajouter au `Header`
       4. Ajouter des méthodes de `localStorage`
       5. Ajouter une méthode de déconnexion
          1. Ajouter au `Header`

13. **Créer des Composants pour la Page de Connexion**
    1. Conteneur de saisie (`Input Container`)
    2. Validation de saisie (`Input Validation`)
    3. Champ de texte (`Text Input`)
    4. Bouton par défaut (`Default Button`)

14. **Connecter l'API de Connexion à MongoDB Atlas**
    1. Déplacer les APIs dans des routeurs
    2. Créer un cluster MongoDB Atlas
    3. Créer un fichier `.env`
    4. Installer :
       1. `mongoose`
       2. `dotenv`
       3. `bcryptjs`
       4. `express-async-handler`
    5. Se connecter à MongoDB Atlas
    6. Utiliser MongoDB au lieu de `data.ts` pour les APIs

15. **Inscription Utilisateur (Register)**
    1. Ajouter une API d'inscription
    2. Ajouter une méthode au service utilisateur
    3. Ajouter un lien d'inscription
    4. Ajouter un composant `Register`

16. **Chargement (Loading)**
    1. Ajouter une image
    2. Ajouter un composant
    3. Ajouter un service
    4. Ajouter un intercepteur

17. **Page de Paiement (Checkout Page)**
    1. Créer un modèle `Order`
    2. Créer un composant `CheckoutPage`
       1. Ajouter aux routes
    3. Ajouter l'utilisateur au service `User`
    4. Ajouter le panier au service `Cart`
    5. Créer un composant `OrderItemsList`
    6. Ajouter une carte à la page (`Map`)
       1. Installer `leaflet`
          1. Ajouter `@types/leaflet`
          2. Ajouter le CSS dans `angular.json`
       2. Ajouter `AddressLatLng` au modèle `Order`
       3. Créer un composant `Map`
          1. Ajouter à `CheckoutPage`
          2. Ajouter le TypeScript
             1. Changer le sélecteur `app-map` en `map`
          3. Ajouter le HTML
          4. Ajouter le CSS
       4. Ajouter un garde d'authentification (`AuthGuard`)
    7. Sauvegarder la commande (`Order`)
       1. Ajouter le modèle `Order`
       2. Ajouter un enum `OrderStatus`
       3. Ajouter un middleware d'authentification
       4. Ajouter un routeur `Order`
          1. Ajouter une API de création
       5. Ajouter les URLs dans `urls.ts`
       6. Ajouter un service `Order`
          1. Ajouter une méthode `create`
       7. Ajouter un intercepteur d'authentification

18. **Page de Paiement (Payment Page)**
    1. Générer un composant
    2. Ajouter une API `getOrderForCurrentUser`
    3. Ajouter une méthode au service `Order`
    4. Connecter le composant au service
    5. Rendre la carte (`Map`) en lecture seule

19. **Intégration de PayPal**
    1. Générer un composant
       1. Ajouter à la page de paiement
    2. Obtenir un `clientId` PayPal
    3. Ajouter PayPal JS dans `index.html`
    4. Configurer le bouton PayPal
    5. Ajouter une API de paiement dans le routeur `Order`
    6. Créer un compte PayPal Sandbox

20. **Page de Suivi de Commande (Order Track Page)**
    1. Générer un composant
       1. Ajouter aux routes
    2. Ajouter une API
       1. Ajouter dans `urls.ts`
    3. Ajouter une méthode dans `order.service`
    4. Ajouter le HTML
    5. Ajouter le CSS
    6. 
21. **Mise à jour des paquets (Optionnel)**
    1. Installer `npm-check-updates` globalement
    2. Exécuter `ncu -u` dans le dossier `frontend`
    3. Revenir à TypeScript version `~4.8.2`
    4. Exécuter `npm install --force`
    5. Exécuter `npm start`
    6. Exécuter `ncu -u` dans le dossier `backend`
    7. Exécuter `npm install`
    8. Exécuter `npm start`

