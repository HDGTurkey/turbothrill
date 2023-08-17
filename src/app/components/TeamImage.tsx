import agconnect from "@agconnect/api";
import React, { useEffect, useState } from "react";

export const TeamImage = ({ imgPath, width, height, alt }: any) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function getImageUrl() {
      try {
        await agconnect.auth().signInAnonymously();

        const downloadURL = await agconnect
          //@ts-ignore

          .cloudStorage()
          .storageReference()
          .child(imgPath)
          .getDownloadURL();
        setImageUrl(downloadURL);
      } catch (err) {
        console.error(err);
      }
    }

    if (imgPath) {
      getImageUrl();
    }
  }, [imgPath]);

  if (!imageUrl) {
    return <div>Loading image...</div>;
  }

  return <img src={imageUrl} width={width} height={height} alt={alt} />;
};
