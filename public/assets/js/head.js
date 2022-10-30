const headData = () => {

    let head = document.querySelector('head')
    head.innerHTML += `
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://use.typekit.net/jdx4jax.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@900&display=swap" rel="stylesheet">

    

    <link rel="icon" type="image/x-icon" href="/assets/images/Website Icon.png">
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PRN20KW759"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-PRN20KW759');
    </script>`

    document.querySelector('head')
}

headData()