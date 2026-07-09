<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réponses - Pratique</title>
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
        }
        header a {
            color: #1abc9c;
            font-size: 16px;
            font-weight: normal;
            margin-left: 20px;
            text-decoration: none;
        }
        header a:hover {
            text-decoration: underline;
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
        📄 Réponses - Polyclinique
        <a href="reponses.pdf" download>Télécharger le PDF ⬇️</a>
    </header>
    <div class="pdf-container">
        <!-- Le PDF s'affiche directement ici comme un lecteur -->
        <embed src="reponses.pdf" type="application/pdf" />
    </div>
</body>
</html>
