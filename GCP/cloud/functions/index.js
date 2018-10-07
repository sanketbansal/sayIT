const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Pubsub = require('@google-cloud/pubsub');

admin.initializeApp(functions.config().firebase);
const db= admin.firestore();
const pubsub = new Pubsub();


exports.tags =functions.https.onRequest((request,response) => {
    console.log(request.body);
    let id = 'sanketbansal57@gmail.com';
    let token = 'dGaSO2rzkQQ:APA91bGvFjzGf10we3j8Ls3GcNC1zjTLjdj7o0AO0R0zRe-ArpWCX5arhPPD6HEIqXwgpA9DUtc-XVKE2UEmeg6TXjpiRozl2xfMxb0PKE05ep1X2BRis5i8YLozmcYzJQ4GfRrjGWy2';
    let topics = ['depression'];

    // Client topic subscription
    topics.forEach(topic => {
        admin.messaging().subscribeToTopic(token,topic)
        .then((result) => { return console.log(`Subscribed Succesfully`); })
        .catch((error) => {console.log(`Tags Function Error ${error}`)}) 
    });

    db.collection('sayit').doc(id).set({
        topics: topics
    }, {merge: true })
        .then(() => {return console.log('Topics wriiten Succesfully')})
        .catch((err) =>{ return console.log(`Tag Function error ${err}`)})

    response.setHeader('Access-Control-Allow-Origin','*' );
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.send({result:'Tagging Done'});
});

exports.publish = functions.https.onRequest((request,response) => {

    console.log(request.body);
    const data = JSON.stringify({post: 'i am feeling depressed'});
    const dataBuffer = Buffer.from(data);

    pubsub
        .topic('depression')
        .publisher()
        .publish(dataBuffer)
        .then((messageId) => {
            console.log(`Message ${messageId} published.`);
            return console.log(`Message published.`);
        })
        .catch((err) => {
            console.error('Publish function ERROR:', err);
        });

    response.setHeader('Access-Control-Allow-Origin','*' );
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.send({result:'Published Done'})
});

exports.subscription = functions.https.onRequest((request,response) => {
    console.log(request.body);
    console.log('subscribed');
    response.setHeader('Access-Control-Allow-Origin','*' );
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.send('Subscribed Done')
});

exports.depression = functions.pubsub.topic('depression').onPublish((msg) =>{
    const data = msg ? Buffer.from(msg.data, 'base64').toString() : null;
    const jdata = JSON.parse(data);

    const message = {
        //data: jdata,
        notification: {
            title: 'SayIt',
            body: jdata.post
        },
        topic: 'depression'
    };

    admin.messaging().send(message)
        .then((result) => {
            // Result is a message ID string.
            return console.log('Successfully sent message:', result);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });

    console.log('Depression trigger',data);
});

exports.anxiety = functions.pubsub.topic('anxiety').onPublish((msg) =>{
    const data = msg ? Buffer.from(msg.data, 'base64').toString() : null;
    const jdata = JSON.parse(data);

    const message = {
        data: jdata,
        topic: 'anxiety'
    };

    admin.messaging().send(message)
        .then((result) => {
            // Result is a message ID string.
            return console.log('Successfully sent message:', result);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });

    console.log('Anxiety trigger',data)
});