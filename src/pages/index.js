import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Home = ({ api, message }) => {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Nextjs Custom server</title>
                    <meta name="description" content="Next.js server custom app" />
                </Head>

                <main className={styles.main}>
                    <h2 className={styles.title}>Next.js server custom app...</h2>

                    <p className={styles.description}>
                        Get started by {' '}
                        <code className={styles.code}>
                            <Link href={api.endpointPath} >
                                <a>api/hello</a>
                            </Link>
                        </code>
                    </p>

                    <div>
                        api message: {message}
                    </div>
                </main>

                <footer>
                    <a href="https://hml-intelligence.com" target="_blank" rel="noopener noreferrer">
                        Powered by{' '}
                        <span>HML - Intelligence</span>
                    </a>
                </footer>
            </div>

        </>
    );
};

Home.getInitialProps = async (ctx) => {
    const api = {
        endpointPath: process.env.HOST + '/api/hello'
    };
    const res = await fetch(api.endpointPath);
    const { message } = await res.json();

    return { api, message };
}

export default Home;