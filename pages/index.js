import Head from "next/head";
import siteMeta from "../siteMeta";
export default function Home() {
  return (
    <>
      <Head>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <link rel="icon" href={siteMeta.favicon} />
        <meta property="og:title" content={siteMeta.title} />
        <meta property="og:description" content={siteMeta.description} />
        <meta property="og:image" content={`${siteMeta.domain}/favicon.ico`} />
        <meta property="og:type" content="website" />
        <meta name='twitter:card' content='summary_large_image'/>
        <meta name='twitter:image' content={`${siteMeta.domain}/favicon.ico`} />
      </Head>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to {siteMeta.title}</h1>
        <p>{siteMeta.description}</p>
      </div>
    </>
  );
}