const squirtleStyle = `
#squirtle {
    background : #4bc5d0;
}

.Squirtle * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.Squirtle *::after,
.Squirtle *::before {
    box-sizing: border-box;
}

.Squirtle {
    position: relative;
}

.head {
    width: 300px;
    height: 280px;
    background: #a6def5;
    border: 3px solid #000;
    position: absolute;
    left: 50%;
    top: 50px;
    margin-left: -160px;
    border-radius: 280px 285px 260px 280px;
    z-index: 9;
}



.headLeft {
    width: 150px;
    height: 90px;
    position: absolute;
    top: 161px;
    right: 159px;
    border-bottom: 3px solid #000;
    border-left: 3px solid #000;
    border-radius: 50%/40% 50% 50% 51%;
    background: #a6def5;
    transform: rotate(37deg);
    z-index: -1;
}

.head::after {
    content: '';
    width: 120px;
    height: 120px;
    background: #a6def5;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    top: 80px;
}

.head::before {
    content: '';
    width: 50px;
    height: 50px;
    background: #a6def5;
    border-radius: 50%;
    position: absolute;
    right: 169px;
    top: 217px;
}

.eyesBox {
    position: relative;
}

.eyes {
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -15px;
    width: 30px;
    height: 34px;
    background: #231200;
    z-index: 5;
}

.eyes.left {
    transform: translateX(-70px);
    border-radius: 45% 46% 47% 48%;
}

.eyes.right {
    transform: translateX(50px);
    border-radius: 48% 47% 46% 45%;
}

.nose {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 4px solid #1d0a04ef;
    border-top: none;
    border-left: none;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    transform: translateX(-14px) rotate(48deg);
}

.nose::after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #1d0a04;
    position: absolute;
    top: 16px;
    left: 16px;
    opacity: .7;
}

.faceBox {
    position: relative;
}

.face {
    position: absolute;
    width: 40px;
    height: 25px;
    border-radius: 45% 45% 50% 50%;
    top: 150px;
    left: 50%;
    margin-left: -20px;
    z-index: 6;
    background: #fec5b2df;
}

.face.left {

    transform: translateX(-100px);


}

.face.right {
    transform: translateX(80px);
}

.soma {
    position: relative;
}

.body {
    position: absolute;

    top: 280px;
    left: 50%;
    margin-left: -100px;
    transform: translateX(-20px);
    width: 210px;
    height: 200px;
    border: 4px solid #000;
    border-radius: 50% 40% 40% 45%;
    background: #ffdfbc;
    overflow: hidden;
    z-index: 8;
}

.big.liftTop {
    position: absolute;
    top: 5px;
    left: -10px;
    width: 100px;
    height: 100px;
    border: 2px solid #0000008f;
    border-radius: 5%;
}

.big.rightTop {
    position: absolute;
    top: 5px;
    right: -6px;
    width: 120px;
    height: 100px;
    border: 2px solid #0000008f;
    border-left: none;
    border-radius: 5%;
}

.big.liftBottom {
    position: absolute;
    top: 102px;
    left: -10px;
    width: 100px;
    height: 140px;
    border: 2px solid #0000008f;
    border-radius: 0%;
    border-top: none;
}

.smallTop {
    position: absolute;
    top: 28px;
    left: 75px;
    transform: rotate(49deg);
    border: 2px solid #0000008f;
    background: #ffdfbc;
    z-index: 9;
    width: 30px;
    height: 30px;
}

.smallRight {
    position: absolute;
    top: 82px;
    right: -29px;
    transform: rotate(51deg);
    border: 2px solid #0000008f;
    background: #ffdfbc;
    z-index: 9;
    width: 50px;
    height: 50px;
}

.smallBottom {
    position: absolute;
    bottom: -22px;
    left: 71px;
    transform: rotate(41deg);
    border: 2px solid #0000008f;
    background: #ffdfbc;
    z-index: 9;
    width: 40px;
    height: 40px;
}

.smallTop {
    position: absolute;
    top: 87px;
    left: -19px;
    transform: rotate(49deg);
    border: 2px solid #0000008f;
    /* background: #ffdfbc; */
    z-index: 9;
    width: 30px;
    height: 30px;
}

.back {
    position: absolute;
    top: 268px;
    left: 50%;
    margin-left: -113px;
    width: 230px;
    height: 210px;
    border: 4px solid #000;
    border-left: none;
    border-radius: 60% 60% 50% 45%;
    background: #c66449;
    z-index: 1;
    overflow: hidden;
}

.topBack {
    position: absolute;
    top: 15px;
    right: 0;
    border: 3px solid #000;
    transform: rotate(240deg);
    width: 50px;
    height: 50px;
    background: ;
}

.bottomBack {
    position: absolute;
    bottom: 15px;
    right: 0;
    border: 3px solid #000;
    transform: rotate(30deg);
    width: 50px;
    height: 50px;
}

.hand {
    position: relative;
}

.leftHand {
    position: absolute;
    top: 325px;
    left: 50%;
    margin-left: -160px;
    transform: rotate(-35deg);
    border-radius: 0 0 0 17px;
    width: 100px;
    height: 35px;
    border: 3px solid #000;
    background: #a7ddf7;
    border-bottom: 4px solid #000;
}

.leftHand::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 14px;
    width: 8px;
    height: 8px;
    background: #a7ddf7;
    z-index: 1;
}

.leftHandOne {
    position: absolute;
    top: -10px;
    left: 11px;
    transform: rotate(-175deg);
    border-radius: 0 0 10px 29px;
    width: 15px;
    height: 10px;
    border: 3px solid #000;
    border-bottom: 3px solid #000;
    border-top: none;
    background: #a7ddf7;
    z-index: 1;
}

.leftHandTow {
    position: absolute;
    top: -6px;
    left: 1px;
    transform: rotate(-148deg);
    width: 10px;
    height: 7px;
    border: 3px solid #000;
    border-radius: 30%;
    border-bottom: 3px solid #000;
    border-top: none;
    border-left: none;
    background: #a7ddf7;
    z-index: 1;
}

.leftHandThree {
    position: absolute;
    top: 5px;
    left: 10px;
    transform: rotate(-45deg);
    width: 10px;
    height: 10px;
    border: 3px solid #000;
    border-radius: 50%;
    border-bottom: 3px solid #000;
    border-top: none;
    border-left: none;
    background: #a7ddf7;
    z-index: 2;
}

.rightHand {
    position: absolute;
    top: 335px;
    left: 50%;
    margin-left: 50px;
    transform: rotate(60deg);
    border-radius: 50% 5px 45px 50%/90%;
    width: 80px;
    height: 35px;
    border: 3px solid #000;
    border-top: 4px solid #000;
    background: #a7ddf7;
    border-bottom: 4px solid #000;
    z-index: 9;
}

.rightHandOne {
    position: absolute;
    top: -9px;
    left: 61px;
    transform: rotate(36deg);
    border-radius: 40%;
    width: 12px;
    height: 12px;
    border: 2px solid #000;
    border-bottom: none;
    border-right: none;
    background: #a7ddf7;
    z-index: 1;
}

.rightHandTow {
    position: absolute;
    top: -7px;
    left: 45px;
    transform: rotate(-140deg);
    border-radius: 50%/20% 50% 50% 50%;
    width: 20px;
    height: 12px;
    border: 2px solid #000;
    border-left: none;
    /* border-right: none; */
    background: #a7ddf7;
    z-index: 1;
}

.rightHandTow::after {
    content: '';
    position: absolute;
    top: -6px;
    left: -8px;
    width: 17px;
    height: 17px;
    background: #a7ddf7;
    border-radius: 50%;
    z-index: 1;
}

.rightHandThree {
    position: absolute;
    top: 14px;
    left: 48px;
    transform: rotate(110deg);
    width: 10px;
    height: 10px;
    border: 3px solid #000;
    border-radius: 50%;
    border-bottom: 3px solid #000;
    border-top: none;
    border-left: none;
    background: #a7ddf7;
    z-index: 2;
}

.leg {
    position: relative;
}

.leftLeg {
    position: absolute;
    top: 435px;
    left: 50%;
    margin-left: -100px;
    width: 50px;
    height: 70px;
    border: 3px solid #000;
    background: #a7ddf7;
    border-radius: 50%/70%;

}

.rightLeg {
    position: absolute;
    top: 435px;
    left: 50%;
    margin-left: 30px;
    width: 50px;
    height: 70px;
    border: 3px solid #000;
    transform: rotate(-6deg);
    border-radius: 50%/60%;
    background: #a7ddf7;
    z-index: 9;
}

.tail {
    position: absolute;
    right: 50%;
    top: 270px;
    margin-right: -210px;
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
}

.leftTail {
    position: absolute;
    bottom: 50px;
    left: 50px;
    width: 100px;
    height: 50px;
    border: 3px solid #000;
    background: #a3dff9;
    border-right: none;
    border-radius: 30%;
    transform: rotate(-57deg);
    z-index: -1;
}

.rightTail {
    position: absolute;
    bottom: 99px;
    left: 107px;
    width: 60px;
    height: 70px;
    border: 3px solid #000;
    background: #a3dff9;
    /* border-right: none; */
    border-radius: 50% 45% 45% 45%;
    transform: rotate(-19deg);
    z-index: -1;
}

.smallTail {
    position: absolute;
    bottom: -2px;
    right: 15px;
    width: 25px;
    height: 30px;
    border: 3px solid #000;
    border-radius: 50% 45% 45% 50%;
    transform: rotate(55deg);
    background: #a3dff9;
    border-right: none;
    z-index: 1;
}

.leftTail2 {
    position: absolute;
    top: 89px;
    right: 59px;
    width: 35px;
    height: 8px;
    /* border: 1px solid red; */
    border-radius: 50% 45% 45% 50%;
    transform: rotate(30deg);
    background: #a3dff9;
    /* border-right: none; */
    z-index: 1;
}
`

let html = document.querySelector('#html')
let text = document.querySelector('#text')

let styleLength = 1

html.innerHTML = squirtleStyle.substring(0, styleLength)
text.innerText = squirtleStyle.substring(0, styleLength)

let time = 50

const run = () => {
    styleLength += 1
    if (styleLength > squirtleStyle.length) {
        window.clearInterval(id)
        return
    }

    html.innerHTML = squirtleStyle.substring(0, styleLength)
    text.innerText = squirtleStyle.substring(0, styleLength)
    text.scrollTop = text.scrollHeight
}

let id = setInterval(run, time)

let Pause = () => {
    window.clearInterval(id)
}

let play = () => {
    return id = setInterval(run, time)
}

btnPause.onclick = () => {
    Pause()
}

btnPlay.onclick = () => {
    play()
}

btnSlow.onclick = () => {
    Pause()
    time = 100
    play()
}

btnNormal.onclick = () => {
    Pause()
    time = 50
    play()
}

btnFast.onclick = () => {
    Pause()
    time = 0
    play()
}

btnAll.onclick = () => {
    Pause()
    html.innerHTML = ''
    text.innerText = ''
    html.innerHTML = squirtleStyle
    text.innerText = squirtleStyle
    text.scrollTop = text.scrollHeight
}

btnRenew.onclick = () => {
    Pause()
    styleLength = 1
    html.innerHTML = ''
    text.innerText = ''
    play()
}