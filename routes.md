# Routes

## Routes de la partie front :

|Description|Préfixe|Route|
|---|---|---|
|Route principale|http://localhost|/|
|Route vers le lexique|http://localhost|/lexicon|
|Route vers la page d’inscription|http://localhost|/sign-in|
|Route vers la page de connexion|http://localhost|/log-in|
|Route vers la page “à propos”|http://localhost|/about|
|Route vers la page “équipe”|http://localhost|/team|
|Route vers la page “copyright”|http://localhost|/copyright|
|Route vers la page “faq”|http://localhost|/faq|
|Route vers le profil utilisateur|http://localhost|/profile|
|Route vers la page de modification du profil utilisateur|http://localhost|/profile/update|
|Route vers la page de déconnexion|http://localhost|/log-out|
|Route vers le parcours d’apprentissage|http://localhost|/learning|
|Route vers un challenge id : paramètre se rapportant à l’id d’un challenge en bdd|http://localhost|/learning/challenge/(id)|
|Route vers la page de crypto monnaie favorites|http://localhost|/favorites-currencies|
|Route vers la liste des articles|http://localhost|/articles|
|Route vers un article id-article : paramètre se rapportant à l’id d’un article en bdd|http://localhost|/article/(id-article)|
|Route vers la liste des crypto monnaies|http://localhost|/cryptocurrencies|
|Route vers une crypto monnaie name : paramètre se rapportant au nom de la crypto monnaie qui sera renvoyé par une api externe|http://localhost|/cryptocurrency/(name)|

## Routes de la partie back :

|Description|Préfixe|Route|Méthode|
|---|---|---|---|
|Route principale|http://localhost|/|GET|
|Route vers le lexique|http://localhost|/lexicon|GET|
|Route vers la page d’inscription|http://localhost|/sign-in|POST|
|Route vers la page de connexion|http://localhost|/log-in|POST|
|Route vers le profil utilisateur|http://localhost|/profile|GET|
|Route vers la page de modification du profil utilisateur|http://localhost|/profile/update|PATCH|
|Route vers la page de déconnexion|http://localhost|/log-out||
|Route vers le parcours d’apprentissage|http://localhost|/learning|GET|
|Route vers un challenge id : paramètre se rapportant à l’id d’un challenge en bdd|http://localhost|/learning/challenge/(id)|GET|
|Route vers la page de crypto monnaie favorites|http://localhost|/favorites-currencies|GET|
|Route vers la liste des articles|http://localhost|/articles|GET|
|Route vers un article id-article : paramètre se rapportant à l’id d’un article en bdd|http://localhost|/article/(id-article)|GET|
|Route vers la liste des crypto monnaies|http://localhost|/cryptocurrencies|GET|
|Route vers une crypto monnaie name : paramètre se rapportant au nom de la crypto monnaie qui sera renvoyé par une api externe|http://localhost|/cryptocurrency/(name)|GET|


