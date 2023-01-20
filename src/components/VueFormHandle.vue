<template>
    <div>
        <h1>Form Handle</h1>
        <div><pre>{{ JSON.stringify(formValues, null, 2) }}</pre></div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" v-model.trim.lazy="formValues.name">
            </div>
            <div>
                <label for="profile">Profile</label>
                <input type="text" id="profile" v-model="formValues.profileSummery">
            </div>
            <div>
                <label for="country">Country</label>  
                <select id="country" v-model="formValues.country" >
                    <option value="">Select a country</option>
                    <option value="india">India</option>
                    <option value="vietname">Vietname</option>
                    <option value="singapore">Singapore</option>
                    <option value="thailand">Thailand</option>
                </select>
            </div>
            <div>
                <label for="job-location">Job location</label>  
                <select id="job-location" multiple v-model="formValues.jobLocation" >
                    <!-- <option value="">Select a job location</option> -->
                    <option value="india">India</option>
                    <option value="vietname">Vietname</option>
                    <option value="singapore">Singapore</option>
                    <option value="thailand">Thailand</option>
                </select>
            </div>
            <div>
                <input type="checkbox" id="remote-work" v-model="formValues.remoteWork" true-value="Yes" false-value="No" >
                <label for="remoteWork">Open to remote work?</label>
            </div>
            <div>
                <label>Skill Set</label>
                <input type="checkbox" id="html" value="html" v-model="formValues.skillSet">
                <label for="html">HTML</label>
                <input type="checkbox" id="css" value="css" v-model="formValues.skillSet">
                <label for="css">CSS</label>
                <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet">
                <label for="javascript">Javascript</label>
            </div>
            <div>
                <label>Year of Experience</label>
                <input type="radio" id="0-2" value="0-2" v-model="formValues.yearOfExperience">
                <label for="html">0-2</label>
                <input type="radio" id="3-5" value="3-5" v-model="formValues.yearOfExperience">
                <label for="css">3-5</label>
                <input type="radio" id="6-10" value="6-10" v-model="formValues.yearOfExperience">
                <label for="javascript">6-10</label>
                <input type="radio" id="10+" value="10+" v-model="formValues.yearOfExperience">
                <label for="javascript">10+</label>
            </div>
            <div>
                <label for="age">Age</label>
                <input type="number" id="age" v-model.number="formValues.age">
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'VueFormHandle',
    data() {
        return {
            formValues: {
                name: '',
                profileSummery: '',
                country: '',
                jobLocation: '',
                remoteWork: 'No',
                skillSet: [],
                yearOfExperience: '',
                age: null,
            }
        }
    },
    methods: {
        submitForm() {
            // console.log(event);
            // event.preventDefault();
            console.log(this.formValues);

        }
    },
}
</script>
<style lang="">
    
</style>