// Tạo lớp đối tượng (prototype) sinh viên
var SinhVien = function(maSinhVien,tenSinhVien,email,loaiSinhVien,diemToan,diemLy,diemHoa,diemRenLuyen){
    //Khai báo thuộc tính lớp đối tượng
    this.maSinhVien = maSinhVien;
    this.tenSinhVien = tenSinhVien;
    this.email = email;
    this.loaiSinhVien = loaiSinhVien;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemRenLuyen = diemRenLuyen;
    //Khai báo phương thức cho lớp đối tượng
    this.tinhDiemTrungBinh = function(){
        return (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa))/3;
     }
}