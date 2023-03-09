import classes from "./NewsLetterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

function NewsLetterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="POST"
      className={classes.newsletter}
      action="/newsletter"
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        name="email"
      />
      <button>Sign Up</button>
    </fetcher.Form>
  );
}

export default NewsLetterSignup;
