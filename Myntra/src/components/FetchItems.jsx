import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { itemAction } from "../Store/itemSlice";
import { fetchStatusActions } from "../Store/fetchStatusSlice";

const FetchItems = () => {

  const dispatch = useDispatch();
  
  const fetchStatus = useSelector(store=>store.fetchStatus)
  console.log(fetchStatus)

  useEffect(()=>{
    if(fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted())
    fetch("http://localhost:8080/items",{signal})
    .then(res=>res.json())
    .then(({items})=>{
      // dispatch(fetchStatusActions.markFetchDone())
      dispatch(itemAction.addInitialItems(items[0]))
      // console.log("items fetched",items)
    });
    return ()=>{
      controller.abort();
    }
  },[fetchStatus])
  return <>
  <div>
    FetchDone:{fetchStatus.fetchDone}
    CurrentlyFetching:{fetchStatus.CurrentlyFetching}
  </div>
  </>;
};

export default FetchItems;
