///<reference types = "Cypress"/>

import { DatepickerPage } from "../pages/date-piker-page";

//import { datepickerPage } from "../pages/data-piker-page";
import { monthArr } from "../test-data/date-datas";
import { format, addDays, differenceInDays } from 'date-fns';



 export class DatepickerSteps{
    visitDatepicker(){
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        .url().should('include','Datepicker')
    }

    getPresentDaySteps(){
      const today = new Date()
      const formattedDate = format(today, 'dd');
      DatepickerPage.getPresentDay.should('contain',formattedDate,)
    }
    getNextDaySteps(){
      const today = new Date()
      const nextDay = new Date(today)
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDayNumber = nextDay.getDate();
      DatepickerPage.getdatepickerDays.contains(nextDayNumber).click();

    }



    addOneDayToDate(){
      const today = new Date();
    const expiryDate = addDays(today, 1); 
    const formattedDate = format(expiryDate, 'MM-dd-yyyy');
     DatepickerPage.getDateInput.invoke('val').should('eq', formattedDate);
      
    }
     
    getCurrentMonthSteps(){
      const todayMonth = new Date()
      const formattedMonth = format(todayMonth, 'MMM');
      DatepickerPage.getCurrentMonth.should('contain',formattedMonth)
    }


    getCurrentMonthIndex (){
      DatepickerPage.getCurrentMonth.invoke('text').then(monthText =>{
       return monthArr.indexOf(monthText)
      }).then(index => {
        cy.log(`Индекс выбранного месяца: ${index}`)
      })
     
    }
   

    

    getNextMonthSteps(){
      
      DatepickerPage.getNextMonth.click()
      
     
    }
    getSelectedMonthSteps(){
      DatepickerPage.getSelectedMonth.invoke('text').then(monthText =>{
        return monthArr.indexOf(monthText)
       }).then(index => {
          cy.log(`Индекс выбранного месяца: ${index}`)
        })
    }
    
    getCurrentYearSteps(){
      const today = new Date()
      const formattedDate = format(today, 'yyyy');
      DatepickerPage.getCurrentYear.should('contain',formattedDate,)
    }
    getSelectedYearSteps(){
      DatepickerPage.getSelectedYear.click()
    }
    getNextYearButtonSteps(){
      DatepickerPage.getNextYearButton.click()
    }
    getNextYearSteps() {
      const year = new Date();
      const nextYear = new Date(year);
      nextYear.setFullYear(nextYear.getFullYear() + 1);
      const nextYearNumber = nextYear.getFullYear();
      DatepickerPage.getSelectedYear.should('contain',nextYearNumber)
    }     

    getSecondSelectedYearSteps(){
      DatepickerPage.getSecondSelectedYear.click()
    }

    getDatepickerYearsSteps(){
      DatepickerPage.getDatepickerYears
    }


    
    selectRandomDayInRandomMonthAndYear() {
      const today = new Date();
      const currentYear = today.getFullYear();//создаем обьекты для дня месяца и года
      const currentMonth = today.getMonth();
    
      const minYear = currentYear - 4; 
      const maxYear = currentYear + 7; 
      const randomYear = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;//создаем рандомный год в диапазоне -4+7 лет от текущего
    
      const randomMonthIndex = Math.floor(Math.random() * monthArr.length); //рандом месяц из массива 
      const selectedMonthIndex = (currentMonth + randomMonthIndex) % 12;//получаем индекс
      const randomMonthName = monthArr[selectedMonthIndex];//полученный  индекс записываем названием месяца
    
      const lastDayOfMonth = new Date(randomYear, selectedMonthIndex + 1, 0).getDate();
      const randomDay = Math.floor(Math.random() * lastDayOfMonth) + 1;
    
      const formattedDay = randomDay < 10 ? `0${randomDay}` : randomDay;//если рандом день меньше 10 добавляем 0 в начало.
      const formattedMonth = (selectedMonthIndex + 1) < 10 ? `0${selectedMonthIndex + 1}` : selectedMonthIndex + 1;//то же самое что и с днем

      DatepickerPage.getDatepickerYears.contains('.year', randomYear).click();
      DatepickerPage.getDatepickerMonth.contains('.month', randomMonthName).click();
      DatepickerPage.getDatepickerDay.contains('.day', randomDay).click();

      const formattedRandomDate = `${formattedMonth }-${formattedDay}-${randomYear}`
      DatepickerPage.getDateInput.invoke('val').should('eq', formattedRandomDate); 
    }




    getDatepickerTitleSteps(){
        DatepickerPage.getDatepickerTitle.should('have.text','Datepicker')
    }

    getDatepickerSteps(){
        DatepickerPage.getDatepicker.click().should('be.visible')
    }
 getDateInputSteps(){
    DatepickerPage.getDateInput.click()
 }

 getDateDropdownSteps(){
    DatepickerPage.getDateDropdown.should('be.visible')
 }
 getDatepickerSwitchSteps(){
    DatepickerPage.getDatepickerSwitch.click()
 }
//  getRandomDateSteps() {
//     const randomYear = Math.floor(Math.random() * (2030 - 2000 + 1)) + 2000;
//     const randomMonth = Math.floor(Math.random() * 12);
//     const randomDay = Math.floor(Math.random() * 28) + 1;

//     const randomDate = new Date(randomYear, randomMonth, randomDay);

//     const month = monthArr[randomDate.getMonth()];
//     const day = randomDate.getDate();
//     const year = randomDate.getFullYear();

//     const formattedDate = `${day} ${month} ${year}`;
//     return formattedDate;

//     // const start = new Date(0, 1, 2020);
//     // const end = new Date(11, 31, 2030);
//     // const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//     // return randomDate.toISOString().slice(0, 10);
//   }

//  getCurrentYearSteps(){
//     DatepickerPage.getCurrentYear

//  }

 }


 export const datepickerSteps = new  DatepickerSteps()