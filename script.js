const time = document.getElementById('time');
const workRestArea = document.getElementById('work-rest-area');
const workRest = document.getElementById('work-rest');
const minTimer = document.getElementById('min-timer');
const secTimer = document.getElementById('sec-timer');

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
  time.innerHTML = (now.getMonth() + 1) + '月' + now.getDate() + '日' + youbi[now.getDay()] + '曜日 ' + set2fig(now.getHours()) + '時' + set2fig(now.getMinutes()) + '分' + set2fig(now.getSeconds()) + '秒';
  setInterval('clock()',1000);
}
clock();

function pomodoro() {
  const now = new Date();
  if (now.getMinutes() >= 0 && now.getMinutes() < 25 || now.getMinutes() >= 30 && now.getMinutes() < 55) {
    workRest.innerHTML = '作業時間';
    document.body.style.background = 'linear-gradient(125deg, #13f1fc, #0470dc)';
    workRestArea.style.background = 'linear-gradient(125deg, #13f1fc, #0470dc)';
    if (now.getMinutes() >= 0 && now.getMinutes() < 25) {
      minTimer.innerHTML = 24 - now.getMinutes();
    } else if (now.getMinutes() >= 30 && now.getMinutes() < 55) {
      minTimer.innerHTML = 54 - now.getMinutes();
    }
  } else if (now.getMinutes() >= 25 && now.getMinutes() < 30 || now.getMinutes() >= 55 && now.getMinutes() <= 59) {
    workRest.innerHTML = '休憩時間';
    document.body.style.background = 'linear-gradient(125deg, #DFEC51, #73AA0A)';
    workRestArea.style.background = 'linear-gradient(125deg, #DFEC51, #73AA0A)';
    if (now.getMinutes() >= 25 && now.getMinutes() < 30) {
      minTimer.innerHTML = 29 - now.getMinutes();
    } else if (now.getMinutes() >= 55 && now.getMinutes() <= 59) {
      minTimer.innerHTML = 59 - now.getMinutes();
    }
  }
  secTimer.innerHTML = 59 - now.getSeconds();
  setInterval('pomodoro()',1000);
}
pomodoro();
