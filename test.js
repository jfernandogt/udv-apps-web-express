import axios from "axios";

async function Main() {
  const { data, statusText } = await axios.get(
    "https://dog.ceo/api/breed/bullterrier/staffordshire/images/random"
  );

  console.log("data", JSON.stringify(data), "statusText", statusText);

  if (statusText !== "OK" || data.status !== "success") {
    throw new Error("Error getting dog image");
  }
}

Main();
