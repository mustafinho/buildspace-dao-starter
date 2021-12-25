import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x11BA41b88aDc83d2ac9F9a346A1334ceE6E69F5B",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Rehab image",
        description: "This NFT will give you access to RecoveryDAO!",
        image: readFileSync("scripts/assets/rehab.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()