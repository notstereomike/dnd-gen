// pages/api/generate.js

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function generateHandler(req, res) {
  const { race, gender, class: charClass } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(race, gender, charClass),
    temperature: 0.7,
    max_tokens: 200,
  });

  const result = completion.data.choices[0].text;
  res.status(200).json({ result });
}

function generatePrompt(race, gender, charClass) {
  const raceString = capitalizeFirstLetter(race);
  const genderString = capitalizeFirstLetter(gender);
  const classString = capitalizeFirstLetter(charClass);

  return `Generate a 200 word backstory for D&D character who is a ${genderString} ${raceString} ${classString}.

Backstory:`;

}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
