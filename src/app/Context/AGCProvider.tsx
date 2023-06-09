import { createContext, useEffect, useState } from "react";
import {
  AGConnectCloudDB,
  CloudDBZoneQuery,
  CloudDBZoneConfig,
  CloudDBZone,
} from "@hw-agconnect/database";
import agconnect from "@hw-agconnect/api";
import "@hw-agconnect/auth";
import "@hw-agconnect/instance";
import { agConnectConfig } from "../../app/config/agconnect-services.js";

export const AGCContext = createContext<any>({executeQuery: undefined});
type x = {
  children: JSX.Element;
};
export const AGCProvider: React.FC<x> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cloudDbZone, setCloudDbZone] = useState<CloudDBZone | undefined>(
    undefined
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

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return <AGCContext.Provider value={{ executeQuery }}>{children}</AGCContext.Provider>;
};
