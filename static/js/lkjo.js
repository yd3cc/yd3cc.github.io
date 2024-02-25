var link = {
    //开云
    kyPc: 'https://www.tj5nsc.com:9512/register/?i_code=82761710',                //ky电脑
    kyH5: 'https://www.sectqu.com:9518/entry/register/?i_code=82761710',          //ky h5
    kyApp: 'https://www.r5kmr6.xyz:9520/?i_code=82761710',                        //ky aap
    
    kyby: 'https://www.r5kmr6.xyz:9520/?i_code=82761710',  //ky beiyongwang
    //客服                                                        
    contact: 'https://www.r5kmr6.xyz:9520/?i_code=82761710',                                
    //开云链接
    kylianjie1: 'https://www.tkj5ux.com:9501/register/?i_code=82761710',
    kylianjie: 'https://www.vahts.vip:8553/entry/register/?i_code=82761710',
    kylianjie2: 'https://www.i9zpc.vip:9018/?i_code=82761710',
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