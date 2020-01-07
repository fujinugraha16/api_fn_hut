<?php
$data = file_get_contents('data/pizza.json');
$menu = json_decode($data, true); //ubah json jadi array assosiatif
$menu = $menu['menu']; //mengeluarkan dari objek menu
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>FN Hut</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
    <!-- navbar -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="img/logo.png" width="120">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">All Menu</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <h1>All Menu</h1>
            </div>
        </div>

        <div class="row">
            <?php foreach ($menu as $m) : ?>
                <div class="col-md-4">
                    <div class="card mb-3">
                        <img class="card-img-top" src="img/menu/<?= $m["gambar"]; ?>">
                        <div class="card-body">
                            <h5 class="card-title"><?= $m["nama"]; ?></h5>
                            <p class="card-text"><?= $m["deskripsi"]; ?></p>
                            <h5 class="card-title"><?= $m["harga"]; ?></h5>
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

    </div>





    <script src="../json/jquery-3.3.1.js"></script>
    <script src="js/boostrap.js"></script>
</body>

</html>