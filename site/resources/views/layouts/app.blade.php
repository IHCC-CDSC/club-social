<!doctype html>
<html lang="en">
<head>
    <!--links to JetBrains mono font-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800" rel="stylesheet">

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{ asset('css/navbar.css') }}" type="text/css">
    <title>Document</title>
</head>
<body>
    <section>
        <div class="navbar-container">
            <div class="navbar-container-left">
                <div class="navbar-logo">
                    <img id="navbar-logo-img" src="{{ asset('images/IHCC-CSDC.png') }}" alt="IHCC CSDC LOGO">
                </div>
                <span>IHCC CSDC</span>
            </div>
            <div class="navbar-container-right">
                <button id="navbar-menu"></button>
            </div>
        </div>
    </section>
</body>
</html>
