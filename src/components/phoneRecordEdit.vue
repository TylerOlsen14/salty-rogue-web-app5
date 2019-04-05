<template>
    <div>
        <h3>Edit Phonecall Record</h3>
        <div class="collection with-header">
            <form @submit.prevent="updateRecord" class="col s12">
                <div class="row">
                    <div class="input-field">
                        <input type="number" v-model="time" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                        <input type="text" v-model="name" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                        <input type="text" v-model="property" disabled>
                    </div>
                </div>
                <div class="row">
                    Question
                    <div class="input-field">
                        <!-- <textarea type="text" v-model="question" cols="30" rows="10" v-model="question" required></textarea> -->
                        <textarea type="text" v-model="question" cols="30" rows="10" required></textarea>
                    </div>
                </div>
                <div class="row">
                    Resolution
                    <div class="input-field">
                        <!-- <textarea type="text" v-model="resolution" cols="30" rows="10" v-model="resolution" required></textarea> -->
                        <textarea type="text" v-model="resolution" cols="30" rows="10" required></textarea>
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
    name: 'phoneRecordEdit',
    data() {
        return {
            time: null,
            name: null,
            property: null,
            question: null,
            resolution: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('PhoneRecords').where('time', '==', to.params.time).get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.time = doc.data().time
                    vm.name = doc.data().name
                    vm.property = doc.data().property
                    vm.question = doc.data().question
                    vm.resolution = doc.data().resolution
                })
            })
        })

    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('students').where('student_id', '==', this.$route.params.student_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.time = doc.data().student_id
                    this.name = doc.data().name
                    this.property = doc.data().property
                    this.question = doc.data().question
                    this.resolution = doc.data().resolution
                })
            })
        },
        updateRecord () {
            db.collection('students').where('student_id', '==',
            this.$route.params.student_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        time: this.time,
                        name: this.name,
                        property: this.property, 
                        question: this.question,
                        resolution: this.resolution
                    })
                    .then(() => {
                        this.$router.push({name: 'phoneRecords', params: {time: this.time}})
                    })
                })
            })
        }
    }
}
</script>
