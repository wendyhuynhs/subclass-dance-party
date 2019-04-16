var JesseDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('jesseDancer roll-in-left').prepend('<img class="jesse" src=\'jesse.jpg\'/>');
  }
  
  JesseDancer.prototype = Object.create(Dancer.prototype)
  jesseDancer.prototype.constructor = JesseDancer;
  
  JesseDancer.prototype.step = function () {
    Dancer.prototype.step.call(this);
  }
  
  JesseDancer.prototype.setPosition = function (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };