import { createContext, useContext, useEffect, useState } from "react";
import { Glassfy } from "react-native-glassfy-module";
import { increaseHealth } from "../context/healthSlice";
import { useDispatch } from "react-redux";
import { GLASSFY_API } from "../Constants";

const GlassfyContext = createContext(null);

export const GlassfyProvider = ({ children }) => {
  const [offerings, setOfferings] = useState([]);
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // Intialise Glassfy and set our provider ready
      try {
        await Glassfy.initialize(GLASSFY_API, false);
      } catch (e) {
        console.log(e);
        console.log("initialize");
      }
      setIsReady(true);
      await loadOfferings();
    };
    init();
  }, []);

  // Load all permissions a user has
  const loadOfferings = async () => {
    try {
      const sku = await Glassfy.offerings();
      console.log(sku.all);
      setOfferings(sku.all);
    } catch (err) {
      console.log(err);
    }
  };

  // Purchase one SKU and handle a successful transaction
  const purchase = async (sku) => {
    let skuObject = null;

    for (const offering of offerings) {
      const skuArray = offering.skus;
      skuObject = skuArray.find((item) => item.skuId === sku);
      if (skuObject) {
        break;
      }
    }

    if (!skuObject) {
      console.log(`SKU not found: ${sku}`);
      return;
    }

    const skuDTO = {
      skuId: skuObject.skuId,
      productId: skuObject.productId,
      store: skuObject.store,
    };
    console.log(skuDTO);
    try {
      const transaction = await Glassfy.purchaseSku(skuDTO);
      
          if (transaction.receiptValidated) {
            
            handleSuccessfulTransactionResult(transaction);
          }
      
    } catch (error) {
      console.log(error);
    }
  };

  // Update the user state based on what we purchased
  const handleSuccessfulTransactionResult = (transaction) => {
    const productID = transaction.productId;

    if (productID.indexOf("item5") >= 0) {
      dispatch(increaseHealth(5));
    }

    if (productID.indexOf("item10") >= 0) {
      dispatch(increaseHealth(10));
    }

    if (productID.indexOf("item20") >= 0) {
      console.log("çalıştım");
      dispatch(increaseHealth(20));
    }
    if (productID.indexOf("item50") >= 0) {
      dispatch(increaseHealth(50));
    }
    if (productID.indexOf("item100") >= 0) {
      dispatch(increaseHealth(100));
    }
  };

  const value = {
    purchase,
    offerings,
  };

  // Return empty fragment if provider is not ready (Glassfy not yet initialised)
  if (!isReady) return <></>;

  return (
    <GlassfyContext.Provider value={value}>{children}</GlassfyContext.Provider>
  );
};

// Export context for easy usage
export const useGlassfy = () => {
  return useContext(GlassfyContext);
};
