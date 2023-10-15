let edit = false;
let indeks = 0;

Tambah = () => {
    edit = false;
    document.getElementById('nama').value = "";
    document.getElementById('jurusan').value = "";
    document.getElementById('alamat').value = "";
}

Edit = (index) => {
    edit = true;
    indeks = index;
    let table = document.getElementById('tabel-siswa');
    let nama = table.rows[index].cells[0].innerHTML;
    let jurusan = table.rows[index].cells[1].innerHTML;
    let alamat = table.rows[index].cells[2].innerHTML;

    document.getElementById('nama').value = nama;
    document.getElementById('jurusan').value = jurusan;
    document.getElementById('alamat').value = alamat;
}

Simpan = () => {
    let table = document.getElementById('tabel-siswa');
    let nama = document.getElementById('nama').value;
    let jurusan = document.getElementById('jurusan').value;
    let alamat = document.getElementById('alamat').value;

    if (edit) {
        table.rows[indeks].cells[0].innerHTML = nama;
        table.rows[indeks].cells[1].innerHTML = jurusan;
        table.rows[indeks].cells[2].innerHTML = alamat;
    } else {
        let newRow = table.insertRow(table.rows.length);
        newRow.innerHTML = `
            <td>${nama}</td>
            <td>${jurusan}</td>
            <td>${alamat}</td>
            <td>
                <button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modal" onclick="Edit(${table.rows.length - 1})">Edit</button>
                <button type="button" class="btn btn-sm btn-danger" onclick="Hapus(${table.rows.length - 1})">Hapus</button>
            </td>
        `;
    }
}

Hapus = (index) => {
    let table = document.getElementById('tabel-siswa');
    table.deleteRow(index);
}