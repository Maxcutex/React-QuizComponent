import React,{Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';
class QuizQuestion extends Component {
  constructor(props){
    super(props)
    this.state = {
      incorrectAnswer: false
    }
  }
 handleClick(buttonText){
   const check = buttonText===this.props.quiz_question.answer;
   if (check){
     this.setState(
       (state) =>{
         return {incorrectAnswer : false}
       }
     )
     this.props.showNextQuestionHandler();

   } else {
     this.setState(
       (state) =>{
         return {incorrectAnswer : true}
       }
     )
   }
 }
  render(){
    const isCorrect = ( this.state.incorrectAnswer === true) ;

    return <main>
    if(isCorrect) {
      <p className="error">Sorry, thats not right</p>
    }
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
          {this.props.quiz_question.answer_options.map((answer_option,index) =>(
            <QuizQuestionButton key={index}
             button_text={answer_option} clickHandler={this.handleClick.bind(this)} />

          ))}    </ul>
        </section>
      </main>;
  }

}

export default QuizQuestion;
