import PostItem from "../../../components/PostItem"


export default function Posts({data, id}) {
  return <div className="m-10">
    <h1 className="mb-10 text-2xl font-bold">Posts relating to {id}</h1>
    <ol className="list-disc">
      {data.articles.map((item, index) => <PostItem key={Math.random(Date.parse(item.publishedAt) * 3)} {...item}/>)}
    </ol>
  </div>;
}

export async function getServerSideProps({params: {id}}) {
  const apiKey = process.env.NEWS_API 

  const res = await fetch(`https://newsapi.org/v2/everything?q=${id}&sortBy=publishedAt&language=en`, {
    headers: {
      "Authorization" : apiKey
    }
  });
  const data = await res.json();
  return {
    props:{data, id}
  }
}
