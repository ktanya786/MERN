import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (fetchStatus.fetchDone) {
      return;
    } else {
      dispatch(fetchStatusAction.markFetchingStarted());
      fetch("http://localhost:8080/items")
        .then((res) => res.json())
        .then(({ items }) => {
          dispatch(fetchStatusAction.markFetchDone());
          dispatch(fetchStatusAction.markFetchingDone());
          dispatch(itemsAction.addInitialItems(items[0]));
        });

      return () => {
        console.log("Cleaning up use Effect");
        controller.abort();
      };
    }
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
