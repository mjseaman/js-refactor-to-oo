$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>');
  });

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  });
});

function Die() {
  this.value = 0;
}

Die.prototype.render = render;
Die.prototype.roll = roll;
Die.prototype.add_to = add_to;

function render() {
  return '<div class="die">' + this.value + '</div>'
}

function roll() {
  this.value = Math.floor((Math.random()*6)+1)
}

function add_to(element) {
  element.append(this.render)
}