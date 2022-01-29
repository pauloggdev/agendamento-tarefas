import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { baseApiUrl } from "@/config/global";


Vue.use(Vuex)

/* eslint-disable */
export default new Vuex.Store({
    state: {
        tarefas: []
    },
    getters: {
        tarefas(state) {
            return state.tarefas;
        },
        status() {
            return ["PENDENTE", "ATIVO", "FEITO"]
        }
    },
    mutations: {
        listarTarefas(state, tarefas) {
            state.tarefas = tarefas
        }
    },
    actions: {
        listarTarefas(context) {
            axios.get(`${baseApiUrl}/tarefas`).then(response => {
                if (response.status == 200) {
                    context.commit('listarTarefas', response.data)
                }
            }).catch(error => {
                /* eslint-disable */
                console.log(error)
            })
        },
        adicionarTarefa(context, data) {


            
            // const config = {
            //     headers: {
            //       "content-type": "multipart/form-data",
            //     },
            //   };
              
            //   let formData = new FormData();
            //   var tarefa = JSON.stringify(data.tarefa);
            //   formData.append("tarefa", tarefa);
            //   formData.append("arquivos", data.arquivos);

             
              
            axios.post(`${baseApiUrl}/tarefas`, data.tarefa).then(response => {
                if (response.status == 200) {
                    context.dispatch('listarTarefas')
                }
            }).catch(error => {
                /* eslint-disable */
                console.log(error)
            })
        },
        editarTarefa(context, tarefa) {
            axios.post(`${baseApiUrl}/tarefa/${tarefa.id}`, tarefa).then(response => {
                if (response.status == 200) {
                    context.dispatch('listarTarefas')
                }

            }).catch(error => {
                /* eslint-disable */
                console.log(error)
            })
        },
        deletarTarefa(context, tarefaId) {
            axios.delete(`${baseApiUrl}/tarefa/${tarefaId}`).then(response => {
                if (response.status == 200) {
                    context.dispatch('listarTarefas')
                }

            }).catch(error => {
                /* eslint-disable */
                console.log(error)
            })
        }
    }
});