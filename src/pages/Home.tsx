import React, { useEffect, useState } from "react";
import axios from "axios";
import Welcome from "../assets/images/welcome.jpg";
import Slider2 from "../assets/images/slide-2.png";
import Slider from "../assets/images/slider.jpg";
import Voucher from "../components/Voucher";

import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../redux/actions";

interface HomeProps {}

interface Planet {
  name: string;
}

const Home: React.FC<HomeProps> = () => {
  const dispatch: Dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);
  const loading = useSelector((state: any) => state.loading);
  const error = useSelector((state: any) => state.error);

  const [vouchers, setVouchers] = useState<Planet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/planets");
        setVouchers(response.data.results);
        //dispatch(fetchDataSuccess(response.data.results));
      } catch (error) {
        //dispatch(fetchDataFailure("Hubo un error al cargar los datos."));
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div className="overflow-y-auto">
      <div className="bg-black w-full h-[400px] flex">
        <img src={Welcome} alt="welcome" className="w-full object-contain" />
      </div>
      <img
        src={Slider2}
        alt="slider-2"
        className="w-full object-contain h-full"
      />
      <div className="bg-gray-200 w-full h-[200px] grid grid-cols-2 p-8">
        <div className="text-5xl font-medium flex items-end justify-center ">
          VOUCHERS
        </div>
        <div className="w-[300px] text-xl text-left">
          Porque es un espacio creado para obsequiarle a nuestra comunidad,
          importantes descuentos, beneficios y experiencias exclusivas de
          nuestras marcas.
        </div>
      </div>
      <div className="mt-4 p-10">
        <div className="text-[30px] text-gray-500 mb-2">Vouchers</div>
        <hr className="border-t border-gray-300 w-full" />
        <div className="grid grid-cols-3 gap-4">
          {vouchers?.map((item, index) => (
            <Voucher key={index} name={item.name} imageUrl="url" />
          ))}
        </div>
      </div>
      <img src={Slider} alt="slider" className="w-full object-contain h-full" />
    </div>
  );
};

export default Home;
