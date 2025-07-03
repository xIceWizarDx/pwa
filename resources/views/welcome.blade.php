<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Controle Financeiro</title>
    <!-- Inclui CSS e JS compilados pelo Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="antialiased">
    <!-- Container principal do Vue -->
    <div id="app">
        <!-- Componente de boas-vindas -->
        <wellcomee></wellcomee>

        <!-- Componente de controle financeiro -->
        <finance-control></finance-control>
    </div>
</body>

</html>