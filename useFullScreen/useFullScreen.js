export const useFullScreen = (onFullCallback) => {
    const element = useRef();
    const RunCallback = (isFull) => {
      if (onFullCallback && typeof onFullCallback === "function") {
        onFullCallback(isFull);
      }
    };
    const FullscreenTrigger = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullScreen) {
          element.current.webkitRequestFullScreen();
        } else if (element.current.msRequestFullScreen) {
          element.current.msRequestFullScreen();
        }
        RunCallback(true);
      }
    };
    const FullscreenExit = () => {
      document.exitFullscreen();
      if (document.exitFullScreen) {
        document.exitFullScreen();
      } else if (document.webkitExitFullScreen) {
        document.webkitExitFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullScreen) {
        document.msExitFullScreen();
      }
      RunCallback(false);
    };
    return { element, FullscreenTrigger, FullscreenExit };
  };