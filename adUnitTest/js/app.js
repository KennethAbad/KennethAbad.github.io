carousel = (function(){

    let box = document.querySelector('.carousel');   //Here we
    let next = box.querySelector('.next');           //grab all
    let prev = box.querySelector('.previous');       //the elements
    let items = box.querySelectorAll('.content li'); // with querySelector.
    let counter = 0;        // create a counter which keeps track of the item currently shown in the carousel.
    let amount = items.length; // stores the number items in the carousel in order to loop.
    let current = items[0]; // set the current item as the first item in the carousel.

    if (!document.querySelector || !('classList' in document.body)) {
        return false;
    }

    box.classList.add('active');

    function navigate(direction) { // the navigate function takes a parameter 'direction' which defines what direction to go.

      current.classList.remove('current'); // remove the 'current' class from the carousel item so we can hide it.
      counter = counter + direction;
      if (direction === -1 && 
          counter < 0) { 
        counter = amount - 1; 
      }                         // modify the counter but also set restraints so that it doesn't pass it's boundaries.
      if (direction === 1 &&    // for each case it will move to the other extreme, making the carousel itself endlessly rotate.
          !items[counter]) { 
        counter = 0;
      }
      current = items[counter]; // set the new current item from the carousel.
      current.classList.add('current'); // add the 'current' class to show the item.
    }
    // these event handlers give navigation to the buttons.
    next.addEventListener('click', function(ev) {
      navigate(1);
    });

    prev.addEventListener('click', function(ev) {
      navigate(-1);
    });

    navigate(0);  // show the first item in the carousel by calling navigate with the value '0'.
  })();

