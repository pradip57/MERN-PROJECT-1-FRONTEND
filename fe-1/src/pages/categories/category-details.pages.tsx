import { useParams } from "react-router-dom";


const CategoriesDetailPage = () => {
  const params = useParams();
  return <>{params.slug}</>;
};

export default CategoriesDetailPage;
