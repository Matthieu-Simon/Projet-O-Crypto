-- Deploy ocrypto:seedingAdd to pg

BEGIN;


INSERT INTO "user"(pseudo, email, password) VALUES
('hugo', 'hugo@outlook.fr', 'azerty'),
('papi', 'papi@hotmail.fr', 'azerty123'),
('cryptoman', 'cryptoman@outlook.fr', 'azertycrypt'),
('quentin', 'quentin@hotmail.fr', '123456');

INSERT INTO article(name, author, abstract) VALUES
('btc info', 'jean Raconte', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
('hécatombe', 'jean Raconte', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
('News', 'jean Raconte', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'),
('marché haussier', 'jean Raconte', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae pellentesque urna, id mollis orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros magna, convallis non pretium quis, eleifend at arcu. Cras a mi sed velit maximus maximus. Mauris in suscipit risus. Ut sit amet aliquam augue. Nunc sit amet arcu magna. Morbi semper tortor nec dui efficitur maximus. Nulla a lacus lorem. Maecenas eget gravida metus. Integer eget nunc purus. Etiam viverra massa non enim condimentum, id consectetur sem dictum. Vivamus maximus luctus luctus. Integer nec tincidunt tellus. Suspendisse imperdiet porttitor faucibus. In pretium, ipsum non porta semper, sem arcu consequat lorem, vel hendrerit arcu ligula id neque.

Aliquam pretium aliquet magna eu efficitur. Ut pretium lorem vitae condimentum pretium. Donec ac urna a mauris tempor commodo vitae et velit. Etiam arcu sapien, tempor eget euismod semper, facilisis quis massa. Etiam a enim vel elit sodales semper. Vestibulum id rutrum purus, non commodo tortor. Suspendisse tincidunt tincidunt accumsan. Vivamus augue massa, finibus in laoreet et, finibus eget massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Phasellus in tortor a ipsum scelerisque bibendum. Cras eget urna in erat vestibulum ullamcorper quis pellentesque ex. Phasellus pretium purus elit, vel sollicitudin ligula venenatis at.

Nullam rutrum ligula eget tortor tempus, quis rutrum diam aliquam. Ut et rhoncus nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus maximus lorem in leo facilisis tristique. Curabitur nec egestas mauris, id accumsan dui. Vestibulum ultricies turpis a ante pretium ultricies. Sed elit nunc, finibus et odio non, fermentum viverra sapien. Donec placerat fermentum convallis. Nulla congue nibh at quam egestas vestibulum.

Ut rutrum nisi ac dapibus volutpat. Sed luctus sapien at tortor volutpat, id posuere mi maximus. Mauris facilisis tellus a nisi finibus vehicula. Aenean sed lectus quis arcu efficitur bibendum. Nam blandit ultrices nisi, ac mattis enim egestas et. Nullam tempor, lorem a dignissim malesuada, tellus mauris lobortis ex, sit amet faucibus urna dui sed ex. Fusce fringilla ipsum metus. Morbi pretium ipsum enim, quis iaculis urna fringilla nec. Nam at erat vel tellus sodales posuere eu ut sapien. Sed eu risus vitae turpis dapibus cursus. Mauris tempor convallis suscipit. Duis non rhoncus ipsum.

Etiam eleifend mollis commodo. Nunc laoreet feugiat mollis. Vivamus placerat et nulla et posuere. Curabitur pharetra sollicitudin ligula, et pretium justo ultricies in. Phasellus posuere laoreet urna, a dictum quam fringilla quis. Nullam ultrices, lectus vitae fringilla imperdiet, massa mauris scelerisque ante, ac interdum justo dui sed nulla. Quisque ultricies tortor leo, vel lacinia lacus aliquam nec. Vivamus vel tortor tincidunt, rhoncus leo eget, ultricies nibh. Integer aliquet nibh sit amet ante posuere, dictum efficitur massa ullamcorper.

Donec faucibus facilisis turpis, sed tincidunt purus pulvinar nec. Maecenas non justo vel est tempus semper. Donec et tellus a augue tincidunt aliquam. Suspendisse nec ex vel odio fermentum consectetur. Praesent fermentum egestas mi sed convallis. Nunc pulvinar pulvinar nulla et tempor. Sed pellentesque dolor velit, at accumsan nisl facilisis vel. Aenean nec dolor a nisl auctor eleifend et eget sem. Vestibulum consequat arcu mauris, sit amet lobortis lorem molestie non. Morbi et vehicula ipsum. Quisque quis tellus commodo, accumsan metus euismod, rutrum dolor. Nunc lobortis, leo in eleifend mattis, eros urna sollicitudin urna, sit amet vestibulum leo eros non nunc.'),
('web 3.0', 'jean Raconte', 'What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ''lorem ipsum'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.');


INSERT INTO lexicon(letter, name, abstract)VALUES

('A','Airdrop :','Un airdrop est une distribution gratuite d’une nouvelle crypto monnaie, envoyées 
à différents utilisateurs de la communauté blockchain.'),
('A','Altcoin :',' Le terme “Altcoin” ou alternative coin est utilisé pour décrire toutes les 
cryptomonnaies autres que le Bitcoin. Ex : Litecoin, Ripple, Mana.'),
('A','AMF :','Est l’autorité des marchés financiers français. Elle réglemente, organise, et contrôle 
les différentes pratiques des acteurs de la place financière française et informe les 
investisseurs de chaque nouvelle réglementation.'),
('A','Arbitrage :','L’arbitrage consiste à profiter des différences de prix entre deux différentes 
plateformes d’échange, en achetant sur l’une et en revendant sur l’autre.'),
('A','ATH (All Time High) :','Prix le plus haut jamais atteint sur une crypto monnaie.'),
('B','Bid :','« Bid » signifie « offre » en français. On voit souvent sur une plateforme de trading 
des valeurs « Ask » et « Bid ». La valeur « Bid » est le prix auquel les acheteurs souhaitent 
acheter une cryptomonnaie donnée. À l’inverse le « Ask » renvoie au prix qu’en 
demandent les vendeurs'),
('B','Bloc :',' Un bloc est l’élément principal d’une blockchain, ou “chaîne de blocs” en Français. 
Chaque bloc contient un ensemble de transactions, qui, une fois intégré à la blockchain, 
permet au mineur de gagner une récompense.'),
('B','Burn :',' Burn, de l’anglais “brûler”, est le fait de supprimer un certain nombre de tokens 
d’une cryptomonnaie pour faire baisser l’offre totale disponible.'),
('B','Bearish :','Est un terme anglais dérivé du mot bear (ours) qui désigne l’état d’esprit d’un 
investisseur qui pense que la tendance est baissière. La métaphore de l’ours est utilisée 
pour caractériser un marché baissier en raison de la manière dont un ours combat.'),
('B','Bullish :',' Est un terme anglais dérivé du mot bull (taureau) qui désigne l’état d’esprit d’un 
investisseur qui pense que la tendance est haussière.'),
('B','Bandes de Bollinger :',' Est un outil de trading développé par John Bollinger. Cet indicateur 
réalise une mesure dynamique de deux éléments : la volatilité et la directionnalité du prix. 
Lorsqu’il y a une augmentation de la volatilité et une forte directionnalité, le prix sort des 
bandes.'),
('B','Bitcoin :',' Le Bitcoin est la toute première des crypto monnaies à être publiée. Elle a été 
développée en 2008 par le célèbre Satoshi Nakamoto et est depuis la crypto ayant la plus 
importante capitalisation au monde.'),
('B','Blockchain :','Une blockchain est un type de base de données où sont stockées 
électroniquement de nombreuses informations confidentielles. Une blockchain (chaine de 
bloc) permet aux informations numériques d’être enregistrées et distribuées, mais pas 
éditées. Pratiquement toutes les transactions peuvent être suivies et échangées sur un 
réseau blockchain, ce qui réduit les risques et les coûts pour la totalité des utilisateurs.'),
('C','CPU (Central Processing Unit, soit Unité Centrale de Traitement) :','Est l’organe central d’un 
ordinateur. Un CPU est un processeur ou microp'),
('C','Coin :','De l’anglais “pièce”, est le mot couramment utilisé pour décrire l’unité comptable 
d’une cryptomonnaie. On distingue les coins des tokens. Un coin fait référence à une 
cryptomonnaie servant d’unité de compte. Un token désigne une cryptomonnaie donnant 
accès à un droit ou à un service particulier sur une DLT publique.'),
('C','Cryptoactif :',' En 2018, les cryptomonnaies ont été requalifiées par l’AMF, qui leur préfère 
désormais le terme de « cryptoactif ». Ce terme représente mieux le sous-jacent de la 
majorité des cryptomonnaies.'),
('C','Cryptomonnaie :',' Est une monnaie numérique basée sur les principes de la cryptographie. 
Elle s’échange sur un réseau décentralisé, en pair à pair, grâce aux technologies de 
Distributed Ledger Technologies (DLT) comme la blockchain'),
('C','Capital :','Représente le montant total présent dans un portefeuille.'),
('C','Chart :',' Graphique représentant le cours d’un actif numérique. '),
('C','Clé Privée :',' Code algorithmique d’un portefeuille d’actifs numérique. En général, les clés 
privées servent de mot de passe ou de code d’accès et doivent absolument être gardées 
en lieu sûr.'),
('C','Cold Wallet :',' Un Cold Wallet (portefeuille à froid) est une méthode de stockage de clés 
privées physique qui n’est pas connectée à internet (Ledger/Safepal).'),
('C','Cryptographie :',' Technique d’écriture s’attachant à protéger des messages confidentiels 
via l’utilisation de phrases chiffrées, de codes secrets ou de clés de décryptage.'),

('D','Dapps :',' TeDhnique d’éDriture s’attaDhant à protéger des messages Donfidentiels 
via l’utilisation de phrases Dhiffrées, de Dodes seDrets ou de Dlés de déDryptage.'),
('D','DAO (Organisation décentralisée autonome) :',' TeDhnique d’éDriture s’attaDhant à protéger des messages Donfidentiels 
via l’utilisation de phrases Dhiffrées, de Dodes seDrets ou de Dlés de déDryptage.'),
('D','Décentralisation :',' TeDhnique d’éDriture s’attaDhant à protéger des messages Donfidentiels 
via l’utilisation de phrases Dhiffrées, de Dodes seDrets ou de Dlés de déDryptage.'),
('D','DeFi :',' TeDhnique d’éDriture s’attaDhant à protéger des messages Donfidentiels 
via l’utilisation de phrases Dhiffrées, de Dodes seDrets ou de Dlés de déDryptage.'),
('D','DEX (Decentralized Exchange) :',' TeDhnique d’éDriture s’attaDhant à protéger des messages Donfidentiels 
via l’utilisation de phrases Dhiffrées, de Dodes seDrets ou de Dlés de déDryptage.'),
('D','Dip :',' TeDhnique d’éDriture s’attaDhant à protéger des messages Donfidentiels 
via l’utilisation de phrases Dhiffrées, de codes secrets ou de clés de décryptage.'),
('D','Dump :',' TeDhnique d’éDriture s’attaDhant à protéger des messages Donfidentiels 
via l’utilisation de phrases Dhiffrées, de codes secrets ou de clés de décryptage.'),

('E','Effet de levier :','Instrument de trading qui permet d’augmenter artificiellement la taille d’un 
placement/mise, sans pour autant amplifier l’exposition au marché.'),
('E','ERC-20 :',' Tokens utilisés et développés uniquement sur la plateforme Ethereum.'),
('E','Ethereum :',' Est un protocole monétaire peer-to-peer (P2P) distribué pour les contrats 
intelligents et les applications décentralisées. Son jeton natif est l’éther (ETH).'),
('E','Exchange :',' Plateforme d’échange de crypto monnaies. Ex : Binance, FTX, Coinbase…'),

('F','Fee :',' Frais facturés lors d’une négociation à la hausse/baisse d’un actif numérique.'),
('F','Fomo :',' Expression désignant un investisseur qui mise sur un actif par peur de manquer 
une bonne affaire. Le Fomo provoque la hausse irrationnelle d’une crypto monnaie à 
court terme, généralement suivie d’une violente correction.'),
('F','Fiat :',' Monnaie fiduciaire qui possède un cours légal, soutenu par un gouvernement et 
utilisée au sein de l’économie actuelle. Ex : euros, dollars…'),
('F','FUD :',' Nouvelles négatives ou trompeuses pouvant impacter à la baisse le prix d’un actif 
numérique.'),
('F','Fork :',' Modification du protocole d’un réseau blockchain en deux chaînes distinctes.'),
('F','Funding Fee :',' Taux de financement auquel un trader est exposé lorsqu’il prend position 
sur un contrat dérivé (futures). '),
('F','Futures :',' Contrat à terme offrant de nombreux outils d’investissement qui ne sont pas 
disponibles sur le marché Spot.'),

('G','Gains :',' Mise remportée à la suite de l’investissement gagnant d’un trader.'),
('G','Gap :','Variation du cours entre la clôture et l’ouverture d’un marché, provoquant l’absence 
de transaction à ces niveaux de prix.'),
('G','Gas :',' Le Gas est une unité virtuelle principalement dédiée à la validation et la confirmation 
des transactions sur la blockchain Ethereum. '),
('G','GitHub :',' La plus grande plateforme d’hébergement de code et développement de 
logiciels au monde.'),
('G','GPU (Graphical Processing Unit) :',' Technologie informatique présente dans les cartes 
graphiques. Les GPU’s effectuent des tâches complexes pour assurer le bon rendement 
graphique d’un jeu vidéo. Ils sont également très adaptés pour le minage de 
certaines crypto monnaies.'),

('H','Hack :',' Piratage informatique qui consiste à dérober un maximum d’informations, de 
données ou d’argent sous forme de monnaies électroniques ou cryptomonnaies.'),
('H','Halving :','Événement où les récompenses par bloc confirmé réalisé par des mineurs sont 
divisées par deux. Pour l’instant, le réseau Bitcoin a pu assister à 3 “Halvings” : le premier 
en novembre 2012, le second en juillet 2016 et le troisième et dernier en date, en mai 
2020.'),
('H','Hard Fork :',' Changement radical du protocole d’un réseau dans lequel une blockchain se 
divise en deux parties.'),
('H','Hardware Wallet :',' Portefeuille physique permettant le stockage de clés privées dans un 
périphérique informatique entièrement sécurisé. (Ex : Ledger, Safepal…)'),
('H','Hot Wallet :',' Portefeuille virtuel permettant l’envoi et le stockage de crypto-actifs en toute 
simplicité. À l’inverse des “Cold Wallets”, les portefeuilles chauds sont connectés à un 
réseau internet et sont donc plus exposés aux risques de piratage informatique.'),
('H','Hash rate :',' Terme utilisé pour décrire la puissance de calcul d’un réseau de crypto 
monnaie. Le Hash rate est mesuré en unités de hachage/seconde, ce qui représente la 
puissance de calculs par seconde qui peut être effectués.'),
('H','Higher High (HH) :',' Un point haut plus haut que le précédent.'),
('H','Higher Low (HL) :',' Un point bas plus haut que le précédent'),
('H','Hold :',' Le fait de conserver ses actifs numériques sur du long terme, peu importe les 
variations du cours.'),

('I','Inflation :',' Perte de la valeur d’une monnaie, ce qui signifie l’augmentation générale des 
prix sur le marché.'),
('I','ICO (Initial Coin Offering) :',' Offre de lancement permettant aux investisseurs d’acheter les 
premiers tokens mis en vente par un quelconque projet.'),
('I','ITO (Initial Token Offering) :','Similaire à l’ICO, les ITO’s sont davantage axées sur l’offre de 
jetons ayant une utilité intrinsèque sous la forme d’un logiciel ou d’une utilisation dans un 
écosystème.'),
('I','Investir :',' Allouer une certaine somme d’argent sur un actif numérique/titre financier.'),

('K','
KYC (Know Your Customer) :',' Dispositif de sécurité permettant de vérifier les données 
personnelles et l’identité des clients. Le KYC est une étape obligatoire sur la plupart des 
plateformes afin de lutter contre le blanchiment d’argent et le terrorisme (LCB-FT).'),

('L','Ledger :',' Société française fondée en 2014 qui propose sa propre gamme de portefeuilles 
physiques (Hardware Wallet). Vous pouvez y stocker un très grand nombre de clés 
privées en toute sécurité.'),
('L','Lightning Network :',' Technologie de deuxième couche qui consiste à résoudre les 
problèmes d’évolutivité et de scalabilité du réseau bitcoin.'),
('L','Liquidation :',' Perte totale de la somme investie sur un actif numérique.'),
('L','Liquidité :',' La facilité avec laquelle une crypto monnaie peut être achetée et vendue sans 
avoir d’impact sur le prix global du marché.'),
('L','Liquidity Pool :',' En DeFi, une pool de liquidité est un ensemble de jetons verrouillés et
conservés dans un smart contract, afin de faciliter la négociation de paires numériques 
sur les plateformes d’échange décentralisé (DEX)'),
('L','Long :',' Investir sur la hausse du prix d’un actif en appliquant un effet de levier.')
('L','Lower High :',' Un plus haut, plus bas que le précédent.'),
('L','Lower Low :',' Un plus bas, plus bas que le précédent.'),

('M','Margin Call :',' Un appel de marge est envoyé si le marché évolue dans le sens inverse 
d’une transaction réalisée. Ce rappel permet à un trader de rajouter des fonds 
supplémentaires afin d’éviter la liquidation de sa position ouverte.'),
('M','Margin Trading :',' Méthode de trading qui consiste à emprunter des fonds à un courtier 
pour trader. Bien que cette pratique vous permette d’amplifier vos gains, elle vous expose 
également à de plus grosses pertes.'),
('M','Market Cap :','Représente la capitalisation totale d’un actif numérique.'),
('M','Market Maker :','Faiseur de marché. Personne/institution qui contribue à garantir une 
liquidité suffisante sur les marchés.'),
('M','Market Order :','Type d’ordre d’achat ou de vente qui est immédiatement exécuté au 
meilleur prix possible du marché.'),
('M','Masternodes (“nœuds-maîtres”) :','Ce sont de puissants serveurs informatiques qui 
remplissent des tâches primordiales au sein d’un écosystème.
'),
('M','MetaMask :','Solution de stockage en ligne d’actifs numériques.'),
('M','Mineur :','Est un ordinateur dont le rôle est de valider des transactions sur un réseau 
blockchain, en échange d’une certaine quantité de crypto monnaies.'),
('M','Minting :','Processus informatique consistant à valider les informations, à créer un nouveau 
bloc et à enregistrer ces informations dans la blockchain.'),
('M','Money-Management :','Gestion de votre portefeuille d’actifs numériques.'),
('M','Moyenne mobile :','Indicateur basé sur le prix moyen d’un actif, très utilisé en analyse 
technique.'),

('N','Nœuds/nodes :',' Les nœuds sont des micro-serveurs exécutant des tâches essentielles au 
sein d’un réseau blockchain.'),
('N','NFT (Non Fungible Token) :',' Un NFT est un token unique ou au stock très limité.'),
('N','Nominators :',' Ils exécutent des tâches majeures dans un réseau de blockchain qui utilise 
l’algorithme de consensus NPoS (nominated proof-of-stake).'),

('O','OCO (One Cancel The Other) :','Désigne un ordre qui annule automatiquement un ordre 
précédent. Si vous placez un ordre OCO et que la première instruction est exécutée, 
l’autre sera immédiatement annulée'),
('O','Open Source :','Adjectif donné aux logiciels qui sont développés en respectant les 
principes de l’OSI, l’Open Source Initiative. Le fait d’être open source permet aux 
utilisateurs d’utiliser, de modifier et de changer un logiciel ou un code, en fonction de 
leurs besoins. '),
('O','Oracle :','Un oracle est un groupe de réseaux/applications permettant la numérisation 
d’informations venant de sources externes à la Blockchain (Off-Chain) via des smart 
contracts.'),
('O','Order Book : ','Carnet d’ordres qui affiche en temps réel les ordres d’achat et de vente 
effectués sur un contrat à terme.'),
('O','OTC (Over The Counter) :','Terme qui désigne une transaction réalisée hors d’une bourse 
d’échange, cela limite ainsi l’impact sur le prix d’un actif, particulièrement si la transaction 
OTC en question reste secrète.'),

('P','Panic Buy/Sell :','Situation où un trader achète/vend sa position lors d’une importante 
variation du cours à la hausse ou à la baisse.'),
('P','Peer to Peer (P2P) :','Un réseau peer to peer est un système décentralisé permettant 
l’échange ou le partage d’informations entre plusieurs ordinateurs.
'),
('P','PnL (profit and loss) :','Le PnL représente les bénéfices et les pertes accumulées entre 
l’ouverture et la fermeture d’une position.'),
('P','Portfolio :',' Ensemble d’actifs numériques détenus par un trader.'),
('P','Pyramide de Ponzi :','Un ponzi est une escroquerie qui promet aux investisseurs des taux 
de rendement très élevés en s’exposant à très peu de risques. Cependant, une fois le 
cours de l’actif arrivé à un certain stade, les fondateurs disparaissent avec la totalité des 
fonds récoltés.'),
('P','Pump :','Mouvement haussier à très forte intensité.'),
('P','Pullback :',': Pause ou changement temporaire de la tendance d’un actif. Le cours revient 
tester une zone de support ou résistance avant de repartir vers la tendance initiale.'),
('P','Proof of Stake (PoS) :',' La preuve d’enjeu est un type de mécanisme de consensus utilisé 
par les réseaux blockchain, afin de maintenir l’intégrité d’une crypto monnaie, en 
empêchant les utilisateurs d’imprimer des pièces supplémentaires qu’ils n’ont pas 
gagnées.'),
('P','Proof of Work (PoW) :','Premier système de consensus utilisé par les blockchains, afin de 
décourager les utilisations malveillantes de la puissance informatique, comme l’envoi de 
spams ou le lancement d’attaques DDoS. Pour créer de nouveaux blocs, les mineurs, 
doivent mettre à disposition leur puissance de calcul pour résoudre des équations 
mathématiques'),
('P','Pizza Day :','Marque la première utilisation dans le monde réel (officielle) de la 
cryptomonnaie Bitcoin, le 22 mai 2010. Un mineur de bitcoin situé en Floride achète 2 
pizzas pour 10 000 bitcoins. À cette période, 1 Bitcoin valait entre 0,003 et 0,004$.'),


('Q','QR Code :','Dispositif virtuel qui présente des informations codées dans un motif 
graphique en noir et blanc. Dans le monde des crypto monnaies, le QR Code est 
généralement utilisé pour envoyer et recevoir des paiements, de façon beaucoup plus 
rapide et automatisée.'),

('R','Range :','Période de stagnation entre deux niveaux de prix. Un range peut durer plusieurs 
semaines/mois sans que le cours n’effectue de grandes variations à la hausse comme à 
la baisse.'),
('R','Résistance :','Niveaux de prix où la force vendeuse est plus forte que la force acheteuse.'),
('R','Retracement de Fibonacci :','L’un des indicateurs les plus populaires, il permet de prévoir 
les zones de supports et de résistances potentiels lors d’un changement de tendance 
d’un actif numérique.'),
('R','Risk/Reward (RR) :','Ratio qui représente le risque que vous prenez en fonction du trade 
que vous souhaitez réaliser lors d’un investissement.
'),
('R','ROI (Return on Investment) :','Abréviation de “retour sur investissement”, il s’agit du 
rapport entre le bénéfice net et le coût de l’investissement. Le ROI donne une indication 
très importante sur la performance et la rentabilité d’un trade.'),
('R','RSI (Relative Strength Index) :','L’indice de force relative (RSI) est un oscillateur qui mesure 
la puissance des hausses et des baisses réalisées par un actif sur une unité de temps 
prédéfinie. Le RSI permet de vérifier la force et la tendance d’un marché.'),

('S','Satoshi Nakamoto :','Célèbre créateur du Bitcoin dont personne (ou presque) ne connaît 
l’identité. Satoshi Nakamoto est le pseudonyme utilisé par la personne ayant rédigé le 
livre blanc du Bitcoin, en 2008.'),
('S','Scalabilité :','De l’anglais “Scalability”. Capacité d’un système/blockchain à s’adapter à la 
fluctuation du nombre de transactions et de personnes utilisant le réseau en même 
temps. '),
('S','Scalping :','Stratégie d’investissement où les traders négocient leurs actifs sur de très 
courtes périodes, allant généralement de quelques secondes à quelques minutes.'),
('S','Shitcoin :','Crypto monnaie n’ayant pas de projet viable et à l’avenir très incertain. Les 
shitcoins n’apportent généralement pas ou peu de valeur aux investisseurs et ne sont 
donc pas intéressants pour de l’investissement à long terme.'),
('S','Short :','Investir sur la baisse du prix d’un actif.'),
('S','Sidechain :','Les sidechains sont des blockchains secondaires qui fonctionnent en 
parallèle d’une blockchain principale.'),
('S','Smart Contract :','Les contrats intelligents sont des protocoles informatiques qui 
s’appuient sur la technologie Blockchain, afin de faciliter, vérifier et exécuter la 
négociation ou l’exécution d’un contrat. Les contrats intelligents permettent aux 
utilisateurs d’effectuer des transactions de manière transparente et sans conflit, tout en 
évitant les services d’un intermédiaire (centralisé).'),
('S','Spot Market :','Marché public où les crypto monnaies sont échangées pour un règlement 
immédiat. Il s’oppose aux contrats futures, dans lequel le règlement est prévu 
ultérieurement.'),
('S','Spread :','Il peut avoir plusieurs significations en finance. Fondamentalement, ils font tous 
référence à la différence entre le prix d’achat (Ask) et le prix de vente (Bid) d’un actif 
numérique.'),
('S','Stablecoin :','Crypto monnaies indexées sur une valeur stable comme le dollar. Comme 
son nom l’indique, les Stablecoins possèdent une volatilité extrêmement faible, ils sont 
souvent utilisés comme moyen de diversification plus sûr et fiable.'),
('S','Staking :',': Le principe du staking est de verrouiller une quantité de crypto monnaies dans 
un portefeuille afin de recevoir des récompenses, tout en contribuant aux opérations 
d’une Blockchain. Le Staking est réputé pour être utilisé dans de nombreuses 
Blockchains utilisant le Proof of Stake (PoS) comme consensus principal.'),
('S','Stop Limit :','Les ordres Stop Limit se déclenchent en deux temps, le 1er au prix stop et le 
second au prix limit. '),
('S','Stop Loss :','L’outil “stop loss“, plus communément appelé SL, est un ordre qui se 
déclenche lorsque le cours atteint le prix de votre prédiction.'),
('S','Stop Market :','De la même manière qu’un ordre stop limit, les ordres stop-market utilisent 
un prix stop qui, une fois atteint, déclenche automatiquement un ordre market à la place.'),
('S','Support :','Niveaux de prix à partir duquel la force acheteuse est plus forte que la force 
vendeuse. Un support se réalise via la densité élevée d’ordres d’achat placés à un endroit 
précis du cours d’une cryptomonnaie.'),
('S','Swap :','Fonctionnalité permettant aux utilisateurs d’une plateforme d’échanger facilement 
une crypto monnaie contre une autre, sans pour autant passer par le marché.'),
('S','Swingtrade :','Position de trade ouverte sur plusieurs jours.'),

('T','Take Profit (TP) :','L’outil “take profit“, plus communément appelé TP, est un ordre 
conditionnel qui vous permet de sécuriser vos gains et de prendre quelques profits afin 
de diminuer votre exposition au marché.'),
('T','Testnet :','Blockchain alternative utilisée par les développeurs pour les tests de différents 
protocoles. Exemple : Le 24 juin 2021, une mise à jour d’Ethereum a été déployée sur le 
testnet Ropsten, afin que les développeurs puissent s’assurer que les différentes 
modifications implémentées soient fonctionnelles.'),
('T','To The Moon :','Expression très courante dans le monde des crypto monnaies signifiant la 
montée fulgurante du prix d’un actif.'),
('T','Token :','Actif numérique négociable ayant une utilité particulière sur un réseau blockchain.'),
('T','Tokenomics :','L’abréviation de Token et Economy, représente pour un projet crypto, la 
façon dont va être gérée la création de jetons pour le bon fonctionnement du projet.'),
('T','Total Supply :','Quantité d’un actif en circulation (disponible à l’achat) à un moment donné. 
Il s’agit de la somme des pièces qui ont déjà été distribuées (ou émises) moins le total 
des pièces qui ont été détruites (burn).'),
('T','Trading Bot :','Programme informatique conçu pour automatiser le trading de crypto 
monnaies, afin d’obtenir des rendements quotidiens. Un Trading Bots reproduit la 
stratégie d’investissement défini au préalable par un trader et évite donc toutes actions 
non réfléchies liées aux émotions.'),
('T','Trend :','Désigne une tendance haussière ou baissière.'),

('V','Volatilité :','Toute cryptomonnaie qui connaît des mouvements fréquents et importants est 
dite volatile par son manque de capitalisation.'),
('V','Volume Profile :','Indicateur affichant l’activité du marché à certains niveaux de prix. Le 
volume profile permet de visualiser les zones de prix que le cours a longtemps travaillé et 
identifier les potentielles zones que le cours ira travailler.'),

('W','Whale / Baleine :','Terme utilisé pour désigner une personne ou organisation détenant 
suffisamment de crypto monnaies pour impacter à court terme leur prix au comptant sur 
le marché.'),
('W','White Paper / Livre Blanc :','Document où sont rédigés la totalité des informations 
concernant une blockchain ou un quelconque projet cryptographique.'),
('W','Withdraw :','Retrait d’une somme investie au préalable.'),

('Y','Yellow Farming :','Le yellow paper présente un projet crypto sur tous ses aspects 
techniques et ses spécificités. Il est complémentaire au white paper.'),
('Y','Yield Farming :',' Le Yield Farming consiste à créer des tokens à partir d’autres tokens, en 
“prêtant” indirectement de l’argent à d’autres utilisateurs, tout en étant récompensé en 
recevant des intérêts grâce aux frais de transactions. Les utilisateurs fournissent des 
liquidités aux protocoles DeFi dans des Smart Contracts appelés “Liquidity Pools”.');



INSERT INTO "level"(name)VALUES
('noob'),
('intermediate'),
('junior');

INSERT INTO challenge(name, level_id, reward, article_id, abstract) VALUES
('challenge 1', 1, 300, 1, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '),
('challenge 2', 2, 300, 1, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '),
('challenge 3', 2, 300, 1, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '),
('challenge 4', 3, 300, 1, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '),
('challenge 5', 3, 300, 1, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ');





COMMIT;
