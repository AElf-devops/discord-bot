// const sequelize = require('./db');
const fs = require('fs')
require("dotenv").config()
const Sentry = require("@sentry/node");
const { ProfilingIntegration } = require("@sentry/profiling-node");
// const { UserTg } = require('./models');
const { operateBotFromPlatForm } = require('./utils')

Sentry.init({
  dsn: "https://1bccb6edb9bc1757a0262031e0e2ae40@o4505006413840384.ingest.us.sentry.io/4506902310223872",
  integrations: [
    new ProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

try{
    operateBotFromPlatForm(process.env.platForm, process.env.robotToken, process.env.clientId)
}catch(e){
    Sentry.captureException(e);
    Sentry.flush(2000);
}



// const sendToken = async(chatId, address, isInsertFlag) => {
//     try{
//         sendMsg(chatId, 'Transferring...')
//         // TODO:
//         // await send token by contracts
//         // const txStatus = getTxRs(transactionId)

//         if(isInsertFlag){
//             await insertItem(chatId, address, config.platForm, transactionId, txStatus)
//         }else {
//             if(txStatus === 'mined'){
//                 await updateItem(chatId, address)
//             } 
//         }

//         if(txStatus === 'mined'){
//             sendMsg(chatId, `Sending 1 to ${address}, Please pay attention to check`)
//         } else {
//             sendMsg(chatId, 'Transaction is not mined yet, please try again later')
//         }
//     }catch(e){
//         throw Error('insert or update data fail')
//     }
// }


// const start = async () => {
   
//     try {
//         await sequelize.authenticate()
//         await sequelize.sync()
//     } catch (e) {
//         console.log('sequelize error', e)
//     }

// }

// start()
