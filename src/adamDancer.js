var AdamDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('adamDancer rotate-center').prepend('<img class="adam" src=\'adam.jpg\'/>');
  }
  
  AdamDancer.prototype = Object.create(Dancer.prototype)
  AdamDancer.prototype.constructor = AdamDancer;
  
  AdamDancer.prototype.step = function () {
    Dancer.prototype.step.call(this);
    // this.$node.toggle();
  }
  
  AdamDancer.prototype.setPosition = function (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };