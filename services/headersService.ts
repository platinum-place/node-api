// var user_systrack = process.env.GNB_User;
// var pass_systrack = process.env.GNB_Pass;

var user_header = "GNB";
var pass_header = "123";

export const validateHeader = (
  user: string | string[],
  pass: string | string[]
) => {
  if (user === user_header && pass === pass_header) {
    return true;
  } else {
    return false;
  }
};
