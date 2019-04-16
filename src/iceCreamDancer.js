var IceCreamDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('iceCreamDancer wobble-hor-bottom').prepend('<img class="iceCream" src=\'pumpkin-ice-cream-clipart-84628.png\'/>');;
}

IceCreamDancer.prototype = Object.create(Dancer.prototype)
IceCreamDancer.prototype.constructor = IceCreamDancer;

IceCreamDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
}

IceCreamDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};