import { getUsefulContents } from "./export.mjs";

getUsefulContents("http://www.example.com", (data) => {
  doSomethingUseful(data);
});