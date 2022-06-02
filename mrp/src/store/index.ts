// Importaciones del archivo
import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import Cookies from 'js-cookie';
const crypto = require('crypto');

//Uso de Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
  
    ],
    state: {
        materias: ''
    },
    getters: {
        getMaterias: (state) => {
            return state.materias
          }    
    },
    mutations: {
        setMaterias(state, materias){
            state.materias = materias;
        }    
    },
    actions: {
        getMaterias({commit, state}, data){
            return new Promise((resolve, reject) => {
                axios.get('http://34.136.247.22:3000/mrp/obtieneMaterias',{
                    headers: {
            
                    }
                })
                .then((response: any) => {
                    resolve(response.data);
                })
                .catch((error: any) => {
                    resolve({replyCode: 400, replyText: error.message, data: []});
                });
            })
        },

        validaUsuario({commit, state}, data){
            return new Promise((resolve, reject) => {
                axios.post('http://34.136.247.22:3000/mrp/validaUsuarioProfesor', data, {
                    headers: {
            
                    }
                })
                .then((response: any) => {
                    resolve(response);
                })
                .catch((error: any) => {
                    resolve({replyCode: 400, replyText: error.message, data: []});
                });
            })
        },        

        registraProfesor({commit, state}, data){
            return new Promise((resolve, reject) => {
                axios.post('http://34.136.247.22:3000/mrp/creaProfesor', data, {
                    headers: {
            
                    }
                })
                .then((response: any) => {
                    resolve(response.data);
                })
                .catch((error: any) => {
                    resolve({replyCode: 400, replyText: error.message, data: []});
                });
            })
        },
        
        getFormato({commit, state}){
            return new Promise((resolve, reject) => {
                axios.post('http://34.136.247.22:3000/mrp/descargaFormato', {
                    fileName: 'Formato.xlsx'
                }, {
                    responseType: 'blob'
                })
                .then((response: any) => {
                    resolve(response.data);
                })
                .catch((error: any) => {
                    resolve({replyCode: 400, replyText: error.message, data: []});
                });
            })
        },

        cargaExamen({commit, state}, data){
            return new Promise((resolve, reject) => {
                axios.post('http://34.136.247.22:3000/mrp/cargaExamen', data, {
                    headers: {

                    }
                })
                .then((response: any) => {
                    resolve(response.data);
                })
                .catch((error: any) => {
                    resolve({replyCode: 400, replyText: error.message, data: []});
                });
            })
        },

        generaToken({commit, state}, data){
            return new Promise((resolve, reject) => {
                axios.post('http://34.136.247.22:3000/mrp/generaToken', data, {
                    headers: {

                    }
                })
                .then((response: any) => {
                    resolve(response);
                })
                .catch((error: any) => {
                    resolve({replyCode: 400, replyText: error.message, data: []});
                });
            })
        },

        validaToken({commit, state}, data){
            return new Promise((resolve, reject) => {
                axios.post('http://34.136.247.22:3000/mrp/validaToken', data, {
                    headers: {

                    }
                })
                .then((response: any) => {
                    resolve(response);
                })
                .catch((error: any) => {
                    resolve({replyCode: 400, replyText: error.message, data: []});
                });
            })
        }
    },

    //Funciones

    modules: {
    }
})

