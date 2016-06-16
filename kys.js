//--------------
   $(document).ready(function(){
   $("#add-new-question").click(function(){
   var uus_kysimus = $("#uus_kysimus").val();
   var uus_var1 = $("#uus_var1").val();
   var uus_var2 = $("#uus_var2").val();
   var uus_var3 = $("#uus_var3").val();
   var uus_var4 = $("#uus_var4").val();

   var oige_var = $('input:radio[name=variant]:checked').val();
   var faili_nimi = $('#teema').find('option:selected').text();
   //console.log(faili_nimi);
   //console.log(oige_var);


   // Returns successful data submission message when the entered information is stored in database.
   var uuskysimus = 'uus_kysimus='+ uus_kysimus + '&uus_var1='+ uus_var1 + '&uus_var2='+ uus_var2 + '&uus_var3='+ uus_var3+ '&uus_var4='+ uus_var4+ '&oige_var='+ oige_var+ '&faili_nimi='+ faili_nimi;
   if(uus_kysimus==''||uus_var1==''||uus_var2==''||uus_var3==''||uus_var4==''){
   	alert("Kõik lahtrid peavad olema täidetud!");
  }else if (oige_var===undefined) {
    alert('Vali õige vastusevariant!');
  }else{
   	//AJAX code to submit form.
   	$.ajax({
   			type: "POST",
   			url: "save.php",
   			data: uuskysimus,
   			cache: false,
   			success: function(result){
   								alert("Lisatud");
   									}
   	});
   }
   return false;
   });
   });
//----------------------





(function(){
   "use strict";

   var Lauamang = function(){

     if(Lauamang.instance){
       return Lauamang.instance;
     }
     Lauamang.instance = this;

     this.routes = Lauamang.routes;

     console.log('(Y)');


     this.click_count = 0;
     this.currentRoute = null;
     console.log(this);

      this.question_id = 0;
	    this.questions=[];

      this.init();
   };




   window.Lauamang = Lauamang;

   Lauamang.routes = {
     'statistika-view': {
       'render': function(){
         console.log('statistika');

       }
     },
     'kysimused-view': {
       'render': function(){
         console.log('kysimused');

       }
     },
     'uuedkysimused-view': {
       'render': function(){
           console.log('uued kysimused');
       }
     }
   };

   Lauamang.prototype = {

     init: function(){
       console.log('Funksib');

       //aadressirea vahetus
       window.addEventListener('hashchange', this.routeChange.bind(this));

       if(!window.location.hash){
         window.location.hash = 'statistika-view';
       }else{
         this.routeChange();
       }

      /*Küsimuste kuvamine
      küsimuste failist kätte saamine

      Loendi htmli tekitamine..


      */



       this.bindEvents();

     },

     bindEvents: function(){
       document.querySelector('.add-new-question').addEventListener('click', this.addNewClick.bind(this));

     },

     },


     routeChange: function(event){

       this.currentRoute = location.hash.slice(1);
       console.log(this.currentRoute);

       if(this.routes[this.currentRoute]){
         this.updateMenu();
         this.routes[this.currentRoute].render();


       }else{
         //404
       }


     },

     updateMenu: function() {
       document.querySelector('.active-menu').className = document.querySelector('.active-menu').className.replace('active-menu', '');

       document.querySelector('.'+this.currentRoute).className += ' active-menu';

     }

   }; // Lauamängu lõpp




   window.onload = function(){
     var app = new Lauamang();
   };

})();
