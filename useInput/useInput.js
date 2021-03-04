export const useInput = (initialValue, validation) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value }
      } = event;
      let willUpdate = true;
      if (typeof validation === "function") {
        willUpdate = validation(true);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };