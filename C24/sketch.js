const Motor = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var caixa1, caixa2;



function setup() {
    createCanvas(1200, 400);

    engine = Motor.create();
    world = engine.world;

    caixa1 = new Caixa(700, 220);
    caixa2 = new Caixa(920, 320);
    t1 = new Tronco(810, 80);
    solo = new Solo(600, 390, 1200, 20);


    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
    background("cyan");
    Motor.update(engine);
    caixa1.show();
    caixa2.show();
    t1.show();
    solo.show();




}