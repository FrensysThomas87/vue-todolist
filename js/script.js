


var app = new Vue({
 el: '#root',
 data:{
   list:[],
   item: '',
   imgLogo: './img/logo.png'
},
methods:{
  // Metodo che inserisce il nuovo item nell'array
  insertIntoArray: function(){
    if(this.item === '' || this.item === ' '){
      alert('La lista non può essere vuota');
    }else{
      this.list.push(this.item);
      console.log(this.list);
      this.item = '';
      }
    },

    // Metodo che rimuove l'item dall'array
    removeItem:function(index){
      console.log('Index vale ' + index);
      this.list.splice(index, 1)
    }
  }

});
Vue.config.devtools = true;
