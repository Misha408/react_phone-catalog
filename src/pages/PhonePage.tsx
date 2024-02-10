import { useSearchParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Pagination } from '../component/Pagination';
import { Footer } from '../component/Footer';
import { PhonesInfo } from '../component/PhonesInfo';
import { ProductsList } from '../component/ProductsList';
import { ProductFilters } from '../component/ProductFilters';
import { ProductContext } from '../ProductContext';
import { Loader } from '../component/Loader';
import { getPhones } from '../api/api';

export const PhonePage = () => {
  const { phones, setPhones } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || '16';

  useEffect(() => {
    setLoading(true);

    getPhones()
      .then((phonesData) => {
        setPhones(phonesData);
      })
      .finally(() => setLoading(false));
  }, [setPhones]);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="PhonePage">
      <PhonesInfo />
      <ProductFilters />
      <ProductsList product={phones} />
      {perPage !== 'all' && (
        <Pagination />
      )}
      <Footer />
    </div>
  );
};