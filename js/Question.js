class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Ingresa tu nombre aquí....");
    this.input2 = createInput("Ingresa el número de la opción correcta..");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("Juego MiQuiz");
    this.title.position(350, 0);

    this.question.html("Pregunta:- Un señor gordito y muy coloradito, no toma café pues siempre toma té, entonces, Donde esta Perri" );
    this.question.position(150, 80);
    this.option1.html("1: Tu mama" );
    this.option1.position(150, 100);
    this.option2.html("2: en Doofenshmirtz Malvados y Asociados" );
    this.option2.position(150, 120);
    this.option3.html("3: Pez" );
    this.option3.position(150, 140);
    this.option4.html("4: Pichula" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      this.message.html("Gracias, tu respuesta ha sido enviada");
      this.message.position(350, 350);


    });
  }
}
