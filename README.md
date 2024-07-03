# Ticket Flow

## User Stories

### Benutzerstory 1: Ticket erstellen

**Beschreibung:** Als ein Benutzer möchte ich ein neues Ticket erstellen damit ich Aufgaben oder Probleme verfolgen kann, die bearbeitet werden müssen.

**Akzeptanzkriterien:**

- Das Formular "Neues Ticket erstellen" sollte Felder für Titel, Beschreibung, Kategorie, Priorität, Fortschritt und Status enthalten.
- Der Benutzer sollte eine Kategorie aus einer vordefinierten Liste auswählen können (z.B. Aufgabe, User Story).
- Der Benutzer sollte die Priorität des Tickets festlegen können (Niedrig, Mittel, Hoch, Sehr hoch).
- Der Benutzer sollte den Fortschritt des Tickets mithilfe eines Schiebereglers einstellen können.
- Der Benutzer sollte den Status des Tickets festlegen können (Todo, In Bearbeitung, Erledigt).
- Der Benutzer sollte nach erfolgreicher Ticketerstellung eine Bestätigungsmeldung erhalten.

### Benutzerstory 2: Tickets auf dem Board anzeigen

**Beschreibung:** Als ein Benutzer möchte ich alle Tickets auf einem Board anzeigen lassen damit ich den Status jedes Tickets auf einen Blick sehen kann.

**Akzeptanzkriterien:**

- Das Board sollte drei Spalten haben: Todo, In Bearbeitung und Erledigt.
- Tickets sollten unter der entsprechenden Spalte basierend auf ihrem Status angezeigt werden.
- Jedes Ticket sollte den Titel, die Beschreibung, die Priorität, den Fortschritt und das Erstellungsdatum anzeigen.
- Der Benutzer sollte die Priorität und den Fortschritt jedes Tickets visuell erkennen können.

### Benutzerstory 3: Ticketstatus aktualisieren

**Beschreibung:** Als ein Benutzer möchte ich den Status eines Tickets aktualisieren damit ich den Fortschritt meiner Aufgaben verfolgen kann.

**Akzeptanzkriterien:**

- Der Benutzer sollte auf ein bestehendes Ticket klicken können und zur Seite "Ticket aktualisieren" weitergeleitet werden.
- Auf der Seite "Ticket aktualisieren" sollte der Benutzer die Ticketdetails neu definieren können.
- Der Benutzer sollte nach erfolgreicher Aktualisierung des Ticketstatus eine Bestätigungsmeldung erhalten.

### Benutzerstory 4: Nach Tickets suchen

**Beschreibung:** Als ein Benutzer möchte ich nach einem bestimmten Ticket suchen damit ich es schnell finden und seine Details überprüfen kann.

**Akzeptanzkriterien:**

- Der Benutzer sollte einen Suchbegriff in die Suchleiste eingeben können.
- Die Suchergebnisse sollten Tickets anzeigen, die dem Suchbegriff entsprechen.
- Jedes Ergebnis sollte den Titel, die Beschreibung und das Erstellungsdatum des Tickets anzeigen.
- Der Benutzer sollte auf ein Ticket in den Suchergebnissen klicken können, um dessen vollständige Details anzuzeigen.

### Benutzerstory 5: Ticketdaten analysieren

**Beschreibung:** Als ein Benutzer möchte ich die Ticketdaten analysieren damit ich den gesamten Fortschritt und die Leistung verstehen kann.

**Akzeptanzkriterien:**

- Die Analyse-Seite sollte Metriken wie die Gesamtanzahl der Tickets, die Anzahl der Aufgaben, die Anzahl der Bugs, die Anzahl der User Stories, den Prozentsatz der Board-Fertigstellung, die durchschnittliche Priorität und die Anzahl der in den letzten 24 Stunden erstellten Tickets anzeigen.
- Jede Metrik sollte in einem klaren und leicht lesbaren Format dargestellt werden.
- Der Benutzer sollte von der Hauptnavigationsleiste auf die Analyse-Seite zugreifen können.
