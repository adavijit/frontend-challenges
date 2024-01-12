import userEvent from "@testing-library/user-event";
import { createContext, useEffect, useRef, useState } from "react";

export const AccordianContext = createContext({});

const AccordianContextProvider = ({ key, defaultValue, content, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [maxHeight, setMaxHeight] = useState();
  const collapseContentDivRef = useRef();
  const isProcessingRef = useRef(false);

  useEffect(() => {
    setMaxHeight(collapseContentDivRef.current.clientHeight);
    toggleCollapse();
  }, []);

  useEffect(() => {
    _toggleCollapse(defaultValue);
  }, [defaultValue]);

  const toggleCollapse = () => {
    _toggleCollapse(isCollapsed);
  };

  const _toggleCollapse = (value) => {
    if (isProcessingRef.current) return;
    if (!content) return;
    setIsCollapsed(!value);
    isProcessingRef.current = true;

    if (value) {
      // is expand. need to transition to collapse
      // save maxHeight when full content is expanded
      // height is unset
      // set height to max height
      // after timeout set height to 0
      setMaxHeight(collapseContentDivRef.current.clientHeight);
      collapseContentDivRef.current.style.maxHeight =
        collapseContentDivRef.current.clientHeight + "px";
      setTimeout(() => {
        collapseContentDivRef.current.style.maxHeight = 0 + "px";
        isProcessingRef.current = false;
      }, 100);
    } else {
      // is collapsed. need to transition to expand.
      // height is 0
      // set height to max height
      // after settimout set height to unset
      collapseContentDivRef.current.style.maxHeight = maxHeight + "px";
      setMaxHeight(collapseContentDivRef.current.clientHeight);
      setTimeout(() => {
        collapseContentDivRef.current.style.maxHeight = "unset";
        isProcessingRef.current = false;
      }, 100);
    }
  };

  return (
    <AccordianContext.Provider
      key={key}
      value={{ collapseContentDivRef, isCollapsed, toggleCollapse }}
    >
      {children}
    </AccordianContext.Provider>
  );
};

export default AccordianContextProvider
