///<reference types = "Cypress"/>

import { datepickerSteps } from "../steps/date-piker-steps";
import { DatepickerPage, datepickerPage } from "../pages/date-piker-page"
import { monthNames } from "../test-data/date-datas";
import { format, addDays, differenceInDays } from 'date-fns';

// const currentYear = datepickerPage.getCurrentYear();
// const currentMonth = datepickerPage.getCurrentMonth();
// const currentDate = datepickerPage.getCurrentDate();
// const randomDate  = datepickerSteps.getRandomDateSteps()


describe('Date piker', () => {
    beforeEach(()=>{
        datepickerSteps.visitDatepicker()
    })

    it('Date piker test', () => {
        
        datepickerSteps.getDatepickerTitleSteps()
        datepickerSteps.getDatepickerSteps()
        datepickerSteps.getDateInputSteps()
        datepickerSteps.getDateDropdownSteps()
    });
    it('Test that verify today"s date one day ahead,', () => {
        datepickerSteps.getDateInputSteps()
        datepickerSteps.getPresentDaySteps()
        datepickerSteps.getNextDaySteps()
        datepickerSteps.addOneDayToDate()
        
        
        

    });
    it('transition to another month', async() => {
        
        datepickerSteps.getDateInputSteps()
        datepickerSteps.getCurrentMonthSteps()
        datepickerSteps.getCurrentMonthIndex()
        datepickerSteps.getNextMonthSteps()
        datepickerSteps.getSelectedMonthSteps()
        

    });
    it('transition to another year', () => {
        datepickerSteps.getDateInputSteps()
            datepickerSteps.getCurrentYearSteps()
            datepickerSteps.getSelectedYearSteps()
           datepickerSteps.getNextYearButtonSteps()
            datepickerSteps.getNextYearSteps()
    });
    it.only('transition to random year', () => {
       
        datepickerSteps.getDateInputSteps()
            datepickerSteps.getCurrentYearSteps()
            datepickerSteps.getSelectedYearSteps()
            datepickerSteps.getSecondSelectedYearSteps()
            // datepickerSteps.selectRandomYearSteps()
            // datepickerSteps.selectRandomMonthSteps()
            // datepickerSteps.selectRandomDaySteps()
            datepickerSteps.selectRandomDayInRandomMonthAndYear()
        
    });
});