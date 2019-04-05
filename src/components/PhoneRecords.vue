<template>
    <div>
        <div class="topbar">
            <router-link to="phoneRecordsNew">
                <button>
                    New Phone Record
                </button>
            </router-link>
        </div>
        <div class="card-group">
            <div class="card-body">
                <div>
                    <h5 class="card-title">Name, Time</h5>
                </div>
                <div>
                    <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. </p>
                    <p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. "How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn't get into that position. However hard he threw himself onto his right, he always rolled back to where he was. He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. "Oh, God", he thought, "what a strenuous career it is that I've chosen! Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them. It can all go to Hell!"</p>
                </div>
                <div>
                    <p class="card-text"><small class="text-muted">Last updated: 3 mins ago</small></p>
                    <router-link class="secondary-content">
                        <button type="button" class="btn btn-primary">
                            Edit
                        </button>
                    </router-link>
                </div>
                <div class="card-body" v-for="phoneRecord in PhoneRecords" v-bind:key="phoneRecord.time">
                    <div>
                        <h5 class="card-title">Name, Time{{phoneRecord.name}}, {{phoneRecord.time}}</h5>
                    </div>
                    <div>
                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. </p>
                        <p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. "How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn't get into that position. However hard he threw himself onto his right, he always rolled back to where he was. He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. "Oh, God", he thought, "what a strenuous career it is that I've chosen! Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them. It can all go to Hell!"</p>
                    </div>
                    <div>
                        <p class="card-text"><small class="text-muted">Last updated: 3 mins ago</small></p>
                        <router-link class="secondary-content">
                            <button type="button" class="btn btn-primary">
                                Edit
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'PhoneRecords',
    data() {
        return {
            phoneRecords: [],
        }
    },
    created () {
        db.collection('phoneRecords').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'time': doc.time,
                    'name': doc.data().name,
                    'question': doc.data().question,
                    'resolution': doc.data().resolution,
                }
                this.phoneRecords.push(data)
            })
        })
    },
}
</script>

<style scoped>
button{
    margin: 10px;
}
.topbar{
    margin: auto;
    text-align: center;
}
.card-group{
    width: 80%;
    margin: auto;
}
.card-body{
    border: 1px solid black;
    width: 75%;
    text-align: left;
    display: flex;
    margin: 25px;
    padding: 1%
}

.card-title{
    width: 20%;
}
.text-muted{
    float: right;
}
h5{
    float: left;
}
</style>