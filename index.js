var cnn = require('./cnn');
    cnn((err)=>{
        if(err) console.error(err);
        console.log('ended');
    })
