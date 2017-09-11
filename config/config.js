var  config = {
    desarrollo:{
        DAC: {
            host:'192.168.57.76',
            puerto:'5432',
            usuario:'ddi',
            password:'ddi123',
            base:'DDI'
        },
    },
    UAT:{
        DAC: {
            host:'',
            puerto:'5432',
            usuario:'',
            password:'',
            base:''
        },
    },
    PROD:{
        DAC: {
            host:'',
            puerto:'5432',
            usuario:'',
            password:'',
            base:''
        },
    }

};



module.exports = config;
