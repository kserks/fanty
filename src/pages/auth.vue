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
    this.v$.$validate() 
    if (!this.v$.$error) { 
        if(this.form.login==="test"&&this.form.password==="test")
        this.store.state.screenID = 'Players'
    } 
    else {
       
    }

     
    }
  }
}

</script>

<template>

<div class="page auth">
    <div class="form">
        <h3>Авторизация</h3>
        <el-form :model="form" class="form__group">
            
            <p class="form-item">
                <el-icon><User /></el-icon>
                <el-input v-model="form.login" :class="{invalid: v$.login.$error}" />

            </p>
            <p class="form-item">
                <el-icon><Lock /></el-icon>
                <el-input v-model="form.password" type="password" :class="{invalid: v$.password.$error}" />
            </p>
            <p class="form-item send-btn">
               <el-button :class="{disable: !(form.login&&form.password) }" type="success" round @click="sendData">Войти</el-button>    
            </p>
        </el-form>

    </div>


</div>


</template>

<style scoped>

.form{
  width: 300px;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
  border-radius: 8px;
  padding: 30px;
}
.auth{
  display: flex;
  justify-content: center;
  align-items: center;
}
.form__group{
  padding-top: 15px;
}
.form-item{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.send-btn{
  justify-content: flex-end;
  padding-top: 20px;
}
.send-btn button{
 
  font-weight: 600;
}

.el-icon{
  font-size: 26px;
  margin-right: 15px;
}

</style>
