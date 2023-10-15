function hitungLuas() {
    var panjang = parseFloat(document.getElementById('panjang').value);
    var lebar = parseFloat(document.getElementById('lebar').value);
    var hasil = (document.getElementById('hasil'));

    var luas = panjang * lebar;

    hasil .value = luas;
}

function resetForm() {
    document.getElementById('panjang').value = '';
    document.getElementById('lebar').value = '';
    document.getElementById('hasil').value = '';
}