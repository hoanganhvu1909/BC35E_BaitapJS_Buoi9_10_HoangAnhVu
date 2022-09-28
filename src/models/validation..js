function Validation() {
  //kiểm tra rỗng
  this.kiemTraRong = function (value, spanError, mess) {
    if (value === "") {
      //show thong bao loi
      getEle(spanError).innerHTML = mess;
      getEle(spanError).style.display = "block";
      return false;
    }

    getEle(spanError).innerHTML = "";
    getEle(spanError).style.display = "none";
    return true;
  };

  //Kiểm tra chức vụ
  this.kiemTraCV = function (idSelect, spanError, mess) {
    if (getEle(idSelect).selectedIndex !== 0) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }

    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };

  //kiểm tra độ dài ký tự
  this.kiemTraDoDaiKiTu = function (value, spanError, mess, min, max) {
    if (value.length >= min && value.length <= max) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }

    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };
  //Kiểm tra tài khoản
  this.kiemTraTK = function (value, spanError, mess) {
    //a-z
    var letter = "[0-9]{4,6}$";

    if (value.match(letter)) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }

    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };



  //kiểm tra chuỗi kí tự
  this.kiemTraChuoiKiTu = function (value, spanError, mess) {
    //a-z
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

    if (value.match(letter)) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }

    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };

  //Kiểm tra email
  this.kiemTraEmail = function (value, spanError, mess) {
    //a-z
    var checkemail = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";

    if (value.match(checkemail)) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }
    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };

  //Kiểm tra pass
  this.kiemTraPass = function (value, spanError, mess) {
    //a-z
    var checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

    if (value.match(checkPass)) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }
    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };

  //Kiểm tra ngày làm
  this.kiemTraNgayLam = function (value, spanError, mess) {
    //a-z
    var checkNgayLam = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    if (value.match(checkNgayLam)) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }
    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };


  //Kiểm tra lương
  this.kiemTraLuong = function (value, spanError, mess, min, max) {

    if (value >= min && value <= max) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }

    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };
  //Kiểm tra giờ làm
  this.kiemTraGioLam = function (value, spanError, mess, min, max) {

    if (value >= min && value <= max) {
      getEle(spanError).innerHTML = "";
      getEle(spanError).style.display = "none";
      return true;
    }

    getEle(spanError).innerHTML = mess;
    getEle(spanError).style.display = "block";
    return false;
  };

}









