const progress = document.querySelector( '#progress' );

document.forms.upload.onsubmit = function() {
    let input = this.elements.file;
    let file = input.files[0];
    upload(file);
}

function upload(file) {

    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded/event.total;
    }
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(file);
}