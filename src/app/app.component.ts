import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LexicalClock';
  theDate = new Date();

  ngOnInit() {
    setInterval(() => {
      this.setTime();
    }, 1000)
  }

  setTime() {
    this.theDate = new Date();
    console.log(this.theDate.getSeconds());
    this.setMinute(this.theDate.getMinutes());
    this.setHour(this.theDate.getHours());
  }

  setMinute(minute: number) {
    //get all child elements of the minute row
    let minuteLabels = document.getElementById("minute-row").children;

    //Remove the "active" class from any element that has it
    for(var i = 0; i < minuteLabels.length; i++) {
      if (minuteLabels[i].classList.contains("active")) {
        minuteLabels[i].classList.remove("active");
      }
    }

    //Add the "active" class to the bracket matching the current minute
    if (minute > 3 && minute < 8 || minute > 53 && minute < 58) {
      document.getElementById("fiveM").classList.add("active");
    }
    else if (minute > 7 && minute < 13 || minute > 47 && minute < 54) {
      document.getElementById("tenM").classList.add("active");
    }
    else if (minute > 12 && minute < 18 || minute > 43 && minute < 48) {
      document.getElementById("quarterM").classList.add("active");
    }
    else if (minute > 17 && minute < 23 || minute > 37 && minute < 44) {
      document.getElementById("twentyM").classList.add("active");
    }
    else if (minute > 22 && minute < 38) {
      document.getElementById("halfM").classList.add("active");
    }

    //Set past/till
    this.setPastOrTill(minute);
  }

  setPastOrTill(minute: number) {
    if(minute > 3 && minute < 38) {
      document.getElementById("past").classList.add("active");
      document.getElementById("till").classList.remove("active");
    } else if(minute > 37 && minute < 58) {
      document.getElementById("till").classList.add("active");
      document.getElementById("past").classList.remove("active");
    } else {
      document.getElementById("past").classList.remove("active");
      document.getElementById("till").classList.remove("active");
    }
  }

  setHour(hour: number) {
    this.setAMPM(hour);
    //get all child elements of the minute row
    let hourLabels1 = document.getElementById("hour-row1").children;
    let hourLabels2 = document.getElementById("hour-row2").children;

    //Remove the "active" class from any element that has it
    for(var i = 0; i < hourLabels1.length; i++) {
      if (hourLabels1[i].classList.contains("active")) {
        hourLabels1[i].classList.remove("active");
      }
    }
    for(var i = 0; i < hourLabels2.length; i++) {
      if (hourLabels2[i].classList.contains("active")) {
        hourLabels2[i].classList.remove("active");
      }
    }

    if(this.theDate.getMinutes() > 37) {
      hour = (hour + 1) % 24;
    }

    switch(hour) {
      case 0:
      case 12:
        document.getElementById("h12").classList.add("active");
        break;
      case 1:
      case 13:
        document.getElementById("h1").classList.add("active");
        break;
      case 2:
      case 14:
        document.getElementById("h2").classList.add("active");
        break;
      case 3:
      case 15:
        document.getElementById("h3").classList.add("active");
        break;
      case 4:
      case 16:
        document.getElementById("h4").classList.add("active");
        break;
      case 5:
      case 17:
        document.getElementById("h5").classList.add("active");
        break;
      case 6:
      case 18:
        document.getElementById("h6").classList.add("active");
        break;
      case 7:
      case 19:
        document.getElementById("h7").classList.add("active");
        break;
      case 8:
      case 20:
        document.getElementById("h8").classList.add("active");
        break;
      case 9:
      case 21:
        document.getElementById("h9").classList.add("active");
        break;
      case 10:
      case 22:
        document.getElementById("h10").classList.add("active");
        break;
      case 11:
      case 23:
        document.getElementById("h11").classList.add("active");
        break;
    }
  }

  setAMPM(hour) {
    if (hour > 11) {
      document.getElementById("pm").classList.add("active");
      document.getElementById("am").classList.remove("active");
    }
    else {
      document.getElementById("am").classList.add("active");
      document.getElementById("pm").classList.remove("active");
    }
  }
}
