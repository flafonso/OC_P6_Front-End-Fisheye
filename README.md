
# OC_P6 : FishEye

Ce projet consiste à développer un prototype fonctionnel d’un nouveau site web pour FishEye, une plateforme qui permet aux photographes indépendants de présenter leurs meilleurs travaux. 

## Objectifs

- Développer un prototype conforme aux maquettes fournies par le designer
- Respecter les exigences d’accessibilité du client
- Utiliser les données au format JSON pour créer les pages des photographes de façon dynamique
- Utiliser le pattern Factory Method pour créer les media
- Pour cette itération, le site n’a pas besoin d’être responsive sur mobile.
## Technologies

- HTML
- CSS
- JavaScript (aucune librairie externe pour le js)
## Fonctionnalités

- Page d’accueil : Elle affiche la liste de tous les photographes avec leurs informations et une image miniature. L’utilisateur peut cliquer sur la vignette d’un photographe pour accéder à sa page.
- Page des photographes : Elle affiche une galerie des travaux du photographe, qui peuvent être des photos ou des vidéos. L’utilisateur peut trier les médias par popularité, par date ou par titre, cliquer sur l’icône "Like" pour augmenter le nombre de likes, et cliquer sur un média pour l’ouvrir dans une lightbox. L’utilisateur peut également contacter le photographe via un formulaire modal.
- Accessibilité : Il est très important que le site soit accessible aux utilisateurs malvoyants. Pour cela, nous devons utiliser des éléments HTML sémantiques, des attributs ARIA, des attributs "alt" pour les images, et permettre la navigation au clavier. Le code doit passer les tests AChecker sans "known issue".
## Installation

- Cloner le dépôt GitHub
- Ouvrir le fichier index.html dans un navigateur web
## Authors

- [@flafonso](https://github.com/flafonso)

Ce projet a été réalisé dans le cadre de la formation "Développeur d’application - JavaScript React" d’OpenClassrooms.