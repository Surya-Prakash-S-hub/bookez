import { Star as StarFilled } from "lucide-react";

export const Feedbacks = () => {
  const users = [
    {
      name: "Aarav",
      command:
        "Open Goodreads platform\nSearch for top trending books\nFilter by ratings above 4\nSave books to personal shelf\nCompare reader reviews before reading",
      pic: "AV",
    },
    {
      name: "Diya",
      command:
        "Use Amazon Kindle library\nBrowse new releases section\nDownload free sample chapters\nHighlight important notes while reading\nSync books across all devices",
      pic: "DA",
    },
    {
      name: "Rahul",
      command:
        "Explore Google Books database\nSearch academic and fiction books\nPreview chapters online\nCheck author background details\nBookmark useful references",
      pic: "RL",
    },
    {
      name: "Priya",
      command:
        "Access Open Library website\nBorrow digital books for free\nSearch rare historical books\nDownload PDF versions if available\nTrack reading history easily",
      pic: "PA",
    },
    {
      name: "Karthik",
      command:
        "Use Scribd reading platform\nFind ebooks and audiobooks\nListen to narration while traveling\nCreate custom reading lists\nFollow recommended authors",
      pic: "KK",
    },
    {
      name: "Meera",
      command:
        "Browse Project Gutenberg library\nRead classic literature freely\nDownload public domain books\nSwitch between reading formats\nExplore thousands of old books",
      pic: "MA",
    },
  ];
  return (
    <>
      <section className="mx-auto px-6 py-12">
        <div className="coursal">
          <div className="groupFed">
            {users.map((user, index) => (
              <div className="card" key={index}>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarFilled
                      key={i}
                      size={16}
                      fill="gold"
                      className="text-yellow-400 "
                    />
                  ))}
                </div>
                <div className="comments">
                  <h1>
                    <pre>“{user.command}”</pre>
                  </h1>
                </div>
                <div className="userdetails">
                  <div className="picture">{user.pic}</div>
                  <div className="username">{user.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="groupFed">
            {users.map((user, index) => (
              <div className="card" key={index}>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarFilled
                      key={i}
                      size={16}
                      fill="gold"
                      className="text-yellow-400 "
                    />
                  ))}
                </div>
                <div className="comments">
                  <h1>
                    <pre>“{user.command}”</pre>
                  </h1>
                </div>
                <div className="userdetails">
                  <div className="picture">{user.pic}</div>
                  <div className="username">{user.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
