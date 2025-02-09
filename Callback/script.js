'use strict'

// callback = bu bitta  function bajarilgandan so'ng keyin ishlaydigan function

function greeting (callback) {
    console.log('Hello Students')
    callback()
}

greeting(() => console.log('Are you ready today'))


function bye(callback) {
    console.log('Good Bye');
    callback()
}

bye(function nimadir() {
    console.log('Bye');
})