async function getData() {
  const res = await fetch(
      'http://127.0.0.1:8090/api/collections/films/records'  
  );
  const data = await res.json();
  return data?.items;
}

export default async function CardPage() {
  const records = await getData();

  return (
      <main className="flex justify-center items-center " data-theme="dark">
          {records?.map((val) => {

          return  <div class={`card w-[560px] bg-base-100 shadow-xl my-5 mx-[0.5125rem] bg-gradient-to-r from-[${val["BgColor1"]}] to-[${val["BgColor2"]}]`}>
                      <figure>
                      <iframe width="560" height="315" src={`${val["Trailer"]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </figure>
                      <div class="card-body">
                          <h2 className="card-title font-extrabold text-[24px]">{val["Title"]}</h2>
                          <p className="mb-3 font-light">{val["Description"]}</p>
                      <div className="card-actions justify-end">
                        {val["type"].map((type) => <button className={`btn btn-primary bg-[${val["BtnColor"]}] border-0`}>{type}</button>)}
                      </div>
                      </div>
                  </div>
          })}
      </main>
)
}