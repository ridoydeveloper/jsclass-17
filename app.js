
// JS Tabs

const tab_menu = document.querySelectorAll('.rid-tab .tab-manu ul li a');
const tab_pane_all = document.querySelectorAll('.rid-tab .tab-pane');


tab_menu.forEach(item =>{


item.addEventListener('click', function(e){
 
    e.preventDefault();

    tab_menu.forEach(item =>{

        item.classList.remove('active');
    });

    item.classList.add('active');


   const tab_pane = document.querySelector(this.getAttribute('href'))

   tab_pane_all.forEach(item => {

    item.classList.remove('active');

   });
   tab_pane.classList.add('active');




});


});

// Theme Options clone

const tabs_menu = document.querySelectorAll('.side-tab .tabs-manu ul li a');

const tabs_pane_all = document.querySelectorAll('.side-tab .tabs-pane');


tabs_menu.forEach(item => {


item.addEventListener('click', function(e){
 
    e.preventDefault();


    const tabs_pane = document.querySelector(this.getAttribute('href'));

    tabs_pane_all.forEach(item => {

        item.classList.remove('activee');

    });
    tabs_pane.classList.add('activee');
    

});

});
