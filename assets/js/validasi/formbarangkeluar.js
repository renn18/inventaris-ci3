function validateForm() {
	var tgl = document.forms["myForm"]["tgl"].value;
	var barang = document.forms["myForm"]["barang"].value;
	var jmlbarang = document.forms["myForm"]["jmlbarang"].value;
	var penanggung_jawab = document.forms["myForm"]["penanggung_jawab"].value;
	var stok = $("#stok").text();
	var total = parseInt(stok) - parseInt(jmlbarang);

	if (tgl == "") {
		validasi("Tanggal Keluar wajib di isi!", "warning");
		return false;
	} else if (barang == "") {
		validasi("Barang wajib di isi!", "warning");
		return false;
	} else if (jmlbarang == "") {
		validasi("Jumlah Keluar wajib di isi!", "warning");
		return false;
	} else if (penanggung_jawab == "") {
		validasi("Penanggung Jawab wajib di isi!", "warning");
		return false;
	} else if (total < 0) {
		validasi("Jumlah melewati stok barang!", "warning");
		return false;
	}
}

function validateFormUpdate() {
	var tgl = document.forms["myFormUpdate"]["tgl"].value;
	var barang = document.forms["myFormUpdate"]["barang"].value;
	var jmlbarang = document.forms["myFormUpdate"]["jmlkeluar"].value;
	var jmlbaranglama = document.forms["myFormUpdate"]["jmlkeluarlama"].value;
	var penanggung_jawab =
		document.forms["myFormUpdate"]["penanggung_jawab"].value;
	var stok = $("#stok").text();
	var total = parseInt(stok) + parseInt(jmlbaranglama) - parseInt(jmlbarang);

	if (tgl == "") {
		validasi("Tanggal Keluar wajib di isi!", "warning");
		return false;
	} else if (barang == "") {
		validasi("Barang wajib di isi!", "warning");
		return false;
	} else if (jmlbarang == "") {
		validasi("Jumlah Keluar wajib di isi!", "warning");
		return false;
	} else if (penanggung_jawab == "") {
		validasi("Penanggung Jawab wajib di isi!", "warning");
		return false;
	} else if (total < 0) {
		validasi("Jumlah melewati stok barang!", "warning");
		return false;
	}
}

function validasi(judul, status) {
	swal.fire({
		title: judul,
		icon: status,
		confirmButtonColor: "#4e73df",
	});
}
