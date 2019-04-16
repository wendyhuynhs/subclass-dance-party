var IceCreamDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="iceCreamDancer"></span>');
}

IceCreamDancer.prototype = Object.create(Dancer.prototype)
IceCreamDancer.prototype.constructor = IceCreamDancer;

IceCreamDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}

IceCreamDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};