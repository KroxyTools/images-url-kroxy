import Head from "next/head";
import fs from "fs";
import path from "path";
import siteMeta from "../../siteMeta";
export async function getServerSideProps({ params, res }) {
  const { image } = params;
  const imagePath = path.join(process.cwd(), "public/images", image);
  if (!fs.existsSync(imagePath)) {
    res.statusCode = 404;
    return { notFound: true };
  }
  const imageUrl = `${siteMeta.domain}/images/${image}`;
  return { props: { imageUrl, imageName: image } };
}
export default function EmbedPage({ imageUrl, imageName }) {
  return (
    <>
      <Head>
        <title>{imageName} | {siteMeta.title}</title>
        <link rel="icon" href={siteMeta.favicon} />
        <meta property="og:title" content={imageName} />
        <meta property="og:description" content={siteMeta.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <img src={imageUrl} alt={imageName} style={{ maxWidth: "90%" }} />
      </div>
    </>
  );
}