import { Component, NgModule, OnInit } from '@angular/core';

export interface LastClicked {
  type: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Calculator';
  display: string = "0";
  resultSet = [];
  lastClicked: LastClicked = {
    type: "initial",
    name: "0"
  };

  /**
  * Called to set the LastClicked   * 
  */
  setLastClicked(n: string, t: string) {
    this.lastClicked.name = n;
    this.lastClicked.type = t;
  }

  /**
  * Called to add a Number to the Resultset   * 
  */
  numberSelected(nr) {
    if (this.lastClicked.type == "initial") {
      this.display = nr.toString();
    } else {
      this.display += nr.toString();
    }
    this.setLastClicked(nr.toString(), "number");
    this.resultSet.push(nr);
  }

  /**
  * Called to add a Decimal to the Resultset   * 
  */
  decimalSelected() {
    if (this.lastClicked.type == "initial" || this.lastClicked.type == "number") {
      this.display += ".";
    } else {
      this.display += "0."; // if last type == operant add a leading zero
    }
    this.setLastClicked(".", "decimal");
  }

  /**
  * Called to add an Operator to the Result Set  * 
  */
  operatorSelected(op) {
    //check if there are results or last added obj was a number -  can add operator
    if (this.resultSet.length > 0 && this.lastClicked.type === "number") {
      this.resultSet.push(op);
    } else if (this.lastClicked.type === "string") {
      //if last selected was an operator - delete the last operator and replace with the one currently selected
      this.resultSet.pop();
      this.resultSet.push(op);
    } else if (this.lastClicked.type === "decimal") {
      this.resultSet.push(".0");
    }
    this.setLastClicked(op, "operator");
    this.display += op;
  }

  /**
  * Called to Eval the Result Set   * 
  */
  evalCustom(fn) {
    return new Function('return ' + fn)();
  }

  /**
  * Called to Calculate the Result Set   * 
  */
  calculateResults() {
    let resultsString = "";
    this.resultSet.forEach(element => {
      if (typeof element === "number") {
        resultsString += element.toString();
      } else {
        resultsString += element;
      }
    });
    this.display = this.evalCustom(resultsString).toString();
    this.resultSet = [];
    this.resultSet.push(this.display);
    this.setLastClicked("=", "number");
  }

  /**
  * Called to Calculate the Result Set   * 
  */
  clearResults() {
    this.resultSet = [];
    this.display = "0";
    this.setLastClicked("0", "initial");
  }

  /**
  * Called After Initializing the page   * 
  */
  ngOnInit() {
    this.clearResults();
  }
}


