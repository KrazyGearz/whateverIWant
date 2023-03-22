const submitBtn = document.getElementById("submitBtn");
const postTxt = document.getElementById("post");

const handleFormSubmission = async (event) => {
  const data = new FormData(event.target);
  const auth = data.get("author");
  const post = data.get("post");

  event.preventDefault(); //stops refresh
  event.stopPropagation();

  console.log(postTxt.value);
  console.log(event, JSON.stringify());
  console.log(event.target[0].value);
  console.log("auth: " + auth + " post: " + post);
  console.log("hello world");

  fetch("/form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ auth, post }),
  });
};
const shouldntRun = () => {
  console.log("this shoulnt run");
};

submitBtn.addEventListener("submit", handleFormSubmission);
document.addEventListener("submit", shouldntRun); //stopped by stoppropagation()
