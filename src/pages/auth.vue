<script>
import { ref, computed, reactive } from "vue";
import { useStore } from 'vuex'
import useValidate from "@vuelidate/core";
import { required,  minLength } from "@vuelidate/validators";


export default {
  setup (){
    const store = useStore()

    const form = ref({
            login: null,
            password: null
    })
    const rules = computed(() => {
      return {
            login: { required, minLength: minLength(4) },
            password: { required, minLength: minLength(4) },
          }
    })

    const v$ = useValidate(rules, form)

    return {
      v$,
      form,
      store
    }
  },
  methods: {
    sendData (e){
      e.preventDefault()
      this.nextScreen()
    },
    nextScreen (){
    this.v$.$validate() // checks all inputs
    if (!this.v$.$error) { // if ANY fail validation
        alert('Form successfully submitted.')
        this.store.state.screenID = 'Players'
    } 
    else {
        alert('Form failed validation')
    }

     
    }
  }
}

</script>

<template>

<div class="page">
    <div>
        <h3>Авторизация</h3>
        <el-form :model="form" label-width="120px">
            
            <p class="form-item">
                <el-icon><User /></el-icon>
                <el-input v-model="form.login" :class="{invalid: v$.login.$error}" />

            </p>
            
            <p class="form-item">
                <el-icon><Lock /></el-icon>
                <el-input v-model="form.password" type="password" :class="{invalid: v$.password.$error}" />
            </p>
            <p class="form-item send-btn">
               <el-button type="success" round @click="sendData">Войти</el-button>    
            </p>
        </el-form>

    </div>


</div>


</template>

<style scoped>

h3{
  font-weight: bold;
  font-size: 20px;
}

.form-item{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.send-btn{
  justify-content: center;
}
.send-btn button{
  width: 200px;
  font-weight: 600;
}

.invalid{
  border: 1px solid crimson;
}
</style>
