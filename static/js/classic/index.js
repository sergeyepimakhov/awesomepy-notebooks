import { observeMutations } from "./mutations.js"

$(document).ready(function() {
    observeMutations();

    // Alt+P
    $(document).keydown(function (eventObj){
        // alert("Keydown: The key is: "+getKey(eventObj));
        KeyPress(eventObj);
     });

    // replace anchor-link
    // $('a.anchor-link').html('<i class="fas fa-anchor fa-xs"></i>');

    // replace button
    console.log('modifying the run button');
    // $('button.thebelab-run-button').html('<i class="fas fa-link"></i>');
    // $('button.thebelab-run-button').remove();

    // remove prompts
    $('div.prompt').remove();

    // on click select to unselected and back
    $('div.cell.code_cell').on('click', function(){
        $('div.cell.code_cell').removeClass('selected').addClass('unselected');
        $(this).removeClass('unselected').addClass('selected');
    });

    // TODO: on "Run" click jump to the next cell
    // $('div.cell.code_cell.selected').next().find('div.cell.code_cell').addClass('selected');

    // TODO: double click on output -> disable it
});

function getKey(key) {
    if ( key == null ) {
        let keycode = event.keyCode;
    // To Mozilla
    } else {
        let keycode = key.keyCode;
    }
    // Return the key in lower case form
    if (keycode ==27){
        //alert(keycode);
        pauseSound();
        return false;
    }
    //return String.fromCharCode(keycode).toLowerCase();
}

function KeyPress(e) {
      // var evtobj = window.event? event : e
      if (e.shiftKey && e.keyCode == 9) {
          // Call your method Here
          //alert(e.keyCode);
          console.log("Pressed"+e.keyCode);
      console.log($('div.cell.code_cell.selected').nextAll('div.cell.code_cell.unselected')[0]);
      $('div.cell.code_cell.selected').nextAll('div.cell.code_cell.unselected')[0].focus();
      }
      //else if (evtobj.shiftKey && event.evtobj) alert("something else " + event.evtobj);
};

//function clicked(e) {
//    console.log(e.shiftKey);
//    console.log(e.key);
//    if (e.shiftKey && e.key === 'Tab') {
//        alert("Shift+Tab")
//        // Do whatever, like e.target.previousElementSibling.focus();
//    }
//    else if (e.shiftKey && e.key) {
//        alert("Shift+"+e.key)
//    }
//};