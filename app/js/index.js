'use strict';

const crypto = require('crypto');

document.getElementById('md5convert').addEventListener('click', function(){
    var text = document.getElementById('md5text').value;
    var md5hash = document.getElementById('md5');
    const hash = crypto.createHash('md5', text).update(text).digest('hex');
    md5hash.innerHTML = hash;
});

document.getElementById('sha1convert').addEventListener('click', function(){
    var text = document.getElementById('shatext').value;
    var sha1hash = document.getElementById('sha');
    const hash = crypto.createHash('sha1', text).update(text).digest('hex');
    sha1hash.innerHTML = hash;
});

document.getElementById('des3convert').addEventListener('click', function(){
    var pass = document.getElementById('des3pass').value;
    var text = document.getElementById('des3text').value;
    var des3hash = document.getElementById('des3');

    const cipher = crypto.createCipher('des3', pass);
    var encrypt = cipher.update(text, 'utf8', 'hex');
    encrypt += cipher.final('hex');

    des3hash.innerHTML = encrypt;
});

document.getElementById('aesconvert').addEventListener('click', function(){
    var pass = document.getElementById('aespass').value;
    var text = document.getElementById('aestext').value;
    var aeshash = document.getElementById('aes');

    const cipher = crypto.createCipher('aes192', pass);
    var encrypt = cipher.update(text, 'utf8', 'hex');
    encrypt += cipher.final('hex');

    aeshash.innerHTML = encrypt;
});

