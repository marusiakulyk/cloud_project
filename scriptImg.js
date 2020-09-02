let fileReader = new FileReader();
let filterType = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

fileReader.onload = function (event) {
    let image = new Image();

    image.onload=function(){
        document.getElementById("original-Img").src=image.src;
        let canvas=document.createElement("canvas");
        let context=canvas.getContext("2d");
        let width = document.getElementById('width').value;
        let height = document.getElementById('height').value;
        canvas.width=width;
        canvas.height=height;
        context.drawImage(image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            canvas.width,
            canvas.height
        );

        document.getElementById("upload-Preview").src = canvas.toDataURL();
    }
    image.src=event.target.result;
};

var loadImageFile = function () {
    var uploadImage = document.getElementById("upload-Image");

    //check and retuns the length of uploded file.
    if (uploadImage.files.length === 0) {
        return;
    }

    //Is Used for validate a valid file.
    var uploadFile = document.getElementById("upload-Image").files[0];
    if (!filterType.test(uploadFile.type)) {
        alert("Please select a valid image.");
        return;
    }

    fileReader.readAsDataURL(uploadFile);
}
