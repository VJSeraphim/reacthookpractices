export const useAxios = (opts, axiosClient = defaultAxios) => {
    const [state, setState] = useState({
      loading: true,
      error: null,
      data: null
    });
    const [trigger, setTrigger] = useState(0);
    if (!opts.url) {
      return;
    }
    const refetch = () => {
      setState({
        ...setState,
        loading: true
      });
      setTrigger(Date.now());
    };
    useEffect(() => {
      axiosClient(opts)
        .then((data) => {
          setState({
            ...state,
            loading: false,
            data
          });
        })
        .catch((error) => {
          setState({ ...state, loading: false, error });
        });
    }, [trigger]);
    return { ...state, refetch };
  };
  