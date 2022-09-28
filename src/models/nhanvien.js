function NhanVien(_tkNV, _tenNV, _email, _matKhau, _ngayLam, _luongCoban, _chucVu, _gioLam) {
    this.tkNV = _tkNV;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoban = _luongCoban;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.total = 0;
    this.xepLoai = "";

    //tính tổng lương
    this.tinhTongLuong = function () {
        if(this.chucVu === "Sếp"){
            this.total = parseFloat(this.luongCoban) * 3;
        }else if(this.chucVu === "Trưởng phòng"){
            this.total = parseFloat(this.luongCoban) * 2;
        }else{
            this.total = _luongCoban;
        }
    };

    //xếp loại
    
    this.xepLoaiNV = function(_gioLam){
        if(this.gioLam >= 192){
            this.xepLoai = "Xuất xắc";
        }else if(this.gioLam < 192 && this.gioLam >= 176){
            this.xepLoai = "Giỏi"
        }else if(this.gioLam < 176 && this.gioLam >= 160){
            this.xepLoai = "Khá"
        } else{
            this.xepLoai = "Trung bình"
        }
    };

}
