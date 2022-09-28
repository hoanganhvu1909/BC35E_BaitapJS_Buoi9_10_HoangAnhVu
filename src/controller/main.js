var dsnv = new DSNV();

var validation = new Validation();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
};
/**
 * Lay thong tin nhan vien
 */
function layThongTinNV() {
    var tkNV = getEle("tknv").value;
    var tenNV = getEle("name").value;
    var email = getEle("email").value;
    var matKhau = getEle("password").value;
    var ngayLam = getEle("datepicker").value;
    var luongCoban = getEle("luongCB").value;
    var chucVu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value;

    var isValid = true;
    //check Validation
    //tài khoản
    isValid &= validation.kiemTraRong(tkNV, "tbTKNV", "(*) Vui lòng nhập tài khoản")
        && validation.kiemTraDoDaiKiTu(tkNV, "tbTKNV", "(*) Vui lòng nhập 4-6 ký số", 4, 6)
        && validation.kiemTraTK(tkNV, "tbTKNV", "(*) Vui lòng nhập đúng tài khoản 4-6 số");
    //Tên nhân viên
    isValid &= validation.kiemTraRong(tenNV, "tbTen", "(*) Vui lòng nhập tên")
        && validation.kiemTraChuoiKiTu(tenNV, "tbTen", "(*) Vui lòng nhập đúng kí tự");
    //Email
    isValid &= validation.kiemTraRong(email, "tbEmail", "(*) Vui lòng nhập tài email")
        && validation.kiemTraEmail(email, "tbEmail", "(*) Vui lòng nhập đúng kí tự");
    //Pass
    isValid &= validation.kiemTraRong(matKhau, "tbMatKhau", "(*) Vui lòng nhập mật khẩu")
        && validation.kiemTraPass(matKhau, "tbMatKhau", "(*) Vui lòng nhập đúng kí tự, 6-10 ký tự, một chữ in hoa, một ký tự đặc biệt, một ký tự số");
    //Ngày làm
    isValid &= validation.kiemTraRong(ngayLam, "tbNgay", "(*) Vui lòng nhập ngày làm")
    && validation.kiemTraNgayLam(ngayLam, "tbNgay", "(*) Vui lòng nhập đúng định dạng dd/mm/yyyy");
    //Lương cơ bản
    isValid &= validation.kiemTraRong(luongCoban, "tbLuongCB", "(*) Vui lòng nhập lương cơ bản")
        && validation.kiemTraLuong(luongCoban, "tbLuongCB", "(*) Vui lòng nhập đúng lương 1000000-20000000", 1000000, 20000000);
    //Chức vụ
    isValid &= validation.kiemTraCV("chucvu", "tbChucVu", "(*) Vui lòng nhập chức vụ");
    //giờ làm
    isValid &= validation.kiemTraRong(gioLam, "tbGiolam", "(*) Vui lòng nhập giờ làm")
        && validation.kiemTraGioLam(gioLam, "tbGiolam", "(*) Vui lòng nhập đúng giờ làm 80-200", 80, 200);





    if (isValid) {
        var nv = new NhanVien(tkNV, tenNV, email, matKhau, ngayLam, luongCoban, chucVu, gioLam);
        // console.log(nv);
        //Tinh tong luong
        nv.tinhTongLuong();
        //Xếp loại nhân viên
        nv.xepLoaiNV();
        return nv;
    };
    return null;

    

};

/**
 * thêm nhân viên
 */
getEle("btnThemNV").addEventListener("click", function () {
    var nv = layThongTinNV();
    if (nv) {
        //them nhan vien
        dsnv.ThemNV(nv);

        //rendertable
        renderTable(dsnv.arr);

        //lưu data
        setLocalStorage();

        resetForm();
    }

});
/**
 * Đóng và reset
 */
getEle("btnDong").addEventListener("click", function(){
    getEle("tknv").disabled = false;
    resetForm();
});

//In danh sách tạo bảng
function renderTable(data) {
    var content = "";

    data.forEach(function (nv) {
        content += ` 
      <tr>
      <td>${nv.tkNV}</td>
      <td>${nv.tenNV}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.total}</td>
      <td>${nv.xepLoai}</td>
      <td>
        <button class="btn btn-danger" onclick="deleteNV('${nv.tkNV}')">Xoá</button>
        <button class="btn btn-info" data-target="#myModal" data-toggle="modal" onclick="editNV('${nv.tkNV}')">Edit</button>
      </td>
      </tr>
      `;
    });
    getEle("tableDanhSach").innerHTML = content;
};


/**
 * Xoá nhân viên
 */
function deleteNV(tkNV) {
    dsnv.xoaNV(tkNV);
    renderTable(dsnv.arr);
    setLocalStorage();
};

/**
 * Edit nhân viên
 */
function editNV(tkNV) {
    var nv = dsnv.layThongTinChiTietNV(tkNV);

    if (nv) {
        //Dom tới các thẻ input, show thông tin nv
        getEle("tknv").value = nv.tkNV;
        //disabled thẻ input#tkNV
        getEle("tknv").disabled = true;
        getEle("name").value = nv.tenNV;
        getEle("email").value = nv.email;
        getEle("password").value = nv.matKhau;
        getEle("datepicker").value = nv.ngayLam;
        getEle("luongCB").value = nv.luongCoban;
        getEle("chucvu").value = nv.chucVu;
        getEle("gioLam").value = nv.gioLam;

    }
};

/**
 * Cập nhật NV
 */
 getEle("btnCapNhat").addEventListener("click", function () {
    var nv = layThongTinNV();
    dsnv.capNhatNhanVien(nv);
    renderTable(dsnv.arr);
    setLocalStorage();
    getEle("tknv").disabled = false;
    resetForm();
  });
  

/**
 * Tim kiếm nhân viên
 */
 getEle("searchName").addEventListener("keyup", function () {
    //lay keyword
    var keyword = getEle("searchName").value;
    var mangTimKiem = dsnv.timKiemNhanVien(keyword);
    //hien thi danh sach tim kiem
    renderTable(mangTimKiem);
  });



//Lưu dữ liệu localStorage
function setLocalStorage() {
    //Chuyển arr từ JSON => String
    var dataString = JSON.stringify(dsnv.arr);
    //lưu data xuống LocalStorage của trình duyệt
    localStorage.setItem("DSNV", dataString);
};

//Lấy dữ liệu
function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");
        //convert String => JSON
        dsnv.arr = JSON.parse(dataString);
        renderTable(dsnv.arr);
    }
};


function resetForm (){
    getEle("tknv").value = "";
    getEle("name").value = "";
    getEle("email").value = "";
    getEle("password").value = "";
    getEle("datepicker").value = "";
    getEle("luongCB").value = "";
    getEle("chucvu").value = "";
    getEle("gioLam").value = "";
};







