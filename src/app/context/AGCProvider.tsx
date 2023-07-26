import { createContext, useEffect, useState } from 'react';
import { AGConnectCloudDB, CloudDBZoneQuery, CloudDBZoneConfig, CloudDBZone } from '@hw-agconnect/database';
import agconnect from '@hw-agconnect/api';
import '@hw-agconnect/auth';
import '@hw-agconnect/instance';
import { agConnectConfig } from '../config/agconnect-services.js';
import '../../app/assets/Css/splash-screen.css';

export const AGCContext = createContext<any>({ executeQuery: undefined });
type x = {
   children: JSX.Element;
};
export const AGCProvider: React.FC<x> = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [cloudDbZone, setCloudDbZone] = useState<CloudDBZone | undefined>(undefined);

   async function init() {
      setLoading(true);

      agconnect.instance().configInstance(agConnectConfig);
      AGConnectCloudDB.initialize(agConnectConfig);
      const schema = require('../../app/config/Data.json');
      const agcCloudDB = AGConnectCloudDB.getInstance();
      agcCloudDB.createObjectType(schema);
      const config = new CloudDBZoneConfig('cloudzone');
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
      console.log('execute query');
      const zoneQuery = CloudDBZoneQuery.where(query).equalTo(fieldName, value);
      console.log(zoneQuery);
      //@ts-ignore
      const snapshot = await cloudDbZone.executeQuery(zoneQuery);
      return snapshot.getSnapshotObjects();
   }

   useEffect(() => {
      init();
   }, []);

   if (loading) {
      return (
         <div className="splash-screen">
            <img src={require('../../../public/assets/img/logo/logo-blue.png').default.src} width={300} height={300} />
            <div className="loading-dot">...</div>
         </div>
      );
   }

   return <AGCContext.Provider value={{ executeQuery, executeQueryWhere }}>{children}</AGCContext.Provider>;
};
