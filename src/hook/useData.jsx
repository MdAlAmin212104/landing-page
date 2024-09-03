import { useQuery } from "react-query";
import useAxios from "./useAxios";


const useData = () => {
   const axiosCommon = useAxios();
   const {data : house = [], islodding, isError} = useQuery({
    queryKey: 'house',
    queryFn: async () => {
      const res = await axiosCommon.get('/house')
      return res.data;
    }
  })
  return [house, islodding, isError]
};

export default useData;