<template>
    <div id="registrations">
        <div class="summary">
            <h3>Registrations</h3>
            <h5>Total: {{ total }}</h5>
        </div>
        <hr>
        <div class="row" v-for="registration in registrations">
            <h4>{{ registration.name }}</h4>
            <span @click="unregister(registration)">(Unregister)</span>
            <div class="date">{{ registration.date }}</div>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';


    export default {
       
        methods: {
            unregister(registration) {
                // para o caso de querer passar um objeto no commit e preciso lembrar de colocar payload no store
                this.$store.dispatch({
                    type:'unregistered', 
                    userId: registration.userId
                })
            }
        },
        computed: 
            // mapeando todos os getter em um unico local
            {...mapGetters({
                registrations: "registrations",
                total: "totalRegistrations"
            }),
            // para adicionar novos metodos, precisamos do ... no mapGetters
            // e tambem instalar a dependencia 'babel-preset-state-2'
            // sudo npm install --save-dev babel-preset-state-2 
            // adicionalo no .babelrc
            additionalMethodExample(){

            }
        }
            /* Podemos utilizar a forma abaixo tambem
            registrations(){
                return this.$store.getters.registrations;
            },
            total() {
                return this.$store.getters.totalRegistrations;
            }*/
        
    }
</script>

<style scoped>
    #registrations {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
        text-align: left;
    }

    .summary {
        text-align: center;
    }

    .row h4 {
        display: inline-block;
        width: 30%;
        margin: 0 0 10px 0;
        box-sizing: border-box;
    }

    .row span {
        width: 30%;
        color: red;
        cursor: pointer;
    }

    .row span:hover {
        color: darkred;
    }

    .date {
        display: inline-block;
        width: 38%;
        text-align: right;
        box-sizing: border-box;
    }
</style>