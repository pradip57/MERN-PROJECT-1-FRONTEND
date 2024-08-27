//Hlo just started

//imp about useState and useEffect

const [data1, setData1] = useState(1);
  const [data2, setData2] = useState(2);

  console.log(data1);
  console.log(data2);

  useEffect(() => {
    console.log(data1 + data2);
  });

  useEffect(() => {
    console.log("Only once");
    setData1(4);
  }, []);

  useEffect(() => {
    console.log("change bhaye matra chalxa");
  }, [data1]);

  //for validation react form

  -react hook form
  -formik