import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x00af3ECbb4C250bfCE6f97A5a72F04b6D666B3A6");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Welcome To Hawkins",
        description: "This NFT will give you access to StrangerThingsDAO!",
        image: readFileSync("scripts/assets/hawkins.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
