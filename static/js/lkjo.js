var link = {
    //开云
    kyPc: 'http://www.xkty863.net',                //ky电脑
    kyH5: 'http://www.xkty863.net',          //ky h5
    kyApp: 'http://www.xkty863.net',                        //ky aap
    
    kyby: 'http://www.xkty863.net',  //ky beiyongwang
    //客服                                                        
    contact: 'http://www.xkty863.net',                                
    //开云链接
    kylianjie1: 'http://www.xkty863.net',
    kylianjie: 'http://www.xkty863.net',
    kylianjie2: 'https://www.keg0l.com:7777/?i_code=50385405',
}

function getDevice() {
    if (/(Android|IOS|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry)/i.test(navigator.userAgent)) {
        return 'mobile'
    } else {
        return 'pc'
    }
}
const device = getDevice();



function register(key) {
    if (key === 'ky') {
        window.location.href = device == 'pc' ? link.kyPc : link.kyH5;
    } else {
        window.location.href = link[key]
    }
}

function contact () {
    window.open(link.contact);
}
function kylianjie () {
    window.open(link.kylianjie);
}
function kylianjie1 () {
    window.open(link.kylianjie1);
}
function kylianjie2 () {
    window.open(link.kylianjie2);
}
