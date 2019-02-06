# Dashboard - Gruppe 4
Opgave: Mediehusets Dashboard
I denne opgave skal I lave en ny løsning til vores dashboards her på Mediehusets gang.

Dashboards skal vises på skærmene her på Medie afdelingen. Der hænger en skærm lige ved siden af lærerværelset og en ved siden af toilettet nedenunder.

Tavlerne skal hovedsageligt give et overblik over hvilke aktiviteter der foregår i de forskellige klasserum, men det skal også være muligt at kunne vise en film eller billede, samt at post en eller to nyheder.

Da sitet skal vises samlet skal I ikke tænke over brugerinteraktioner som eksempelvis click og scroll events.

Arbejdsproces:

Opgaven er en gruppe opgave.

Grupperne skal køre SCRUM som udviklingsmetode og GitHub til fil- og versionstyring. 

Sørg for at få uddelegeret jeres roller i gruppen og brug gerne værktøjerne inde på GitHub (Issues, ZendHub, Projects) til at styre jeres workflow med. 

Dashboards:

Dashboards består af tre sektioner:

Sektion til visning af video eller billede.
Det skal være muligt at vise en enkelt  video eller en serie af videoer. Alle videoer bliver hentet fra Youtube.

Sektion til visning af nyheder. 
Der skal kunne vises maks. 2 nyheder i dette felt. Nyhederne skal vises med overskrift, dato og brødtekst. Hvis der ikke er nogen nyheder skal der vises en standard tekst i begge felter.

Sektion til visning af klasse aktiviteter.
I denne sektion skal til aktuelle aktiviteter vises med tid, fag og lokale og den pågældende uddannelses farve fra Mediehusets logo.Udover de fagspecifikke aktiviteter skal følgende også fremgå i denne oversigt:

- GF1 Aktiviteter
- Brobygnings-aktiviteter
- Efteruddannelsesaktiviteter
- Værkstedsaktiviteter

De enkelter aktiviteter vises i realtime. Hvis antallet af aktiviteter er udløbet - f.eks. ved skoledagens afslutning - skal næstkommende skoledags aktiviteter vises.

Værksstedaktiviteter må gerne bruges som fyld om nødvendigt - også selvom der er skemalagt en aktivitet.

Design:

Der er følgende krav til designet:

- Mediehusets logo skal indgå i designet
- Uddannelsernes farver skal indgå i de relevante aktiviteter
- generelt skal det forestå enkelt og overskueligt

I må også gerne tage udgangspunkt i en designguide. Herunder er der et par forslag i kan starte ud fra.

Ubuntu Designguide: https://design.ubuntu.com/

Google Material: https://material.io/design/

Marvel App: https://marvelapp.com/styleguide/overview/introduction
Teknologi:

I skal bygge sitet i de teknologier som I har til rådighed. Vi ser selvfølgelig helst at I så vidt muligt anvender Node.js til løsningen.

Kildedata:

Grupperne får udleveret kildedata med aktiviteter (mh_activity) og fag (mh_subject) i form af et mysql datadump. Da data trækkes fra en ekstern kilde er det vigtigt, at I bevarer datastrukturen.

Backend (Tillægsopgave):

Sitet skal have en backend hvor det skal være muligt som administrator, at håndtere brugere, nyheder, upload og admin af video/billeder. 

Som udgangspunkt ligger der en backend til sitet som I kan bruge. Den er bygget i PHP/MySql og I kan finde den på GitHub: https://github.com/Webudvikler-TechCollege/DashboardBackend

Hvis I har mod og tid på at lave en backend må I gerne prøve at lave en selv. Men det er frontend der har højeste prioritet.

I må gerne bruge PHP til backend løsningen.

Dokumentation:

Løsningen skal dokumenteres således at andre har mulighed for at kunne redigere løsningen. Helst i form af kode kommentarer men også gerne med en readme fil.

Aflevering

Løsningen afleveres på en af jeres hoteller på skolens server. I skal aflevere et link til denne samt link til jeres GitHub i Moodle.

I vil blive bedt om at fremlægge jeres løsning for hele klassen fredag den 15. februar 2019. 

I fremlæggelsen skal I redegøre for selve løsningen, samarbejdet og jeres arbejdsproces. Hver gruppe har 20 minutter til fremlæggelse og alle i gruppen skal deltage.

Lærerteamet udvælger derefter den bedste løsning til at blive vist på dashboardene på gangene.
