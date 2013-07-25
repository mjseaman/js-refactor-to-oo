$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    dice.push(new Die());
    render_all(dice,$('.dice'));
  });

  $('#roller button.roll').on('click', function() {
    $.each(dice,function(key,value) {
      value.roll();
    });
    render_all(dice,$('.dice'));
  });
});

var dice = []

// Dice.prototype = new Array

// Dice.prototype.render

function Die() {
  this.value = 0;
}

function render_all(collection,dom_element) {
  dom_element.empty();
  $.each(collection,function(key,value) {
      value.add_to(dom_element);
  });
}

Die.prototype.render = render;
Die.prototype.roll = roll;
Die.prototype.add_to = add_to;

function add_to(element) {
  element.append(this.render());
}

function render() {
  die_value = this.value;
  return '<div class="die">' + die_value + '</div>'
}

function roll() {
  this.value = Math.floor((Math.random()*6)+1)
}

function render_all(collection,dom_element) {
  dom_element.empty();
  $.each(collection,function(key,value) {
      value.add_to(dom_element);
  });
}