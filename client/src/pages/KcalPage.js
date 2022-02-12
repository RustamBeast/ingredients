import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';

function KcalPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  }, [count]);

  return (
        <Layout>
            <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
            </div>
        </Layout>
  );
}

export default KcalPage;