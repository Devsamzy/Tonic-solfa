const photos = ['111.jpg',
'12.jpg',
'13.jpg',
'14.jpg',
'16.jpg',
'17.jpg',
'8.jpg',
'9.jpg',
'10.jpg',
'11.jpg',
'12.jpg'
];

var imgId = document.getElementById('image');
var count = 0;
/*
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
button1.addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = photos.length - 1;
    imgId.src = photos[count];

  }

  else {
    imgId.src = photos[count];
  }
});
button2.addEventListener('click',*/ function change() {
  count++;

  if (count >= photos.length) {
    count = 0;
    imgId.src = photos[count];

  }

  else {
    imgId.src = photos[count];
  }
};
setInterval(change,3000)