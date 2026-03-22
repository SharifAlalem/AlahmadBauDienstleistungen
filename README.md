# Alahmad Bau Dienstleistungen - Website

Eine moderne, responsive Website für die Baudienstleistungsunternehmen "Alahmad Bau Dienstleistungen" in deutscher Sprache.

## 📁 Dateistruktur

```
AlahmadBauDienstleistungen/
├── index.html          # Startseite / Landing Page
├── kontakt.html        # Kontaktseite
├── styles.css          # Stylesheet (Responsive Design)
├── script.js           # JavaScript für Interaktivität
└── README.md          # Diese Datei
```

## 🌟 Funktionen

### Startseite (index.html)
- **Hero Section**: Attraktive Einleitung mit Unternehmensnamen und Slogan
- **Dienstleistungen (Services)**: Vier Dienstleistungskarten:
  - Isolierung
  - Abbruch
  - Bauservice
  - Planung & Beratung
- **Warum Uns Wählen**: Six Leistungsmerkmale mit Icons
- **Kundenbewertungen**: Vier Fake-Reviews mit 5-Stern-Bewertungen
- **Call-to-Action**: Buttons zur Kontaktaufnahme
- **Footer**: Kontaktinformationen, Öffnungszeiten

### Kontaktseite (kontakt.html)
- **Kontaktformular**: 
  - Name, E-Mail, Telefon, Betreff, Dienstleistungsauswahl, Nachricht
  - Integriert mit FormSpree für E-Mail-Versand
- **Kontaktinformation**: Adresse, E-Mail, Telefon, Öffnungszeiten
- **Kartenplatzhalter**: Platz für Google Maps oder ähnliches

## 🎨 Design

- **Farbpalette**:
  - Primärblau: #003d82
  - Sekundärblau: #0052a3
  - Akzentgelb: #ffc107
  - Hellgrau: #f8f9fa
  - Dunkelgrau: #333

- **Typografie**: Segoe UI, moderne sans-serif Schrift
- **Responsive Design**: Mobile, Tablet, Desktop (Breakpoints: 768px, 480px)

## 📱 Responsive

Das Website ist vollständig responsive und funktioniert perfekt auf:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (bis 768px)

## 🔧 Anpassungen

### FormSpree-Integration

1. Besuchen Sie https://formspree.io/
2. Registrieren Sie sich oder melden Sie sich an
3. Erstellen Sie ein neues Formular für die E-Mail: info@alahmad-bau.de
4. Kopieren Sie die Formular-ID (z.B.: xyzabc123)
5. Öffnen Sie `kontakt.html` und suchen Sie nach:
   ```html
   <form action="https://formspree.io/f/xyzabc123" method="POST"
   ```
6. Ersetzen Sie `xyzabc123` durch Ihre tatsächliche Formular-ID

### Kontaktinformationen aktualisieren

Suchen Sie nach den folgenden Texten in den Dateien und aktualisieren Sie sie:

**In index.html und kontakt.html:**
- `Hauptstraße 123, 70184 Stuttgart` → Ihre Adresse
- `info@alahmad-bau.de` → Ihre E-Mail
- `+49 711 123 45678` → Ihre Telefonnummer

### Bilder hinzufügen

Die Website verwendet derzeit Bilder von Unsplash. Um eigene Bilder zu verwenden:

1. Laden Sie Bilder in einen `assets` oder `images` Ordner
2. Ersetzen Sie in `index.html`:
   ```html
   <img src="https://images.unsplash.com/..." alt="...">
   ```
   mit:
   ```html
   <img src="images/ihrbild.jpg" alt="...">
   ```

## 🚀 Verwendung

### Lokal testen

1. Öffnen Sie `index.html` in Ihrem Browser
2. Oder verwenden Sie einen lokalen Server:
   ```bash
   # Mit Python 3
   python -m http.server 8000
   
   # Mit Node.js (benötigt http-server)
   npx http-server
   ```

### Auf Server hochladen

1. Laden Sie alle Dateien (index.html, kontakt.html, styles.css, script.js) auf Ihren Webserver
2. Stellen Sie sicher, dass alle Dateien im gleichen Verzeichnis sind
3. Besuchen Sie Ihre Website im Browser

## ⚙️ Browser-Kompatibilität

- Chrome/Edge: ✅ Vollständig unterstützt
- Firefox: ✅ Vollständig unterstützt
- Safari: ✅ Vollständig unterstützt
- Internet Explorer: ❌ Nicht unterstützt

## 📝 Lizenz

Diese Website ist für den eigenen Gebrauch bestimmt.

## 🆘 Unterstützung

Bei Fragen oder Problemen:
1. Überprüfen Sie die Browser-Konsole (F12) auf Fehler
2. Stellen Sie sicher, dass alle Dateien im eigenen Verzeichnis sind
3. Überprüfen Sie FormSpree-Einstellungen für das Kontaktformular

---

**Erstellt:** 2024
**Letztes Update:** März 2024
