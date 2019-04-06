<template>
    <div>
        <div class="topbar">
            <router-link to="phoneRecordNew">
                <button>
                    New Phone Record
                </button>
            </router-link>
        </div>
        <div class="card-group">
            <ul v-for="phoneRecord in PhoneRecords" v-bind:key="phoneRecord.id">
                <li>
                    <div class="card-title">
                        <h5>{{phoneRecord.name}}</h5>
                        <h6>{{phoneRecord.time}}</h6>
                        <h6>{{phoneRecord.property}}</h6>
                    </div>
                    <div class="QA">
                        <div>Question: {{phoneRecord.question}}</div>
                        <div>Resolution: {{phoneRecord.resolution}}</div>
                    </div>
                </li>
            </ul>
            <router-link class="secondary-content">
                <button type="button" class="btn btn-primary">
                    Edit
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'PhoneRecords',
    data() {
        return {
            PhoneRecords: [],
        }
    },
    created () {
        db.collection('PhoneRecords').get().then
            (querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'time': doc.data().time,
                        'name': doc.data().name,
                        'question': doc.data().question,
                        'resolution': doc.data().resolution,
                        'property': doc.data().property
                    }
                    this.PhoneRecords.push(data)
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
    width: 95%;
    margin: auto;
    
}
ul{ border: 1px solid black;
    width: 85%;
    text-align: left;
    margin: auto;
    margin-bottom: 5px;
    display: flex;
    padding: 1%
}
li{
    list-style: none;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 90%;
}
.card-title{
    grid-column: 0 / 1;
    width: 45%;
}
.qa{
    grid-column: 1 / 2;
    align-self: flex-end;
    align-content: flex-end;
    width: 55%;
}
.text-muted{
    float: right;
}
h5{
    float: left;
}
</style>