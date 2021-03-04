export const useTabs = (initialTab, entireTabs) => {
    if (!entireTabs || !Array.isArray(entireTabs)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: entireTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };