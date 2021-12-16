import { useState } from "react";

let movieInfo = [];

function MovieForm() {
  const [values, setValues] = useState({
    name: "",
    movie: "",
    drunk: "",
  });
  // const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    movieInfo.push(values);
    console.log(movieInfo);
    setValues({
      name: "",
      movie: "",
      drunk: "",
    });
  };

  const handleNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleMovieInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      movie: event.target.value,
    }));
  };

  const handleEntertainedInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      drunk: event.target.value,
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          id="name"
          className="form-field1"
          type="text"
          placeholder="Your Name"
          name="name"
          value={values.name}
          onChange={handleNameInputChange}
        />
      </label>
      <label>
        Movie:{" "}
        <input
          id="movie"
          className="form-field2"
          type="text"
          placeholder="Movie Watched"
          name="movie"
          value={values.movie}
          onChange={handleMovieInputChange}
        />
      </label>

      <label>
        Drunk?:
        <input
          id="drunk"
          className="form-field3"
          type="text"
          placeholder="Tell me more."
          name="entertained"
          value={values.drunk}
          onChange={handleEntertainedInputChange}
        />
      </label>
      <button className="form-submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default MovieForm;
