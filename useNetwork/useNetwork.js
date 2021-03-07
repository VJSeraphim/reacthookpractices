export const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.online)
    const handleChange = () => {
      if(typeof onChange === "function") {
        onChange(navigator.online)
      }
      setStatus(navigator.online)
    }
    useEffect(() => {
      window.addEventListener("online", handleChange)
      window.addEventListener("offline", handleChange);
      () => {
        window.removeEventListener("online", handleChange)
        window.removeEventListener("offline", handleChange)
      }
    }, [])
    return status
  }