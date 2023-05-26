var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Harap isikan nama'
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Harap isikan nomor telepon'
        return false;
    }

    if(phone.length !== 12){
        phoneError.innerHTML = 'Harap mengisi 12 digit angka'
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Harap masukkan email'
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(validateName() && validatePhone() && validateEmail()){
        alert('Selamat anda berhasil memesan, untuk selanjutnya cek email anda untuk melakukan pembayaran !!');
    }
    else {
        alert('Harap isi semua bidang')
    }
}