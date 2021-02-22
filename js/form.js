class Form
{
    constructor()
    {
        this.input = createInput("NAME");

        this.button = createButton("CLICK ME");

        this.greeting = createElement('h3');

        this.image = loadImage("Images/loginImage.jpg");


    }

    display()
    {

        imageMode(CENTER);
        image(this.image,width/2,height/2,width,height);
        console.log("display");

    }
     
}