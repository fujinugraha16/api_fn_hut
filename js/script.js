function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function (data) { //mengambil semua data dari pizza.json
        let menu = data.menu; //untuk menghilangkan objek menu
        $.each(menu, function (i, data) { //ambil semua elemen dalam menu dan tiap elemen kasih fungsi
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img class="card-img-top" src="img/menu/' + data.gambar + '"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
        })
    });
}

tampilkanSemuaMenu(); //menampilkann menu

$('.nav-link').on('click', function () { //ketika link di klik
    $('.nav-link').removeClass('active'); //hapus class active
    $(this).addClass('active'); //tambahkan class aktif pada link yang di klik

    let kategori = $(this).html(); //membuat teks html dengan isi sesuai nama link
    $('h1').html(kategori); //mengganti h1 dengan kategori

    if (kategori == 'All Menu') { //ketika kategori dalam data
        $('#daftar-menu').html(''); //menghapus kontent sebelumnya
        tampilkanSemuaMenu(); //menampilkan semua menu
        return;
    }

    $.getJSON('data/pizza.json', function (data) { //mengambil data json
        let menu = data.menu; //menghilangkan objek menu
        let content = ''; //membuat variable content
        $.each(menu, function (i, data) { //melakukan perulangan
            if (data.kategori == kategori.toLowerCase()) { //jika semua data nama kategori sama dengan nama link kategori
                content += '<div class="col-md-4"><div class="card mb-3"><img class="card-img-top" src="img/menu/' + data.gambar + '"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'; //menambahkan kontent sesuai syarat kategori
            }
        });

        $('#daftar-menu').html(content); //tampilkan kontent
    });
})