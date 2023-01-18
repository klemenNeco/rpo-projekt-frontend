import React, { useState, useRef } from "react";

import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "./vnosKarte.module.css";
import { faHandsAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const formRef = useRef(null);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState();
  const [Message, setMessage] = useState("");
  const [Date, setDate] = useState();
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const vsiOglasi = [];

  const handleChange = (event) => {
    setPhoto(event.target.files[0]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPhoto = {
      file: photo,
      name: Name,
      price: Price,
      message: Message,
      date: Date,
    };
    vsiOglasi.push(newPhoto);
    formRef.current.reset();
  };

  return (
    <Layout>
      <div>
        <Navbar />
        <section id={styles.registerForm}>
          <h1>Objava oglasa</h1>
          <form action="submit" onSubmit={handleSubmit} ref={formRef}>
            <div>
              <label htmlFor="fname">Naslov dogodka:</label>
              <input
                type="text"
                name="fname"
                id="fname"
                className={styles.inputField}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className={styles.line}>
              <div className={styles.elem}>
                <label htmlFor="lname">Datum:</label>
                <input
                  type="date"
                  name="lname"
                  id="lname"
                  className={styles.inputField1}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div className={styles.elem1}>
                <label htmlFor="number" className={styles.napiscena}>
                  Cena:
                </label>
                <input
                  type="number"
                  name="cena"
                  id="cena"
                  placeholder="€"
                  className={styles.inputField2}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password">dodatno:</label>
              <textarea
                rows="4"
                cols="50"
                name="comment"
                form="usrform"
                className={styles.inputField}
                placeholder="Enter text here..."
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>

            <div>
              <label>
                Upload Photo:
                <br></br>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <input type="submit" value="Objavi" id="submit" />
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
