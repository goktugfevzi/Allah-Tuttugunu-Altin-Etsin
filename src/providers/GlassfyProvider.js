import { createContext, useContext, useEffect, useState } from "react";
import { Glassfy } from "react-native-glassfy-module";
import { increaseHealth } from "../context/healthSlice";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";
import { GLASSFY_API } from "@env";

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
      }
      await loadOfferings();
      setIsReady(true);
    };
    init();
  }, []);

  // Load all permissions a user has
  const loadOfferings = async () => {
    try {
      const sku = await Glassfy.offerings();
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
      console.log(skuObject);
      return;
    }

    const skuDTO = {
      skuId: skuObject.skuId,
      productId: skuObject.productId,
      store: skuObject.store,
    };
    try {
      const transaction = await Glassfy.purchaseSku(skuDTO);
      console.log(transaction);
      if (transaction.receiptValidated || transaction.permissions) {
        handleSuccessfulTransactionResult(skuDTO);
      }
    } catch (error) {
      if (error.code.indexOf("PendingPurchase") >= 0) {
        console.log("içerideyim pending");
        showMessage({
          message: "Teşekkürler <3",
          description:
            "Bir Öğrenciye Destek Oldunuz, Ödeme tamamlandığında can verilecektir.",
          type: "info",
        });
      } else {
        showMessage({
          message: "Başarısız",
          description: "Satın Alma İşlemi Gerçekleşmedi",
          type: "danger",
        });
      }
    }
  };

  // Update the user state based on what we purchased
  const handleSuccessfulTransactionResult = (transaction) => {
    const productID = transaction.productId;
    console.log("handlesuccesful çalışıyor");
    if (productID.indexOf("item5") >= 0) {
      dispatch(increaseHealth(5));
      console.log("item5");
    }

    if (productID.indexOf("item10") >= 0) {
      dispatch(increaseHealth(10));
      console.log("item10");
    }

    if (productID.indexOf("item20") >= 0) {
      console.log("çalıştım");
      dispatch(increaseHealth(20));
    }
    if (productID.indexOf("item50") >= 0) {
      dispatch(increaseHealth(50));
      console.log("item556");
    }
    if (productID.indexOf("item100") >= 0) {
      console.log("item1312315");
      dispatch(increaseHealth(100));
    }
    showMessage({
      message: "Teşekkürler <3",
      description: "Bir Öğrenciye Destek Oldunuz",
      type: "info",
    });
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
