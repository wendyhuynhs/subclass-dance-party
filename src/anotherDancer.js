var AnotherDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('anotherDancer')
  }
  
  AnotherDancer.prototype = Object.create(Dancer.prototype)
  AnotherDancer.prototype.constructor = AnotherDancer;
  
  AnotherDancer.prototype.step = function () {
    Dancer.prototype.step.call(this);
    this.$node.toggle();
  }
  
  AnotherDancer.prototype.setPosition = function (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };