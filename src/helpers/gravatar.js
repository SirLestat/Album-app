import md5 from "md5";

export const gravatar = (email) =>
  email ? `https://gravatar.com/avatar/${md5(email)}?d=retro` : undefined;
