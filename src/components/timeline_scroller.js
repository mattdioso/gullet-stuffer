import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    useMemo,
  } from "react";
  import PropTypes from "prop-types";
  
  import usePrevious from "./usePrevValue";
  import { SectionContainer } from "./section_container";
  
  // if (!global._babelPolyfill) {
  //   require("babel-polyfill");
  // }
  
  const DEFAULT_ANIMATION_TIMER = 1000;
  const DEFAULT_ANIMATION = "ease-in-out";
  const DEFAULT_CONTAINER_HEIGHT = "100vh";
  const DEFAULT_CONTAINER_WIDTH = "100vw";
  const DEFAULT_COMPONENT_INDEX = 0;
  const DEFAULT_COMPONENTS_TO_RENDER_LENGTH = 0;
  
  const DEFAULT_ANIMATION_TIMER_BUFFER = 200;
  const KEY_UP = 38;
  const KEY_DOWN = 40;
  const MINIMAL_DELTA_Y_DIFFERENCE = 1;
  const DISABLED_CLASS_NAME = "rps-scroll--disabled";
  
  let previousTouchMove = null;
  let isScrolling = false;
  let isBodyScrollEnabled = true;
  let isTransitionAfterComponentsToRenderChanged = false;
  
  export const TimelineScroller = ({
    animationTimer,
    animationTimerBuffer,
    blockScrollDown,
    blockScrollUp,
    children,
    containerHeight,
    containerWidth,
    customPageNumber,
    handleScrollUnavailable,
    onBeforePageScroll,
    pageOnChange,
    renderAllPagesOnFirstRender,
    transitionTimingFunction,
  }) => {
    const [componentIndex, setComponentIndex] = useState(DEFAULT_COMPONENT_INDEX);
    const [componentsToRenderLength, setComponentsToRenderLength] = useState(
      DEFAULT_COMPONENTS_TO_RENDER_LENGTH,
    );
    const prevComponentIndex = usePrevious(componentIndex);
    const scrollContainer = useRef(null);
    const pageContainer = useRef(null);
    const lastScrolledElement = useRef(null);
    const isMountedRef = useRef(false);
    const containersRef = useRef([]);
    children = useMemo(() => React.Children.toArray(children), [children]);
    const TOUCHMOVE = "touchmove";
    const KEYDOWN = "keydown";
    const isNil = value => value === undefined || value === null;

    const isNull = value => value === null;

    const isPositiveNumber = value => value > 0;
    const positions = useMemo(
      () =>
        children.reduce(
          (_positions, _children) => {
            const lastElement = _positions.slice(-1);
            const height = _children.props.height
              ? parseInt(_children.props.height)
              : 100;
            return _positions.concat([lastElement - height]);
          },
          [0],
        ),
      [children],
    );
  
    const scrollPage = useCallback(
      nextComponentIndex => {
        if (onBeforePageScroll) {
          onBeforePageScroll(nextComponentIndex);
        }
  
        pageContainer.current.style.transform = `translate3d(0, ${positions[nextComponentIndex]}%, 0)`;
        //pageContainer.current.style.transform = `translate3d(${positions[nextComponentIndex]}%, 0, 0)`;
      },
      [onBeforePageScroll, positions],
    );
  
    const addNextComponent = useCallback(
      (componentsToRenderOnMountLength = 0) => {
        let tempComponentsToRenderLength = Math.max(
          componentsToRenderOnMountLength,
          componentsToRenderLength,
        );
  
        if (tempComponentsToRenderLength <= componentIndex + 1) {
          if (!isNil(children[componentIndex + 1])) {
            tempComponentsToRenderLength++;
          }
        }
  
        setComponentsToRenderLength(tempComponentsToRenderLength);
      },
      [children, componentIndex, componentsToRenderLength],
    );
  
    const checkRenderOnMount = useCallback(() => {
      if (renderAllPagesOnFirstRender) {
        setComponentsToRenderLength(React.Children.count(children));
      } else if (!isNil(children[DEFAULT_COMPONENT_INDEX + 1])) {
        const componentsToRenderAdditionally = positions.filter(
          position => Math.abs(position) < 200,
        ).length;
  
        addNextComponent(
          DEFAULT_COMPONENTS_TO_RENDER_LENGTH + componentsToRenderAdditionally,
        );
      }
    }, [addNextComponent, children, positions, renderAllPagesOnFirstRender]);
  
    const disableScroll = useCallback(() => {
      if (isBodyScrollEnabled) {
        isBodyScrollEnabled = false;
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
        document.body.classList.add(DISABLED_CLASS_NAME);
        document.documentElement.classList.add(DISABLED_CLASS_NAME);
      }
    }, []);
  
    const enableDocumentScroll = useCallback(() => {
      if (!isBodyScrollEnabled) {
        isBodyScrollEnabled = true;
        document.body.classList.remove(DISABLED_CLASS_NAME);
        document.documentElement.classList.remove(DISABLED_CLASS_NAME);
      }
    }, []);
  
    const setRenderComponents = useCallback(() => {
      const newComponentsToRender = [];
  
      let i = 0;
  
      while (i < componentsToRenderLength && !isNil(children[i])) {
        containersRef.current[i] = true;
        if (children[i].type.name === SectionContainer.name) {
          newComponentsToRender.push(
            <React.Fragment key={i}>{children[i]}</React.Fragment>,
          );
        } else {
          newComponentsToRender.push(
            <SectionContainer key={i}>{children[i]}</SectionContainer>,
          );
        }
        i++;
      }
  
      return newComponentsToRender;
    }, [children, componentsToRenderLength]);
  
    const scrollWindowDown = useCallback(() => {
      if (!isScrolling && !blockScrollDown) {
        if (!isNil(containersRef.current[componentIndex + 1])) {
          disableScroll();
          isScrolling = true;
          scrollPage(componentIndex + 1);
  
          setTimeout(() => {
            if (isMountedRef.current) {
              setComponentIndex(prevState => prevState + 1);
            }
          }, animationTimer + animationTimerBuffer);
        } else {
          enableDocumentScroll();
          if (handleScrollUnavailable) {
            handleScrollUnavailable();
          }
        }
      }
    }, [
      animationTimer,
      animationTimerBuffer,
      blockScrollDown,
      componentIndex,
      disableScroll,
      enableDocumentScroll,
      handleScrollUnavailable,
      scrollPage,
    ]);
  
    const scrollWindowUp = useCallback(() => {
      if (!isScrolling && !blockScrollUp) {
        if (!isNil(containersRef.current[componentIndex - 1])) {
          disableScroll();
          isScrolling = true;
          scrollPage(componentIndex - 1);
  
          setTimeout(() => {
            if (isMountedRef.current) {
              setComponentIndex(prevState => prevState - 1);
            }
          }, animationTimer + animationTimerBuffer);
        } else {
          enableDocumentScroll();
          if (handleScrollUnavailable) {
            handleScrollUnavailable();
          }
        }
      }
    }, [
      animationTimer,
      animationTimerBuffer,
      blockScrollUp,
      componentIndex,
      disableScroll,
      enableDocumentScroll,
      handleScrollUnavailable,
      scrollPage,
    ]);
  
    const touchMove = useCallback(
      event => {
        if (!isNull(previousTouchMove)) {
          if (event.touches[0].clientY > previousTouchMove) {
            scrollWindowUp();
          } else {
            scrollWindowDown();
          }
        } else {
          previousTouchMove = event.touches[0].clientY;
        }
      },
      [scrollWindowDown, scrollWindowUp],
    );
  
    const wheelScroll = useCallback(
      event => {
        if (Math.abs(event.deltaY) > MINIMAL_DELTA_Y_DIFFERENCE) {
          if (isPositiveNumber(event.deltaY)) {
            lastScrolledElement.current = event.target;
            scrollWindowDown();
          } else {
            lastScrolledElement.current = event.target;
            scrollWindowUp();
          }
        }
      },
      [scrollWindowDown, scrollWindowUp],
    );
  
    const keyPress = useCallback(
      event => {
        if (event.keyCode === KEY_UP) {
          scrollWindowUp();
        }
        if (event.keyCode === KEY_DOWN) {
          scrollWindowDown();
        }
      },
      [scrollWindowDown, scrollWindowUp],
    );
  
    useEffect(() => {
      const instance = scrollContainer.current;
      instance.addEventListener(TOUCHMOVE, touchMove);
      instance.addEventListener(KEYDOWN, keyPress);
      return () => {
        instance.removeEventListener(TOUCHMOVE, touchMove);
        instance.removeEventListener(KEYDOWN, keyPress);
      };
    }, [touchMove, keyPress]);
  
    useEffect(() => {
      isMountedRef.current = true;
  
      checkRenderOnMount();
      return () => {
        isMountedRef.current = false;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    useEffect(() => {
      isScrolling = false;
      previousTouchMove = null;
      if (componentIndex > prevComponentIndex) {
        addNextComponent();
      }
    }, [addNextComponent, componentIndex, prevComponentIndex]);
  
    useEffect(() => {
      if (pageOnChange) {
        pageOnChange(componentIndex);
      }
    }, [pageOnChange, componentIndex]);
  
    useEffect(() => {
      if (!isNil(customPageNumber) && customPageNumber !== componentIndex) {
        let newComponentsToRenderLength = componentsToRenderLength;
  
        if (customPageNumber !== componentIndex) {
          if (!isNil(containersRef.current[customPageNumber]) && !isScrolling) {
            isScrolling = true;
            scrollPage(customPageNumber);
  
            if (
              isNil(containersRef.current[customPageNumber]) &&
              !isNil(children[customPageNumber])
            ) {
              newComponentsToRenderLength++;
            }
  
            setTimeout(() => {
              setComponentIndex(customPageNumber);
              setComponentsToRenderLength(newComponentsToRenderLength);
            }, animationTimer + animationTimerBuffer);
          } else if (!isScrolling && !isNil(children[customPageNumber])) {
            for (let i = componentsToRenderLength; i <= customPageNumber; i++) {
              newComponentsToRenderLength++;
            }
  
            if (!isNil(children[customPageNumber])) {
              newComponentsToRenderLength++;
            }
  
            isScrolling = true;
            isTransitionAfterComponentsToRenderChanged = true;
            setComponentsToRenderLength(newComponentsToRenderLength);
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [customPageNumber, scrollPage]);
  
    useEffect(() => {
      if (isTransitionAfterComponentsToRenderChanged) {
        isTransitionAfterComponentsToRenderChanged = false;
  
        scrollPage(customPageNumber);
  
        setTimeout(() => {
          setComponentIndex(customPageNumber);
        }, animationTimer + animationTimerBuffer);
      }
    }, [
      animationTimer,
      animationTimerBuffer,
      componentsToRenderLength,
      customPageNumber,
      scrollPage,
    ]);
  
    return (
      <div
        ref={scrollContainer}

        className="w-full h-full bg-black overflow-hidden pt-28"
      >
        <div
          ref={pageContainer}
          onWheel={wheelScroll}
          //flex for sideways
          className={`w-full outline-none h-full transition transform duration-1000 ${transitionTimingFunction}`}
  
          tabIndex={0}
        >
          {setRenderComponents()}
        </div>
      </div>
    );
  };
  
  TimelineScroller.propTypes = {
    animationTimer: PropTypes.number,
    animationTimerBuffer: PropTypes.number,
    blockScrollDown: PropTypes.bool,
    blockScrollUp: PropTypes.bool,
    children: PropTypes.any,
    customPageNumber: PropTypes.number,
    handleScrollUnavailable: PropTypes.func,
    onBeforePageScroll: PropTypes.func,
    pageOnChange: PropTypes.func,
    renderAllPagesOnFirstRender: PropTypes.bool,
    transitionTimingFunction: PropTypes.string,
  };
  
  TimelineScroller.defaultProps = {
    animationTimer: DEFAULT_ANIMATION_TIMER,
    animationTimerBuffer: DEFAULT_ANIMATION_TIMER_BUFFER,
    transitionTimingFunction: DEFAULT_ANIMATION,
    blockScrollUp: false,
    blockScrollDown: false,
  };