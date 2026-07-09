<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réponses - Polyclinique</title>
    
    <!-- Lien vers le manifest (PWA) -->
    <link rel="manifest" href="/Sinklar-site/manifest.json">
    <link rel="apple-touch-icon" href="/Sinklar-site/manifest.json">

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            display: flex;
            flex-direction: column;
            height: 100vh;
        }
        header {
            background: #2c3e50;
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        header a {
            color: #1abc9c;
            font-size: 16px;
            font-weight: normal;
            text-decoration: none;
            background: rgba(255,255,255,0.1);
            padding: 8px 15px;
            border-radius: 20px;
        }
        header a:hover {
            background: rgba(255,255,255,0.2);
        }
        .pdf-container {
            flex: 1;
            height: 100vh;
            background: white;
        }
        embed {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
    <header>
        📄 Réponses Polyclinique
        <a href="reponses.pdf" download>⬇️ Télécharger le PDF</a>
    </header>
    <div class="pdf-container">
        <embed src="reponses.pdf" type="application/pdf" />
    </div>

    <!-- Enregistrement du Service Worker pour le mode hors-ligne -->
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/Sinklar-site/sw.js')
                .then(() => console.log('✅ Mode hors-ligne activé !'))
                .catch(err => console.log('❌ Erreur :', err));
        }
    </script>
</body>
</html>
          
