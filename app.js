class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    
    clear(){
        
    }
    
    delete(){
        
    }
    
    appendNumber(number){
        
    }
    
    chooseOperation(operation){
        
    }
    
    compute(){
        
    }
    
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const clearButton = document.querySelector('data-all-clear');
const deleteButton = document.querySelector('data-delete');
const previousOperandTextElement = document.querySelector('data-previous-operand ');
const currentOperandTextElement = document.querySelector('data-current-operand');

