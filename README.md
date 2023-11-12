# Big-Data-Abgabe2




## Teil 1 Bewertungskriterien


1. Muss – Die Datenbank muss erreichbar sein.
2. Muss - es muss ein minimalisiertes Docker Image verwendet werden
3. Muss - Der Code muss bei der Abgabe lauffähig sein, das wird via do-
cker build und docker run überprüft.
4. Muss – Die Datenbank soll nach Beendigung ihren Zustand behalten.
Bitte nehmen sie in den Pfad für die Persistenz ihre Studienkürzel
(wi22xxxx) auf. Ein Beispielpfad lautet z.B. „/var/lib/wi123456“
5. Soll - Nach Möglichkeit sollen aktuelle Softwarepakete verwendet wer-
den
6. Soll - Der Code soll dementsprechend dokumentiert sein, insb. ge-
schriebene Funktionen müssen/sollen eine Dokumentation enthalten. 
Bitte dokumentieren sie daher im Readme.md einen entsprechenden
Aufruf ihres Codes.
7. Soll – Wir die Datenbank besonders konfiguriert, so sollen die Konfigu-
rationsfiles beim Erstellen eingebunden und ausgeführt werden

## Teil 2 bewertungskriterien


8. Muss - es dürfen keine sicherheitssensitiven Informationen, wie Benut-
zernamen oder Passwörter im Docker File stehen
9. Muss - ein Ressourcen File muss vorhanden sein (setup.py, pom.xml,
build.sbt…) wo alle Abhängigkeiten aufgelistet werden.
10. Muss - es muss ein minimalisiertes Docker Image verwendet werden
11. Muss - der eingepackte Service muss extern erreichbar sein. Das wird
via curl oder postman überprüft.
12. Muss - Der Code muss bei der Abgabe lauffähig sein, das wird via do-
cker build und docker run überprüft.
13. Soll - Nach Möglichkeit sollen aktuelle Softwarepakete verwendet wer-
den
14. Soll - Der Code soll dementsprechend dokumentiert sein, insb. ge-
schriebene Funktionen müssen/sollen eine Dokumentation enthalten.
Bitte dokumentieren sie daher im Readme.md einen entsprechenden
Aufruf ihres Codes.
15. Soll – es soll auf den anderen Container zugegriffen werden. Je nach
Programmiersprache kann ein Datenbankdriver oder ORM Wrapper
verwendet werden.
a. Python: SQLAlchemy oder psycopg2
b. Java: JDBC-Driver oder Spring,Hibernate, JPA


## Teil 3 Bewertungskriterien


16. Muss - Das Compose file soll via „docker-compose up” lauffähig sein.
17. Muss - Es soll ein eigenes Netzwerk verwendet werden
18. Muss - Der Microservice soll via curl aufrufbar sein

