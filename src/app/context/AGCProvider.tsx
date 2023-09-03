import { createContext, useEffect, useState } from "react";
import {
  AGConnectCloudDB,
  CloudDBZoneQuery,
  CloudDBZoneConfig,
  CloudDBZone,
} from "@hw-agconnect/database";

import agconnect from "@agconnect/api";
import "@agconnect/auth";
import "@agconnect/instance";
import { agConnectConfig } from "../config/agconnect-services.js";
import { async } from "@agconnect/cloudstorage/dist/src/task.js";

export const AGCContext = createContext<any>({ executeQuery: undefined });
type x = {
  children: JSX.Element;
};
export const AGCProvider: React.FC<x> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cloudDbZone, setCloudDbZone] = useState<CloudDBZone | undefined>(
    undefined,
  );

  async function init() {
    setLoading(true);

    agconnect.instance().configInstance(agConnectConfig);
    AGConnectCloudDB.initialize(agConnectConfig);
    const schema = require("../../app/config/Data.json");
    const agcCloudDB = AGConnectCloudDB.getInstance();
    agcCloudDB.createObjectType(schema);
    const config = new CloudDBZoneConfig("cloudzone");
    const a = await agcCloudDB.openCloudDBZone(config);
    setCloudDbZone(a);

    setLoading(false);
  }

  //@ts-ignore
  async function executeQuery(query) {
    const zoneQuery = CloudDBZoneQuery.where(query);
    //@ts-ignore
    const snapshot = await cloudDbZone.executeQuery(zoneQuery);
    return snapshot.getSnapshotObjects();
  }

  //@ts-ignore
  async function executeQueryWhere(query, fieldName, value) {
    const zoneQuery = CloudDBZoneQuery.where(query).equalTo(fieldName, value);
    //@ts-ignore
    const snapshot = await cloudDbZone.executeQuery(zoneQuery);
    return snapshot.getSnapshotObjects();
  }

  async function getImageUrl(getPath: any) {
    try {
      await agconnect.auth().signInAnonymously();

      const downloadURL = await agconnect
        //@ts-ignore

        .cloudStorage()
        .storageReference()
        .child(getPath)
        .getDownloadURL();
      return downloadURL;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <div className="splash-screen">
        <img
          src={
            require("../../../public/assets/img/logo/logo-blue.png").default.src
          }
          width={300}
          height={300}
        />
        <div className="loading-dot">...</div>
      </div>
    );
  }

  return (
    <AGCContext.Provider
      value={{ executeQuery, executeQueryWhere, getImageUrl }}
    >
      {children}
    </AGCContext.Provider>
  );
};
