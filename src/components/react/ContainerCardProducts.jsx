import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { initFirestore } from '../../firebase/config';
import Search from './Search';
import Loading from './Loading';
import Product from './Product';

initFirestore();

function ContainerCardProducts() {
    const [supplements, setSupplements] = useState([ ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const db = getFirestore();
                const queryCollections = collection(db, 'supplements');
                const snapshot = await getDocs(queryCollections);
                const data = snapshot.docs.map(supplement => ({ id: supplement.id, ...supplement.data() }));
                setSupplements(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    console.log(supplements)
    return (
        <section className='col-12 d-flex flex-row flex-wrap justify-content-center align-items-center gap-4 mt-5 mb-5 ps-3 pe-3 w-100' id="product">
            {loading ? (
                <Loading />
            ) : (
                supplements.map((element, index) => (
                    <Product key={index} product={element} />
                ))
            )}
        </section>
    );
}

export default ContainerCardProducts;
