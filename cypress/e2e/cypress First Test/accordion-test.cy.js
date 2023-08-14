import { accordion_steps } from "../steps/accordion-Steps";

describe("Veryfing Accordions Items page", () => {
  beforeEach(() => {
    accordion_steps.visit();
  });

  it("Verify that all the objects are presented on the page", () => {
    accordion_steps.getHeaderStep();
    accordion_steps.getManualTestingTopicStep();
    accordion_steps.getAutomationTestingTopicStep();
    accordion_steps.getCucumberTopicStep();
    accordion_steps.getKeepClickingTopicStep();
    accordion_steps.getLoadingButtonStep();
    accordion_steps.getFooterStep();
  });

  it("Verify Manual Testing Block", () => {
    accordion_steps.checkManualTestingAccordionExpandStep();
    accordion_steps.checkManualTestingAccordionDdescriptionStep();
  });

  it("Verify Cucumber BDD Block", () => {
    accordion_steps.checkCucumberBDDTopicExpandStep();
    accordion_steps.checkCucumberBDDAccordionDdescriptionStep();
  });

  it("Verify Automation Testing Block", () => {
    accordion_steps.checkAutomationTestingTopicExpandStep();
    accordion_steps.checkAutomationTestingDdescriptionStep();
  });

  it("Verify Keep Clicking Topic", () => {
    accordion_steps.checkKeepClickingExpandStep();
    accordion_steps.checkKeepClickingDescriptionStep();
  });
});
