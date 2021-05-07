const time = document.getElementById('time');
const workRestArea = document.getElementById('work-rest-area');
const workRest = document.getElementById('work-rest');
const nextStatus = document.getElementById('next-status');
const nextTime = document.getElementById('next-time');
const minTimer = document.getElementById('min-timer');
const chime =  new Audio('./assets/chime.mp3');

window.onload = () => {
  const now = new Date();
  if (now.getMinutes() >= 0 && now.getMinutes() < 25 || now.getMinutes() >= 30 && now.getMinutes() < 55) {
    workRest.innerHTML = '作業時間';
    nextStatus.innerHTML = '休憩時間';
    document.body.style.background = 'linear-gradient(125deg, #13f1fc, #0470dc)';
    workRestArea.style.background = 'linear-gradient(125deg, #13f1fc, #0470dc)';
    if (now.getMinutes() >= 0 && now.getMinutes() < 25) {
      nextTime.innerHTML = now.getHours() + ':25';
    } else if (now.getMinutes() >= 30 && now.getMinutes() < 55) {
      nextTime.innerHTML = now.getHours() + ':55';
    }
  } else if (now.getMinutes() >= 25 && now.getMinutes() < 30 || now.getMinutes() >= 55 && now.getMinutes() <= 59) {
    workRest.innerHTML = '休憩時間';
    nextStatus.innerHTML = '作業時間';
    document.body.style.background = 'linear-gradient(125deg, #DFEC51, #73AA0A)';
    workRestArea.style.background = 'linear-gradient(125deg, #DFEC51, #73AA0A)';
    if (now.getMinutes() >= 25 && now.getMinutes() < 30) {
      nextTime.innerHTML = now.getHours() + ':30';
    } else if (now.getMinutes() >= 55 && now.getMinutes() <= 59) {
      nextTime.innerHTML = (now.getHours() + 1) + ':00';
    }
  }
}

// 時刻表示
function set2fig(num) {
  var ret;
  if(num < 10) {
    ret = '0' + num;
  } else {
    ret = num;
  }
  return ret;
}
function clock() {
  const now = new Date();
  const youbi = ['日', '月', '火', '水', '木', '金', '土'];
  time.innerHTML = (now.getMonth() + 1) + '月' + now.getDate() + '日' + youbi[now.getDay()] + '曜日 ' + set2fig(now.getHours()) + '時' + set2fig(now.getMinutes()) + '分';
  setInterval('clock()',1000);
}
clock();

// 作業・休憩時間切り替え
function pomodoro() {
  const now = new Date();
  if (now.getMinutes() === 0 && now.getSeconds() === 0 || now.getMinutes() === 30 && now.getSeconds() === 0) {
    workRest.innerHTML = '作業時間';
    nextStatus.innerHTML = '休憩時間';
    document.body.style.background = 'linear-gradient(125deg, #13f1fc, #0470dc)';
    workRestArea.style.background = 'linear-gradient(125deg, #13f1fc, #0470dc)';
    if (now.getMinutes() === 0) {
      nextTime.innerHTML = now.getHours() + ':25';
    } else if (nnow.getMinutes() === 30) {
      nextTime.innerHTML = now.getHours() + ':55';
    }
  } else if (now.getMinutes() === 25 && now.getSeconds() === 0 || now.getMinutes() === 55 && now.getSeconds() === 0) {
    workRest.innerHTML = '休憩時間';
    nextStatus.innerHTML = '作業時間';
    document.body.style.background = 'linear-gradient(125deg, #DFEC51, #73AA0A)';
    workRestArea.style.background = 'linear-gradient(125deg, #DFEC51, #73AA0A)';
    if (now.getMinutes() === 25) {
      nextTime.innerHTML = now.getHours() + ':30';
    } else if (now.getMinutes() === 55) {
      nextTime.innerHTML = (now.getHours() + 1) + ':00';
    }
  }
  setInterval('pomodoro()',1000);
}
pomodoro();

// 残り時間タイマー
function timer() {
  const now = new Date();
  if (now.getMinutes() >= 0 && now.getMinutes() < 25) {
    minTimer.innerHTML = 25 - now.getMinutes();
  } else if (now.getMinutes() >= 25 && now.getMinutes() < 30) {
    minTimer.innerHTML = 30 - now.getMinutes();
  } else if (now.getMinutes() >= 30 && now.getMinutes() < 55) {
    minTimer.innerHTML = 55 - now.getMinutes();
  } else if (now.getMinutes() >= 55 && now.getMinutes() <= 59) {
    minTimer.innerHTML = 60 - now.getMinutes();
  }
  setInterval('timer()',1000);
}
timer();