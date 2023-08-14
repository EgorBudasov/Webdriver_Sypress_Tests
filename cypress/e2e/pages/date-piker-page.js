export class DatepickerPage{

static get getDatepickerTitle(){
    return cy.get('h1')
}

 static get   getDatepicker(){
   return cy.xpath('//span[@class="input-group-addon"]')
    //return cy.get('.input-group-addon')
 }

 static get getDateInput(){
  return cy.xpath('//input[@class="form-control"]')

 }

 static get getPresentDay(){
  return cy.xpath('//td[@class="today day"]')
 }
 static get getdatepickerDays(){
    return cy.xpath('//div[@class="datepicker-days"]')
 }

 static get getDateDropdown(){
  return cy.xpath('//div[contains(@class,"datepicker-dropdown")]')
 }

 static get getDatepickerSwitch(){
   return cy.xpath('(//th[@class="datepicker-switch"])[1]')
 }

 static get getCurrentMonth(){
  return cy.get('span[class="month active"]')

 }
 static get getNextMonth(){
  return cy.xpath('//div[@class="datepicker-days"]//th[@class="next"]')
 }
 static get getSelectedMonth(){
    return cy.xpath('//div[@class="datepicker-days"]//th[@class="datepicker-switch"]')
 }
static get getCurrentYear(){
   return cy.xpath('//span[@class="year active"]')
}

static get getSelectedYear(){
   return cy.xpath('//div[@class="datepicker-days"]//th[@class="datepicker-switch"]')
}

static get getNextYearButton(){
   return cy.xpath('//div[@class="datepicker-months"]//th[@class="next"]')
}

static get getSecondSelectedYear(){
   return cy.xpath('//div[@class="datepicker-months"]//th[@class="datepicker-switch"]')
}

static get getDatepickerYears(){
   return cy.xpath('//div[@class="datepicker-years"]//td[@colspan="7"]')
}

static get getDatepickerMonth(){
   return cy.xpath('//div[@class="datepicker-months"]//td[@colspan="7"]')
}

static get getDatepickerDay(){
   return cy.xpath('//table[@class=" table-condensed"]')
}

//  getCurrentYear() {
//   const currentDate = new Date();
//   return currentDate.getFullYear();
//  }
 
//  getCurrentMonth() {
//   const currentDate = new Date();
//   return currentDate.getMonth()+1;
//  }

//  getCurrentDate() {
//   const currentDate = new Date();
//   return currentDate.getDate();
//  }




}
export const datepickerPage = new DatepickerPage