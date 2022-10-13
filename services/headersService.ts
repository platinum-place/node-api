var user_header = process.env.GNB_User;
var pass_header = process.env.GNB_Pass;

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
