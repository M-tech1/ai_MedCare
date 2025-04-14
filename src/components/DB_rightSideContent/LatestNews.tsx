interface newsItem {
  id: number;
  headline?: string;
  content: string;
  image?: string;
}

const newsData: newsItem[] = [
  {
    id: 1,
    headline: "New Breakthrough in Cancer Research",
    content:
      "Scientists have developed a new therapy that significantly improves treatment outcomes for certain types of cancer.",
    image:
      "https://scx1.b-cdn.net/csz/news/800a/2025/scientists-discover-th.jpg",
  },
  {
    id: 2,
    headline: "COVID-19 Vaccine Updates",
    content:
      "Recent studies show that the latest booster shot enhances immunity against emerging variants.",
    image:
      "https://www.amprogress.org/wp-content/uploads/2020/03/Microbes-1.jpg",
  },
  {
    id: 3,
    headline: "Heart Disease Prevention Tips",
    content:
      "Doctors recommend a balanced diet, regular exercise, and stress management to reduce heart disease risks.",
    image:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    headline: "Advancements in Diabetes Treatment",
    content:
      "New insulin delivery methods make it easier for patients to manage their blood sugar levels.",
    image: "",
  },
];

export default function LatestNews() {
  return (
    <>
      <div className="w-full h-full max-w-xl mx-auto bg-slate-50 p-4 rounded-lg shadow-2xl overflow-y-auto">
        <h2 className="text-l font-bold mb-4 text-center">Medical News</h2>

        {newsData.map((data) => (
          <div key={data.id} className="flex flex-row">
            <img
              className="w-12 h-12 rounded-md"
              src={data.image}
              alt="news-images"
            />
            <div className="ml-2 mb-2">
              <h2 className=" font-semibold">{data.headline}</h2>
              <small className="">{data.content}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
