

export const users = [
  {
    testName: "all valid data",
    firstName: "First Test name",
    lastName: "Test last name",
    email: "email@test.com",
    comment: "Test comment",
  },
  {
    testName: "empty email",
    firstName: " Second Test name",
    lastName: "Test last name",
    email: " ",
    comment: "Test comment",
  },
  {
    testName: "without first name",
    firstName: "",
    lastName: "Test last name",
    email: "email@test.com",
    comment: "Test comment",
  },
  {
    testName: "",
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  }
];
