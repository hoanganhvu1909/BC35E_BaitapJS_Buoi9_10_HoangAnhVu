
function DSNV() {
    //them nhan vien
    this.arr = [];
    this.ThemNV = function (nv) {
        this.arr.push(nv);
    };

    //Tìm NV
    this.timViTriNV = function (tkNV) {
        //Tim vi tri
        var index = -1;
        this.arr.forEach(function (nv, i) {
            if (nv.tkNV === tkNV) {
                index = i;
            }
        });

        return index;
    };

    //Xoá nhân viên
    this.xoaNV = function (tkNV) {
        //tim vi tri
        var index = this.timViTriNV(tkNV);

        //Xoa phan tru trong mang
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    //Chỉnh sửa nhân viên
    this.layThongTinChiTietNV = function (tkNV) {
        //tim vi tri SV
        var index = this.timViTriNV(tkNV);
    
        if (index !== -1) {
          return this.arr[index];
        }
    
        return null;
      };

      //Cập nhật nv
      this.capNhatNhanVien = function (nv) {
        //tim vi tri sv
        var index = this.timViTriNV(nv.tkNV);
    
        if (index !== -1) {
          this.arr[index] = nv;
        }
      };

      //Tìm kiếm nhân viên
      this.timKiemNhanVien = function (keyword) {
        /**
         * 0. Tạo mangTimKiem = [];
         * 1. Duyệt mảng this.arr
         * 2. Nếu nv.xepLoai so sánh trùng keyword?
         *    => True => Thêm nv vô mangTimKiem
         * 3. trả về mangTimKiem
         */
        var mangTimKiem = [];
    
        this.arr.forEach(function (nv) {
          //chuyển string thành chữ thường
          var xepLoai = nv.xepLoai.toLowerCase();
          var txtSearch = keyword.toLowerCase();
          if (xepLoai.indexOf(txtSearch) !== -1) {
            mangTimKiem.push(nv);
          }
        });
    
        return mangTimKiem;
      };
};





