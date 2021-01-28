


var app = new Vue({
 el: '#root',
 data:{
   list:[],
   item: '',
   imgLogo: './img/logo.png'
},
methods:{
  insertIntoArray: function(){
      this.list.push(this.item);
      console.log(this.list);
      this.item = '';
    },

    removeItem:function(index){
      console.log('Index vale ' + index);
      this.list.splice(index, 1)
    }
  }

});
Vue.config.devtools = true;
