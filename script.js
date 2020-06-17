$(function () {         
      var mainCanvas = new fabric.Canvas('main-canvas');
                  //Default
                  var canvasWrapper = document.getElementById('canvas-wrapper');
                  var canvasWrapperWidth = canvasWrapper.clientWidth;
                  var aspectRatio = 0;
                  var canvas = mainCanvas;
                  var canvasWidth = 0;
                  var canvasHeight = 0;
                  canvas.backgroundColor = '#34AD39';
                  canvas.renderAll();
      //Change background using Image
      canvas.setBackgroundColor('', canvas.renderAll.bind(canvas));
      canvas.setBackgroundImage(0, canvas.renderAll.bind(canvas));
      var data = './apran.jpg';
      fabric.Image.fromURL(data, function (img) {

        imgWidth = img.width;
        imgHeight = img.height;
        aspectRatio = imgHeight/imgWidth;
        canvasWidth = canvasWrapperWidth;

        canvasHeight = canvasWrapperWidth * aspectRatio;
        var scaleFactor = canvasWidth / imgWidth;

        img.set({
            width: imgWidth, 
            height: imgHeight, 
            originX: 'left', 
            originY: 'top',
            scaleX: scaleFactor,
            scaleY:scaleFactor
      });
        canvas.setWidth(canvasWidth);
        canvas.setHeight(canvasHeight);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
  });

});