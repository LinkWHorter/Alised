var clips = 0;
var charred = 0;
var check = 1;

function rrr() {
  if (clips==3) {
  check = 0;
  const eyes = document.querySelector(".eyes");
  const laybrove = document.querySelector(".laybrove");
  const thooth = document.querySelector(".thooth");
  setTimeout(function() {
    laybrove.style.opacity = 1;
    thooth.style.opacity = 1;
    charred = 0;
    eyes.style.top = 268 + "px";
    eyes.style.left = 590 + "px";
}, 1500);
  setTimeout(function() {
    laybrove.style.opacity = 0;
    setTimeout(function() {
    thooth.style.opacity = 0;
  }, 1500);
    charred = 1;
    check = 1;
}, 5000);
  clips = 0;
  }
  console.log(clips);
}

function charedon() {
  charred = 1;
}

function charedoff() {
  const eyes = document.querySelector(".eyes");
  eyes.style.top = 268 + "px";
  eyes.style.left = 590 + "px";
  charred = 0;
}


function blinkBroves() {
  const lays = document.querySelector(".layes");
  const broves = document.querySelector(".broves");
  let opacity = 1;
  let interval = setInterval(function() {
    opacity = opacity === 0 ? 1 : 0; // меняем значение opacity между 0 и 1
    broves.style.opacity = opacity;
    setTimeout(function() {
      lays.style.opacity = opacity;
    }, 350);
  }, 150); // длительность цикла - 1.5s
  setTimeout(function() {
    clearInterval(interval); // останавливаем setInterval после 4.5s
    broves.style.opacity = 0; // скрываем картинку после таймера
    lays.style.opacity = 0;
    setTimeout(blinkBroves, 4300); // вызываем функцию снова через 4.5s
  }, 800);
}

function blinkLays() {
  clips++;
  const mouth = document.querySelector(".mouth");
  const lays = document.querySelector(".layes");
  let interval = setTimeout(function() {
    lays.style.opacity = 1;
}, 250);
  setTimeout(function() {
    lays.style.opacity = 0;
}, 2000);
  if(clips==2)
  {
    setTimeout(function() {
    mouth.style.opacity = 1;
}, 250);
  setTimeout(function() {
    mouth.style.opacity = 0;
}, 2000);
  }
  rrr();
};

blinkBroves(); // запускаем функцию при загрузке страницы

document.addEventListener("mousemove", function(event) {
  const eyes = document.querySelectorAll(".eyes");
  const broves = document.querySelector(".broves");
  if(charred==1 && check==1)
  {
    eyes.forEach(function(eye) {
      let x = event.pageX - eye.clientWidth / 2;
      let y = event.pageY - eye.clientHeight / 2;
      // Ограничение передвижения в пределах круга
      let centerX = 590; // координаты центра круга
      let centerY = 268;
      let radius = 7; // радиус круга
      let distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2); // расстояние от точки до центра круга
      if (distance > radius) { // если расстояние больше радиуса, то перемещаем точку на границу круга
        let angle = Math.atan2(y - centerY, x - centerX); // вычисляем угол между точкой и центром круга
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
      }
      eye.style.top = y + "px";
      eye.style.left = x + "px";
    });
  }
  else {
    eyes.style.top = 268 + "px";
    eyes.style.left = 590 + "px";
  }
});

/*document.addEventListener("mousemove", function(event) {
  const eyes = document.querySelectorAll(".eyes");
  eyes.forEach(function(eye) {
    let x = event.pageX - eye.clientWidth / 2;
    let y = event.pageY - eye.clientHeight / 2;
    if (x < 580) {
      x = 580;
    } else if (x > 600) {
      x = 600;
    }
    if (y < 255) {
      y = 255;
    } else if (y > 270) {
      y = 270;
    }
    eye.style.top = y + "px";
    eye.style.left = x + "px";
    
  });
});
*/