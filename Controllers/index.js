//Tạo mảng sinh viên
var mangSinhVien = [];

//Khai báo thư viện
var validation = new Validation();

document.querySelector('#btnXacNhan').onclick = function(){

    var sinhVien = new SinhVien();
    sinhVien.maSinhVien = document.querySelector('.maSinhVien').value;
    sinhVien.tenSinhVien =  document.querySelector('.tenSinhVien').value;
    sinhVien.email = document.querySelector('.email').value;
    sinhVien.loaiSinhVien = document.querySelector('.loaiSinhVien').value;
    sinhVien.diemToan = document.querySelector('.diemToan').value;
    sinhVien.diemLy = document.querySelector('.diemLy').value;
    sinhVien.diemHoa = document.querySelector('.diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('.diemRenLuyen').value;


    var valid = true;

    //Kiểm tra mã sinh viên
    valid = validation.kiemTraRong(sinhVien.maSinhVien,'.maSinhVien','inputError')
    && validation.kiemTraDoDai(sinhVien.maSinhVien,3,3,'.maSinhVien','inputError')

    //Kiểm tra tên sinh viên

    valid &= validation.kiemTraRong(sinhVien.tenSinhVien,'.tenSinhVien','inputError')
    && validation.kiemTraKiTu(sinhVien.tenSinhVien,'.tenSinhVien','inputError')

    //Kiểm tra điểm
    valid &= validation.kiemTraRong(sinhVien.diemToan,'.diemToan','inputError')
    && validation.kiemTraSo(sinhVien.diemToan,'.diemToan','inputError')
    && validation.kiemTraGiaTri(sinhVien.diemToan,0,10,'.diemToan','inputError')


    valid &= validation.kiemTraRong(sinhVien.diemLy,'.diemLy','inputError')
    && validation.kiemTraSo(sinhVien.diemLy,'.diemLy','inputError')
    && validation.kiemTraGiaTri(sinhVien.diemLy,0,10,'.diemLy','inputError')


    valid &= validation.kiemTraRong(sinhVien.diemHoa,'.diemHoa','inputError')
    && validation.kiemTraSo(sinhVien.diemHoa,'.diemHoa','inputError')
    && validation.kiemTraGiaTri(sinhVien.diemHoa,0,10,'.diemHoa','inputError')


    valid &= validation.kiemTraRong(sinhVien.diemRenLuyen,'.diemRenLuyen','inputError')
    && validation.kiemTraSo(sinhVien.diemRenLuyen,'.diemRenLuyen','inputError')
    && validation.kiemTraGiaTri(sinhVien.diemRenLuyen,0,10,'.diemRenLuyen','inputError')

    
    
    //Kiểm tra email
    valid &= validation.kiemTraRong(sinhVien.email,'.email','inputError')
    && validation.kiemTraEmail(sinhVien.email,'.email','inputError');
    
    if(!valid){
        return;
    }


    
    // Thêm sinh viên vào mảng
    mangSinhVien.push(sinhVien); 

    // lưu vào localstorage
    luuLocalStorage();

    //Gọi hàm tạo bảo
    renderTable(mangSinhVien);

}


var renderTable = function(mangSV){

    var noiDungTable = '';
    for(var i = 0; i < mangSV.length; i++){
        var svMang = mangSV[i];
        sinhVien = new SinhVien(svMang.maSinhVien,svMang.tenSinhVien,svMang.email,svMang.loaiSinhVien,svMang.diemToan,svMang.diemLy,svMang.diemHoa,svMang.diemRenLuyen);
        var trSinhVien = `
        <tr>
            <td>${sinhVien.maSinhVien}</td>
            <td>${sinhVien.tenSinhVien}</td>
            <td>${sinhVien.email}</td>
            <td>${sinhVien.loaiSinhVien}</td>
            <td>${sinhVien.tinhDiemTrungBinh()}</td>
            <td>${sinhVien.diemRenLuyen}</td>
            <td><button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')">Xóa</button></td>
        </tr>
        `;
        noiDungTable += trSinhVien;

    }
    document.querySelector('#tbSinhVien').innerHTML = noiDungTable;
}

var xoaSinhVien = function(maSinhVien){
    for(var index = mangSinhVien.length - 1; index >= 0 ; index--){
        var sinhVienThuIndex = mangSinhVien[index];
        if(sinhVienThuIndex.maSinhVien === maSinhVien){
            mangSinhVien.splice(index,1); 
        }
    }
    renderTable(mangSinhVien);
}

var luuLocalStorage = function(){
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    localStorage.setItem('mangSinhVien',sMangSinhVien);
}

var layDuLieuLocalStorage = function(){
    if(localStorage.getItem('mangSinhVien')){
    var sMangSinhVien = localStorage.getItem('mangSinhVien');
    mangSinhVien = JSON.parse(sMangSinhVien);
    renderTable(mangSinhVien);
    }  
}
layDuLieuLocalStorage();

