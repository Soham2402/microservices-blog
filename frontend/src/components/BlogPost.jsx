import React,{useEffect,useState}  from 'react' 

import { useParams } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai'

import { getPosts } from '../utils'

const BlogPost = () => {

  const {id} = useParams()
  const [post,setPost] = useState([])

  useEffect(()=>{
    getPosts(`http://localhost:8001/api/post/${4}`).then((data) => {setPost(data)})
  },[]) 


  console.log(post)
  return (
    <div className='flex justify-center flex-col items-center my-11'>
      <div className='w-[80%] bg-[#183D3D] shadow-xl flex flex-col gap-6 rounded-2xl'>


        {/* image section */}
        <section className=' max-h-[50vh] w-[100%] overflow-hidden rounded-2xl'>
            <img className='w-[100%] overflow-hidden'
            src="https://plus.unsplash.com/premium_photo-1695028377445-30e082fc4cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        </section>

        {/* title section */}
        <section className='w-[100%] md:px-8  px-5'>
            <h1 className='font-bold text-[2em] md:text-[2.5em] text-white'>{post.title}</h1>
        </section>

        {/* tag section  and like section*/}
        <section className='shadow-[#040D12] shadow-sm rounded-xl pb-11 px-5 md:px-8 flex md:flex-row flex-col justify-between items-center'>
        <section className='flex gap-4  justify-center items-center flex-wrap '>
              <h2 className='border-white border-2 text-white font-semibold rounded-xl px-6 py-3 text-xl cursor-pointer '>tag</h2>
              <h2 className='border-white border-2 text-white font-semibold rounded-xl px-6 py-3 text-xl cursor-pointer'>tag</h2>
              <h2 className='border-white border-2 text-white font-semibold rounded-xl px-6 py-3 text-xl cursor-pointer'>tag</h2>
              <h2 className='border-white border-2 text-white font-semibold rounded-xl px-6 py-3 text-xl cursor-pointer'>tag</h2>
        </section>

        <div className='flex justify-start items-center gap-10 px-4 py-10 text-white  text-xl'>
          <p>23-2-2023</p>
          <a  href = "" className='flex gap-1 border-white border-2 border-rounded px-6 py-2 rounded-md'>
            <p>{post.likes}</p>

            <AiFillLike />
          </a>
        </div>

        </section>

                    
        {/* body section */}

        <section className='flex flex-col items-center justify-evenly text-white text-2xl px-10'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo saepe, dolore voluptatum reprehenderit illo assumenda eveniet rem sapiente. Aliquid laborum quidem molestias modi alias maxime ipsa quo unde facilis, nulla qui pariatur reiciendis suscipit ut nostrum maiores. Consequatur sit quae harum unde id. Totam ratione a ea ullam assumenda officia eveniet quaerat eum, quia repudiandae temporibus nesciunt soluta alias debitis corporis deleniti quae non animi perspiciatis atque molestias et doloremque incidunt! Aliquam harum exercitationem laboriosam assumenda nihil hic rem, corrupti libero blanditiis deserunt, aspernatur necessitatibus maiores consectetur atque quos ea vel ut quia. Facilis omnis nisi praesentium nesciunt et, sed odit at sunt, ex voluptas odio. Quia omnis officia error laboriosam, expedita, tenetur ipsum perspiciatis ratione, explicabo velit debitis consequuntur nobis? Libero, similique provident. Nihil magnam dicta tempora rem. Necessitatibus esse eveniet exercitationem repudiandae molestiae consectetur sapiente deserunt alias. Porro in saepe voluptas quibusdam sed ea voluptate error at illo eum incidunt tempore, beatae nemo odio quam nam. Odio quas beatae tempore consequatur porro qui earum vitae perferendis delectus. Delectus quas libero iusto corrupti, minus sit perspiciatis ipsam consequatur incidunt autem. Accusamus modi voluptatem, nesciunt assumenda mollitia iusto ad exercitationem aut natus qui, voluptatum alias repellat numquam et a! Quod quis nobis error doloremque, qui numquam asperiores placeat, aliquid temporibus odio reprehenderit quaerat illo sed. Fugiat ipsam rerum quos, quis exercitationem placeat reprehenderit aut soluta? Ab, doloremque. Temporibus eos totam quod accusamus molestias commodi ex ipsum minus eius! Ducimus animi quas tempora illum rem, suscipit error tempore, cumque quos incidunt quam ab delectus! Consectetur earum fuga temporibus commodi, reiciendis, possimus optio quibusdam harum ad odit facere non corporis, est et tempora adipisci assumenda magni esse facilis ex doloremque inventore! Tempore dolor quam eum officiis. Fugit explicabo molestiae ipsam culpa cum, dignissimos exercitationem ratione sint, earum placeat sed eos non eaque numquam consectetur veniam perferendis illum! Cupiditate doloremque aliquid dolorem provident modi nobis inventore ipsum, iste asperiores mollitia eaque explicabo voluptatibus consequatur dolore reprehenderit commodi tenetur delectus autem ea? Vitae laboriosam, iure obcaecati aut sed maiores dignissimos quasi consectetur mollitia ratione velit impedit ipsum porro odio dolorum reiciendis corporis repellat similique adipisci fugit asperiores veritatis totam ipsam. Dignissimos consequuntur officia enim, veritatis sunt tempora natus, sapiente incidunt quod eaque voluptas nam mollitia, rem quos dicta nostrum laborum aliquam perferendis! Doloremque pariatur quis officia laboriosam illum sed id odio labore facilis ducimus voluptatum, velit excepturi exercitationem error minus dignissimos perspiciatis possimus rem. Voluptates, temporibus iure asperiores, blanditiis maiores eum dolore quos voluptatibus accusantium doloremque culpa modi tenetur suscipit perferendis cumque inventore optio est? Autem asperiores veniam natus consequatur atque dolor eligendi, accusantium perspiciatis quisquam facere error exercitationem delectus harum debitis vero veritatis, quae illo ab eos libero molestiae. Fuga dolore deleniti voluptatem doloremque eos saepe illo rerum esse unde alias velit id, illum impedit expedita omnis. Deserunt modi odio, laborum quasi non sapiente quod commodi fugit neque illum error fugiat ducimus eius quisquam facilis est tenetur quis adipisci explicabo repellat alias. Est, dolore similique! Temporibus quaerat nemo dicta possimus aliquid nulla praesentium facere veniam labore tempore vero voluptatum eligendi, assumenda rem corrupti ullam. Nobis similique eveniet aliquid. Blanditiis, facere doloribus a rem accusamus culpa autem sapiente iure in placeat, voluptates nostrum cumque itaque? Soluta in libero quod obcaecati quidem ipsam ipsum. Tenetur voluptas ipsa adipisci laudantium, modi doloribus dolor perferendis dolores sed magni repudiandae ab! Consequuntur obcaecati officiis neque fuga eaque itaque est quia id, mollitia hic aliquam rerum, modi, atque tenetur cupiditate inventore quaerat aut? Nam, quos. Fuga officia repellat veritatis, alias iusto odio ratione doloribus. Delectus obcaecati nisi odio laborum consequatur dolorem nam, totam rerum quisquam eaque repellat iure aliquam. Quam, voluptatem eos vel exercitationem sint fugiat nulla nihil repudiandae nesciunt ex quisquam possimus ipsam perferendis harum ducimus architecto quis quasi veritatis! Maxime cum, ut dolores beatae ullam reprehenderit. Minus exercitationem expedita totam molestias alias, blanditiis doloremque neque dolores laudantium, debitis ducimus quasi obcaecati ratione consequatur repellendus rem et omnis vero iste, atque ea excepturi quae temporibus. Illo explicabo, minima esse nesciunt alias voluptatum, dolores culpa, ullam itaque tempore perspiciatis facilis quae! Doloremque, corrupti, distinctio, quos suscipit hic assumenda possimus culpa non ipsum nesciunt quia adipisci harum itaque eveniet ipsam. Praesentium aut sapiente, maxime velit magni dolor eum, dolorem labore veniam eveniet recusandae, architecto quos blanditiis eius corrupti. Quae, quisquam? Voluptatem, consectetur. Earum ut assumenda libero dolore soluta ipsum iusto! Repellat, ut! Dolor, distinctio? Possimus eius praesentium nam a numquam sapiente nisi ducimus molestias temporibus consequatur omnis maxime, aliquid nulla itaque necessitatibus quae. Tempora explicabo esse hic pariatur error dolorem impedit praesentium corrupti ex non est rem consequatur fugit ratione quaerat magnam neque quisquam, magni distinctio amet temporibus, unde minus? Et esse, ea neque quaerat voluptas ullam, provident dolores eum asperiores, mollitia possimus quidem quod porro! Molestiae voluptate saepe mollitia et! Tempora eos voluptatum a quo magnam ea soluta et adipisci, repudiandae quae assumenda possimus, incidunt eligendi, neque quasi! Molestiae inventore officia veritatis commodi voluptas earum doloribus doloremque autem illum. Cumque quidem qui dicta aliquam dolores totam ad atque possimus culpa laudantium facere, doloremque praesentium, vel quisquam ratione? Suscipit, numquam nostrum. Et facilis quos fugit, doloremque in corporis at, architecto, provident ullam accusamus hic ipsum facere beatae voluptate officia asperiores quam deleniti nihil aspernatur labore. Totam ex pariatur molestias quos asperiores maxime reprehenderit sequi eligendi nemo. Molestias ipsum exercitationem tenetur minus obcaecati animi laboriosam culpa incidunt voluptates fugit eius, modi recusandae eum doloremque quis facilis perspiciatis quas consequuntur aperiam nesciunt! Asperiores natus atque harum adipisci, distinctio mollitia odit totam aut labore ab delectus earum corporis deleniti quaerat facere. Dolore earum voluptatum consequatur libero vero asperiores, voluptas quos? Rerum, repudiandae provident quisquam facilis illum placeat. Praesentium, temporibus eligendi qui quas dolorum inventore asperiores maxime similique possimus rerum nostrum dolor officiis optio nesciunt eius odit autem placeat et quisquam sint porro in ad! Iure beatae in necessitatibus voluptatibus iste alias quidem. Aut, earum. Debitis maiores eum fuga ut fugit, laboriosam maxime, quae perferendis non dicta obcaecati odit in ex beatae, incidunt cupiditate. Dolore beatae temporibus deleniti porro sint ipsam obcaecati voluptatibus eum pariatur quam, iure, cum velit assumenda quaerat? Adipisci incidunt ut, ipsam, unde cum eligendi ad dignissimos optio laboriosam earum sit eius alias placeat veniam ratione molestias deleniti facilis rem. Deleniti modi recusandae excepturi, ducimus quidem iure libero voluptatem animi alias saepe autem doloremque iste quas dicta! Sed maxime magnam, doloribus nulla rem beatae aspernatur inventore veritatis quibusdam accusantium aut similique eum perspiciatis fugiat consectetur placeat quidem rerum eius. Veritatis quidem vero molestiae tempora aliquam sed, illum adipisci, doloremque quae beatae nemo, neque cum perspiciatis laboriosam assumenda quia harum consequuntur. Dignissimos adipisci suscipit voluptates explicabo tenetur ipsa consequatur magnam pariatur accusamus animi praesentium voluptas, culpa perspiciatis rem quia hic quae delectus enim optio facere dolorum incidunt atque? Adipisci veritatis voluptates, totam sed enim voluptatum architecto maiores quidem veniam rerum commodi qui natus perferendis inventore. Itaque, maxime molestias perferendis incidunt cumque sed ipsa optio aperiam nesciunt impedit. Recusandae facilis at est quisquam aliquam sed beatae minima architecto iusto sint, facere dignissimos nesciunt maxime odit assumenda voluptatum illo autem tempore sequi hic magni. Ullam porro explicabo laudantium minima tenetur, nam incidunt quae, aspernatur quisquam, omnis voluptatem tempora veritatis quas in adipisci odio optio atque rerum harum reiciendis. Quam autem quos asperiores deserunt illo possimus? Recusandae magni voluptatum distinctio perferendis rem libero placeat quos iure et, obcaecati amet cupiditate deleniti voluptatibus laborum doloribus sunt sint labore odit saepe rerum voluptas quae vitae? Magnam voluptas maxime, quos reiciendis itaque dolorem alias dolores et molestiae vel repellat in. Architecto quidem aut provident, quis praesentium et nisi temporibus, culpa repudiandae possimus voluptas aliquam sapiente iusto! Incidunt dolorum veritatis itaque optio officiis consequuntur quibusdam harum? Recusandae, itaque aliquam. Quidem tenetur ducimus praesentium nisi iste laborum perspiciatis, voluptatem nihil dicta, impedit aliquam dolorem vel tempore. Accusamus dignissimos beatae eius in molestias molestiae recusandae harum! Non aspernatur nisi laudantium perspiciatis quo dolorum ipsa, nostrum voluptates doloremque assumenda sed illum unde quaerat facilis dolorem repudiandae soluta mollitia! Tempore facilis aut quasi culpa, maiores reiciendis, et exercitationem corporis aperiam vero necessitatibus inventore, quidem maxime aliquam pariatur in itaque? Libero velit assumenda officiis dolor sed natus pariatur in asperiores accusamus soluta quisquam maiores id ea, cum alias aut quos deleniti. Veritatis unde sit impedit esse eveniet libero quidem doloribus. Sunt ex illo, quod eaque modi unde obcaecati reprehenderit, vero consequuntur ad doloremque! Et natus, quasi minima velit odit libero esse voluptas molestiae perferendis ipsum, rem, dolores earum molestias voluptatum debitis. Corrupti quae commodi magni enim blanditiis praesentium sequi voluptatibus quod fugiat molestiae. Beatae obcaecati possimus voluptatum quam! Voluptatem pariatur ipsum, voluptatibus suscipit facilis totam, asperiores eveniet est minima modi qui doloremque in quae corporis quas sunt architecto saepe hic nisi velit obcaecati! Labore qui quasi excepturi! Aspernatur error labore quis, dolore aperiam distinctio? Quisquam autem at id explicabo cum necessitatibus officia, porro numquam voluptatibus vero voluptate perferendis velit? Voluptatibus sapiente quaerat ducimus quas quod. Cupiditate tempore quasi aspernatur eos quidem explicabo ea, voluptatum porro iure accusamus consequuntur atque a assumenda hic autem facere architecto adipisci doloremque, quibusdam reprehenderit quae sunt veniam et eveniet. Itaque tempora iure voluptatem porro architecto qui consequatur culpa quia enim aperiam? Incidunt consequuntur deleniti iure rem nam optio. Rerum dolores expedita eveniet maxime iure odit ipsum assumenda nostrum, dolorem provident, a laborum dicta saepe cupiditate fugit doloremque pariatur quaerat error. Provident quasi laudantium ducimus dolore soluta sapiente voluptatum, accusamus alias repellendus exercitationem natus, quam nobis cum saepe vel voluptas porro maxime distinctio nihil dolores perspiciatis similique, nisi debitis. Rem, quam. Accusantium reprehenderit expedita nam cumque sed doloribus explicabo, odit aut! Numquam quo pariatur laborum vel nemo ipsa iure fugiat consectetur distinctio, necessitatibus ab obcaecati reprehenderit nobis nisi? Commodi, temporibus laudantium voluptatem, necessitatibus provident laboriosam itaque veniam quos qui officiis aliquam dolore, id consectetur aliquid! Aspernatur eveniet veritatis unde, possimus magnam laborum ipsam. Accusamus nostrum pariatur sed delectus officia nulla mollitia cumque! Consequatur repudiandae natus blanditiis harum assumenda aliquam sed laudantium accusamus ut magnam mollitia illum aperiam culpa optio ab similique, corrupti soluta possimus nihil, incidunt deserunt expedita alias ullam dolorum. Dignissimos iste molestiae nisi nostrum consequatur excepturi, quisquam eligendi rerum amet perspiciatis minus reprehenderit temporibus quis obcaecati eveniet enim earum doloribus! Unde, culpa vel. Repellendus impedit modi voluptate, dolore non doloremque accusantium voluptas quia nulla illum, qui quod animi debitis saepe odio magni minus. Vitae incidunt temporibus perferendis beatae maxime, natus in dolores voluptates earum reprehenderit expedita cupiditate eaque deleniti nisi! Itaque aliquam debitis nihil distinctio ipsum minima voluptates sunt facilis corrupti nobis voluptatum cupiditate architecto perferendis molestias obcaecati eveniet, quo quaerat nemo sapiente alias similique? Tenetur neque omnis impedit beatae, velit modi, quod cumque accusamus veritatis dolores eius molestiae dolor. Ex itaque aspernatur consectetur, dignissimos incidunt perferendis quos iste rerum laborum voluptas nostrum numquam, velit adipisci eum dolorum illum dolorem, ducimus vitae. Cum corporis voluptas tenetur explicabo nisi quisquam eveniet repellendus fuga natus vitae aut temporibus, quo impedit qui dolore modi, rem nobis? Dicta fugiat, aspernatur accusantium maiores, totam quae, consequatur ullam itaque atque dignissimos deserunt. Unde, veritatis dolore, architecto ex corrupti aut id ipsum doloribus doloremque quo consequuntur sapiente tempora ratione vero mollitia quia placeat molestiae dolorem? Sint, tenetur? Corrupti dolorum cumque rem culpa aspernatur veniam consequuntur maxime ex soluta magni eligendi earum adipisci aperiam asperiores temporibus error odio, libero sed. Iste debitis beatae reprehenderit, molestiae, numquam facere nemo nisi itaque, adipisci quis sapiente praesentium! Exercitationem iure maiores pariatur voluptas velit unde quidem vitae quisquam? Consequatur, fuga incidunt sequi odio eaque dolores omnis nisi quaerat? Autem id placeat maiores et suscipit. Fugit voluptates itaque voluptate nihil accusamus unde odio tenetur. Velit at, id qui ducimus libero perferendis eius reiciendis doloremque explicabo exercitationem corporis quod error expedita, et iste atque numquam voluptatem perspiciatis delectus. Quae reiciendis numquam ad quos, earum eveniet sed nulla illum, alias accusamus modi aut nihil ipsa rem culpa eaque soluta voluptate magnam neque recusandae dolorum at. Tempore fuga ratione fugiat in, cupiditate ut veniam labore eum enim vitae delectus ea qui ad praesentium molestias tempora autem voluptatibus officiis. Ullam similique, libero quibusdam necessitatibus placeat culpa reprehenderit ad atque sapiente? Blanditiis hic labore aliquam incidunt!
        </section>

      </div>
    </div>
  )
}

export default BlogPost