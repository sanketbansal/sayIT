// Imports the Google Cloud client library
const PubSub = require('@google-cloud/pubsub');

// Your Google Cloud Platform project ID
const projectId = 'cool-coral-204811';

// Instantiates a client
const pubsubClient = new PubSub({
  projectId: projectId,
});



// The name for the new topic
const topicName = 'depression';

// Creates the new topic
/*pubsubClient
  .createTopic(topicName)
  .then(results => {
    const topic = results[0];
    console.log(`Topic ${topic.name} created.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  }); */


// Create Push Subsription
const options ={
    pushConfig:{
      pushEndpoint: 'https://cool-coral-204811.firebaseapp.com/subs'
    },
};

pubsubClient
    .topic(topicName)
    .createSubscription('capstone',options)
    .then((result) => console.log(`Push Subscription created successfully ${result}`))
    .catch((error) => console.log(`Create Subscription Error ${error}`));