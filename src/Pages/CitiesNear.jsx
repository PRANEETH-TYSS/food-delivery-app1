import React from "react";

const CitiesNear = () => {
  return (
    <>
      <h2
        style={{ borderBottom: "3px solid black", padding: "10px" }}
        className="container-fluid"
      ></h2>
      <section className="container">
        <article>
          <h1>Cities Nearby</h1>
          <figure className="p-4">
            <img
              src="https://miro.medium.com/max/1400/1*03zSGT9M2h7HYS0iqF03zA.png"
              style={{
                width: "100%",
                height: "500px",
                border: "2px solid black",
              }}
            />
          </figure>
        </article>
      </section>
    </>
  );
};

export default CitiesNear;
