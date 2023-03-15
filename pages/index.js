import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [raceInput, setRaceInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [classInput, setClassInput] = useState("");
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        race: raceInput,
        gender: genderInput,
        class: classInput,
      }),
    });
    const data = await response.json();
    setResult(data.result);
    setRaceInput("");
    setGenderInput("");
    setClassInput("");
  }

  return (
    <div>
      <Head>
        <title>D&D Character Generator</title>
        
      </Head>

      <main className={styles.main}>
        <h1>D&D Character Generator</h1>
        <form onSubmit={onSubmit}>
          <label>
            Race:
            <select
              value={raceInput}
              onChange={(e) => setRaceInput(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="human">Human</option>
              <option value="elf">Elf</option>
              <option value="dwarf">Dwarf</option>
            </select>
          </label>
          <br />
          <label>
            Gender:
            <select
              value={genderInput}
              onChange={(e) => setGenderInput(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <label>
            Class:
            <select
              value={classInput}
              onChange={(e) => setClassInput(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="fighter">Fighter</option>
              <option value="wizard">Wizard</option>
              <option value="rogue">Rogue</option>
            </select>
          </label>
          <br />
          <button type="submit">Generate Backstory</button>
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
