EditStyle = () => {

    let panjang = document.getElementById('panjang').value;
    let lebar = document.getElementById('lebar').value;
    let warna = document.getElementById('warna').value;
    let tulisan = document.getElementById('tulisan').value;
    let warna2 = document.getElementById('warna2').value;


    document.getElementById('square').style.width = panjang+"cm";
    document.getElementById('square').style.height = lebar+"cm";
    document.getElementById('square').style.backgroundColor = warna;
    document.getElementById('square').innerHTML = tulisan;
    document.getElementById('square').style.color = warna2;
  }