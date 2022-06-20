var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["edf3f027-ebcb-4d0f-af34-38f2989df2b2"],"propsByKey":{"edf3f027-ebcb-4d0f-af34-38f2989df2b2":{"name":"baboon_1","sourceUrl":"assets/api/v1/animation-library/gamelab/yYwntWshvxvY_Kq8QfytkFwO9.kiAl7a/category_animals/baboon.png","frameSize":{"x":364,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"yYwntWshvxvY_Kq8QfytkFwO9.kiAl7a","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":364,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yYwntWshvxvY_Kq8QfytkFwO9.kiAl7a/category_animals/baboon.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//sprites 
var casa= createSprite(45,200,80,290);
casa.shapeColor="green";
var loja = createSprite(390,200,30,290);
loja.shapeColor="yellow";
var parede1= createSprite(200,50,400,20);
parede1.shapeColor="white";
var parede2 = createSprite(200,350,400,20);
parede2.shapeColor="white";
var boy = createSprite(30,200,30,30);
boy.shapeColor= "blue";
var car1 = createSprite(140,100,30,30);
car1.shapeColor="red";
var car2 = createSprite(270,100,30,30);
car2.shapeColor= "red";
var car3 = createSprite(150,300,30,30);
car3.shapeColor = "red";
var car4 = createSprite(280,300,30,30);
car4.shapeColor= "red";
var mortes=0;

playSound("assets/category_loops/show_me_a_hero_middle_loop.mp3",true);






function draw() {
background("gray");

//mortes
textSize(25);
stroke("red");
text("MORTES:"+mortes,250,30);


//começar
 if (keyDown("space")){
   car1.velocityY=6;
   car2.velocityY=6;
   car2.velocityX=-2;
   car3.velocityY=-6;
   car3.velocityX=2;
   car4.velocityY=-6;
 }
 //movimento
if (keyDown("right")){
   boy.x=boy.x+2;
 }
if (keyDown("left")){
   boy.x = boy.x-2;
 }
 if (keyDown("up")){
   boy.y = boy.y-2;
 }

if (keyDown("down")){
  boy.y =boy.y+2;
}
 
 //puniçao
if (boy.isTouching(car1)||boy.isTouching(car2)||boy.isTouching(car3)||boy.isTouching(car4)){
  boy.x = 30;
  boy.y = 200;
  mortes= mortes+1;
}

   // parabens
if (boy.isTouching(loja)){
   textSize(20);
   stroke("orange");
   text("COMO TU FEZ ISSO? MUITOS PARABÉNS",1,380);
   
  
 }
 
 
 
 //colisões
car1.bounceOff(parede1);
car1.bounceOff(parede2);
car2.bounceOff(parede1);
car2.bounceOff(parede2);
car3.bounceOff(parede1);
car3.bounceOff(parede2);
car4.bounceOff(parede1);
car4.bounceOff(parede2);
car1.bounceOff(casa);
car2.bounceOff(casa);
car3.bounceOff(casa);
car4.bounceOff(casa);
car1.bounceOff(loja);
car2.bounceOff(loja);
car3.bounceOff(loja);
car4.bounceOff(loja);

  drawSprites();
 }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
