<template>
    <div id="container" class="collection with-header">
        <h3>New Phone Record</h3>
        <div class="row">
            <form @submit.prevent='saveRecord' class="col s12">
                <div class="data1">
                    <div class="row">
                        <div class="input-field col s12" id="inputLabel">
                            <label>Time: </label>
                            <input type="datetime" v-model="time" id="text-input" required><!-- Going to automate this one -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12" id="inputLabel">
                            <label>Name: </label>
                            <input type="text" v-model="name" id="text-input" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12" id="inputLabel">
                            <label>Property: </label>
                            <input type="text" v-model="property" id="text-input" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea type="text" v-model="question" rows="10" required></textarea>
                        <label>Question</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea type="text" v-model="resolution" rows="10" required></textarea>
                        <label>Resolution</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/phoneRecords" class="btn grey">Back</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'NewRecord',
    data() {
        return {
            time: null,
            name: null,
            property: null,
            question: null,
            resolution: null
        }
    },
    methods: {
        saveRecord() {
            db.collection('PhoneRecords').add({
                time: this.time,
                name: this.name,
                property: this.property,
                question: this.question,
                resolution: this.resolution
            })
        .then(docRef => this.$router.push('/phoneRecords'))
        // v-bind:to="{name: 'ViewStudent', params: {student_id: student.student_id}}
        .catch(error => console.log(err))
        },
    
    }
}
</script>
<style>
#container{
    background-color: white;
}
.data1{
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-self: auto;
}
#inputLabel{
    display: flex;
    align-self: flex-start;
    width: 100px;
}
input{
    display: flex;
    align-self:flex-end;
}
form{
    margin: auto;
    width: 85%;
    
}
</style>
