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
('w','wallet','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'),
('b','blockchain','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'),
('f','forex','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'),
('s','spéculation','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'),
('m','marché haussier','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'),
('m','marché baissier','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s');

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
