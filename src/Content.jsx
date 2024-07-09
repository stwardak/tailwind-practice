export function Content() {
  const lizards = [
    {
      name: "Gecko",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, voluptate! Nesciunt sit, non corrupti deserunt deleniti at repellat, ut asperiores molestiae fuga vero ullam itaque veniam sequi, quibusdam obcaecati incidunt?",
      image: "https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2023/08/1920x910-Blog-Header-1-1-1280x640.jpg"
    },
    {
      name: "Iguana",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
      image: "https://d2zp5xs5cp8zlg.cloudfront.net/image-73118-800.jpg"
    },

    {
      name: "King",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel iusto, explicabo perferendis quod sapiente impedit consectetur in voluptate ad animi eveniet corrupti veniam sit illum dolore similique adipisci iure porro?",
      image: "https://www.reptilecentre.com/cdn/shop/articles/2946733f1f65584baa93e7509e72f011.jpg?v=1718288664"
    },
    {
      name: "Bearded Dragon",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sit numquam veritatis sequi laudantium, labore quas, explicabo, ipsam praesentium sed harum fugiat eveniet fuga reiciendis? In itaque inventore quo aliquam.",
      image: "https://s7d2.scene7.com/is/image/PetSmart/ARHERO-ASetUpGuideForNewBeardedDragonParents-20160818?$AR0301$"
    },
    {
      name: "Chameleon",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint placeat odio molestias, nemo nihil enim qui eligendi aut repudiandae sit magnam distinctio mollitia, maiores libero voluptatibus perferendis? Natus, aut pariatur!",
      image: "https://news.northwestern.edu/assets/Stories/2018/06/chameleon-odom-web__FocusFillWzY0NCwzMzgsInkiLDEyXQ.jpg"
    },

    {
      name: "Komodo Dragon",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae hic consequatur odit, fugit quaerat, assumenda nam blanditiis quisquam possimus ipsum facilis voluptas? Illo quasi facere incidunt vitae eaque quis.",
      image: "https://media.cntraveler.com/photos/590b484796ac4049cc0edcc0/16:9/w_2560%2Cc_limit/GettyImages-200253900-001.jpg"
    },
    {
      name: "Geico",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, voluptate! Nesciunt sit, non corrupti deserunt deleniti at repellat, ut asperiores molestiae fuga vero ullam itaque veniam sequi, quibusdam obcaecati incidunt?",
      image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2022/3/11/GettyImages-521447418.jpg.rend.hgtvcom.616.462.suffix/1648494137294.jpeg"
    },
    {
      name: "Blue-Crested",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet illo blanditiis commodi, ut enim non atque. Odio reiciendis ratione dignissimos laboriosam aspernatur ducimus saepe quas maxime, ex nulla quaerat.",
      image: "https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2021/09/blue-crested-lizard-1.jpg?fit=2500%2C1374&ssl=1"
    },

    {
      name: "Yellow-Spotted",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
      image: "https://images.articlesfactory.com/750x0/fb0ffc4b-7b53-470b-81e7-3c70b1f50427.webp"
    },
  ];

  return (
    <div>
      <h1 className="text-8xl font-serif flex justify-center mb-10">Lizards</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {lizards.map((lizard, index) => (
          <div key={index} className="border border-gray- p-2 shadow-lg mb-8 bg-white  ">
            <h2 className="text-4xl font-bold text-center mb-4">{lizard.name}</h2>
            <p className="text-gray-800 px-2 py-10 m-2 text-center">{lizard.description}</p>
            <img src={lizard.image} alt={lizard.name} className="w-8/12 h-auto mx-auto p-4"/>
          </div>
        ))}
      </div>
    </div>
  );
}
