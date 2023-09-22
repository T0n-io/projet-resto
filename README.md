# Crazee Burger

## Description

Crazee Burger est un site web ultraréactif développé avec React et Vite.js, permettant aux utilisateurs de gérer des produits. Les utilisateurs peuvent ajouter et supprimer des produits dans un panier, et une fois en mode admin, peuvent créer de nouveaux produits, et modifier des produits existants. Il a également la possibilité d'indiquer un produit en rupture de stock ou en promotion.
Toutes les modifications sont actualisées en temps réel dans l'affichage et dans la base de données à chaque caractère saisi, grâce à l'utilisation des hooks React.

## Fonctionnalités

- 🛒 Ajout de produits dans un panier
- 🛠 Création et modification de produits en mode Admin
- 🔄 Mise à jour en temps réel des modifications
- 🎨 Animations fluides avec react-transition-group

## Technologies Utilisées

- [React](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [react-transition-group](https://reactcommunity.org/react-transition-group/)

## Prérequis

- Node.js installé sur votre machine.
- Un compte Firebase.

## Installation et Configuration

### 1. Clonez le dépôt

git clone <lien-du-dépôt>

### 2. Installez les dépendances


cd <nom-du-projet>
npm install
### 3. Configurez Firebase

  **  Rendez-vous sur Firebase et créez une nouvelle base de données.
    Dans cette base de données, créez une collection nommée "users".
    Récupérez vos paramètres de configuration Firebase et ajoutez-les dans un fichier .env à la racine de votre projet.

## .env

- VITE_AUTH_DOMAIN="votre-domaine-auth"
- VITE_API_KEY="votre-clé-api"
- VITE_PROJECT_ID="votre-id-projet"
- VITE_STORAGE_BUCKET="votre-storage-bucket"
- VITE_MESSAGING_SENDER_ID=votre-sender-id"
- VITE_APP_ID="votre-app-id"

## Démarrage du Projet
Lancez le serveur de développement

npm run dev

Ouvrez http://localhost pour voir le projet dans le navigateur.

## Animations

Les animations sont gérées grâce à la librairie react-transition-group, en utilisant spécifiquement TransitionGroup et CSSTransition pour des transitions fluides et performantes.
Compréhension et Utilisation de React

Dans ce projet, j'ai employé une variété de concepts et de fonctionnalités avancés de React pour construire une application web robuste et réactive. Voici quelques-uns des aspects clés de React que j'ai exploités :
Hooks React

J'ai utilisé intensivement les Hooks React, notamment useState et useEffect, pour gérer l'état local des composants et les effets de bord. Cela a permis une interaction fluide et dynamique avec l'interface utilisateur, actualisant le rendu en temps réel à chaque modification de l'état.

## Composants Fonctionnels

L'application est construite principalement avec des composants fonctionnels, permettant une structure de code plus concise et plus lisible. Cela a également facilité l'utilisation des hooks React pour gérer la logique des composants de manière efficace.
Gestion de l'État Global

J'ai mis en place une gestion de l'état global robuste pour maintenir la synchronisation entre les différents composants de l'application, assurant ainsi une expérience utilisateur cohérente à travers toute l'application.
## Interaction avec Firebase

J'ai intégré Firebase pour la gestion de la base de données, permettant de réaliser des opérations CRUD (Create, Read, Update, Delete) sur les produits. Les modifications dans la base de données sont reflétées en temps réel dans l'application, grâce à une synchronisation efficace entre Firebase et l'état de l'application.
## Animations et Transitions

Grâce à la librairie react-transition-group, j'ai implémenté des animations et des transitions fluides pour améliorer l'expérience utilisateur. L'utilisation de TransitionGroup et CSSTransition a permis de réaliser des animations performantes lors des ajouts, modifications, et suppressions d'éléments dans l'interface.

