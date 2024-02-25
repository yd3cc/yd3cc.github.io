var link = {
    //开云
    kyPc: 'https://www.an2pz.shop:7700/?agent_code=50385405',                //ky电脑
    kyH5: 'https://www.nlw9b.com:9960/?agent_code=50385405',          //ky h5
    kyApp: 'https://www.keg0l.com:7777/?i_code=50385405',                        //ky aap
    
    kyby: 'https://www.keg0l.com:7777/?i_code=50385405',  //ky beiyongwang
    //客服                                                        
    contact: 'https://www.keg0l.com:7777/?i_code=50385405',                                
    //开云链接
    kylianjie1: 'https://www.keg0l.com:7777/?i_code=50385405',
    kylianjie: 'https://www.keg0l.com:7777/?i_code=50385405',
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
