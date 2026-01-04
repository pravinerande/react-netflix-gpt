import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.REACT_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true, // main emailID credential
// });

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // secondary emailID credential
});

export { openai };
