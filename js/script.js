


var app = new Vue({
 el: '#root',
 data:{
   list:[],
   item: '',

},
methods:{
  insertIntoArray: function(){
      this.list.push(this.item);
      console.log(this.list);
      this.item = '';
    },

    removeItem:function(index){
      this.list.splice(index, 1)
    }
  }

});
Vue.config.devtools = true;
