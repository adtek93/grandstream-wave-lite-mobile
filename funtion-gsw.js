function generateQRCode(url,windowName)

{
    alert('Tạo mã QR thành công, vui lòng mở camera để quét !')
    var data = $('#text').val();
    var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + data + '&amp;size=250x250';
    $('#qrcode').attr('src', url);
    newwindow=window.open(url,windowName,'width=250,height=250,scrollbars=0,resizable=0,location=0,menubar=0,status=0,titlebar=0,toolbar=0,top=300,left=650');
     if (window.focus) {newwindow.focus()}
     return false;
}
