var isAnagram = function (s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
};

// console.log(isAnagram("anagram", "nagaram"));

//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
var isPalindrome = function (s) {
  // const arr = s.toLowerCase()
  //   .split("")
  //   .filter((sym) => /[A-Za-z0-9]/g.test(sym))
  // console.log(arr);
  // return arr.join("") === arr.reverse().join("");

  const str = s.toLowerCase();
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (/[^A-Za-z0-9]/g.test(str[i])) {
      i++;
      continue;
    }
    if (/[^A-Za-z0-9]/g.test(str[j])) {
      j--;
      continue;
    }
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("ab_a"));

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function (haystack, needle) {
  const re = new RegExp(`(${needle})`, "g");
  return haystack.search(re);
};

// console.log(strStr("sadbutsad", "sad"));

//Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let i = 0;
  while (strs[0][i] && strs.every((w) => w[i] === strs[0][i])) {
    i++;
  }
  return strs[0].slice(0, i);
};

// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

//Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function (s) {
  if (s.length <= 1 && (10 ^ 5) <= s.length) {
    return new Error("1 <= s.length <= 105");
  }

  let index = 0;
  for (let i of s) {
    if (s.split(i).length - 1 === 1) {
      break;
    } else {
      index += 1;
    }
  }

  if (index === s.length) {
    return -1;
  } else {
    return index;
  }
  // let index = 0;
  // while (index < s.length) {
  //   const re = new RegExp(`[${s[index]}]`, "g");
  //   if (s.match(re).length === 1) {
  //     return index;
  //   }
  //   console.log(index);
  //   index++;
  // }

  // return -1;
};

// console.log(
//   firstUniqChar(
//     "anlowihibxrkhtqjedpwuuouoqtmtxeffeaxkcpcdgisqgkwxcmbnkaadrnwmbnfpgxfahocesjjfhdccbgfsimgcsxtglcavcpaaxkplcfwnnghnngrvftgmtqlxpdxxraqbcedbgnsabiljasggrlxivanhuacxcsndbvewxxfiksxfrmmneocxhhtxkjrsnvwxtllrevxcaetkqktjhchjbvdpkxmlcjmniqatvfqrtwwawglkbbwflkogdqdasoambklttrhdubcgjwlbsrptogunwnvjeehffddsfiwistnneufgdebursfdrhlxjluamschtrtrnwauehhicjgqeujrwmvkpmgexggdwopwoalutpkqkhmwifhwvgtjinmbfjawnwcwmdgnimnfqquxmoqtemeneqpqwcqpqblkhnqwuwkawdvlanepvnsnrlhrkrnpppmjiatpofxidqrrfulepltcbaelcojvladmndvjobvgapobkrfhtvqdenvxfjsclmjsbwpumcesmifupobcqdbjameemcrnauoubraprqedpegcvsivgfompmplfjwhagbspuslmmnkjrrkdfkandwlanpuchjavtetchdxfeggtqonbxhrgfsomhugdcrxxmfatsmufbiqukucihhdqdkxksnrxlheupnqanvsteexuvecwpbuevodcgmpwdlaooeuuigahdxemsoevhpurdwvnlpviqfdnxkdelxpcauplccrfnpfhoktrbxwwevepeggcxpwtsbhreijnckuoujnqqmpggtugecvfcancqquhhxlvoxehwmukqoldfoljoehfgagiexqufiqnbisjvligsuqctxqjevelbahefpaivlpwelbuigqumiwfhwlfvfvgfhiolqxtpijhvcxrwummpqodrlnnjlkojhcwojlgdpnawlmxjxghmfinjwwcibkmuwfnotuqbaukfgbwafeukolcpwnskngwqnqktpdsjcgeufogkxwlqvqslmdxxiwpmudofdiltwkoswkirnnuiqwvfqpjikbmadqivpslhebjgtwtepbirbwmfkshlcphebuirvrcnucmskbqtmbpcgioecebbsjhiacoclhjonvhvuegwffxfxteipeptaxnuwilrdrpijmsxqpfwsgcbghmkdskpnihiuwgelkeugnwaqrvjduxgjoideqbxjfhekvpfdqblnqcicsxiaxxesvijldejufnbpfpcvdntgoxpxtstjoamxpsoxwuxnjinnfvnamqwaxuvxuwdfjeejsarcwqqgbajsobftdtlfsrdkuewnbdvxojjkgatfevwpxlcphvrtaohpedgrgepleoaqmmktdacebmlmbwclqukamlbjpxtdlgneivmpfipbumcsihfvtkntdfruemxqfbawmsbdcnenpbwinwsraawrbivmxevkxqrofmbvuhikknpiawjwaxxcxmuxgwdrdbqdncuhrhnowpfiaeswtgwvfciobslfrpvgeukhjvsslpbbvkfpiffmkrqrbqmfbhipccuwfxpnagbcqpccpvlfxjeafjvkrtrwwvilnxergtwnbtswrmajlkechnimecrdamhqauremprrxhlvwfmixniqmkmtqeggjpcdwhwhtaindsofgfpstbqtwcjpwkjwjhxvrotkdiesuneqpwrogpuinuxxvldexliowdbftpoalodmupsfiffsjjwefxsimldwaooaltnoqxfblrkakwbqqhwgaxashqcmvolcvgagkharecjmuxjbvrivucurjjmbnlbnohjwchgdbupuvkwwoucbbivojwqobfopbppphoooxpnhggwhmsvsasnkiqibbvmrunkjcealbsjuxltmwkshrxldgwtcmcjkxrcmssecefmmpcmnemhjthxjcqrddmpedexhaxbtlqppgbibqbgagcrwmokkvlvviejutdbfmmafntjriqvuejjiwjwblisgnmqbeoebhxrwmvwfejoekdpjvingutixkjexdriifmjbsbpvvnxktjdheeibrkwqrnvghlwxwaphigmbcscenrfdjlfucxuapxdvbnorbvnanffinlwtaonumpvggbcjxpxgqfivxkkmcfsltflpvvmugajgobqrpohpnnvchiwlooddwkjpeqibxmxvjvgbptfbpnlbcobukaavwbinmwdegvrlqpvraohmpdecqeljoubultixghtfmlvpcpdasixpvronqkuijrxptxbgresmiuvtidjqmamuiplskrusuxqnbnlsgmwalkqvcgihponbatkaxqmpgpvhlfxlexrdemwwpfoostupwhsjxqcoqapncadqufsdmdowpcfnovqwccflbppqrsvhfnakwxbbtgsnltdekxrodvsxohegcownumxsrfgnqvbtttkcxghgshbewahodlmgjwwgnfjoeqlxgpbrfucqhikuxacidbwtksxgmbswwiqcfrqhlqscraffmrmolrdmpabularlxereaaonkdpnaicaltmhksvrrrdovcwgwnmvgvvsbtbbwxrnnmmcjulsxuhviirxukcnhpmqbkjnawlubgtahxfwdbejmrcgilltmwdfjqvdamwfiibrvutgsqkscgkcuqarfkckklxjwrdpjloucsolocracvpefspfjmkpunnqcfdtngkthcespwrstalevqsajlreogbatrmbdbnmuswwvvkswhucekxbniijqubrreibeuhqqmewwwugsiuojbqkdbhvubpsnoftaiixmaxbvbpxqfjqvtejgqxkhfkuphvoweqbhufqioduxgvxqtthefogewjhoqhlpaigscqlagjpajhebgmmgwwkjooldrtskvwfukgseqhglixxiwbidfonwuaqvaqdasdhokjfmupsxcfiocrtmcfrejpgfxigiiamauatcdxluarxdteeilnulmlucnsdtnlebqcvuejrebtdwikeakvhsnudflwbrdwwjmrtshtufvtvarudlgnkjuldwxubbjiussmfnnhlpervaoarcimfskwuuufdlabmjbddevexdpftpqxwnxmxkgovqhxxbhipjsoubxsiinxxforbllfkuitqbsteaghnatnjjdjwhoqabihemuneojwtiekelwfoghqtgsabqlwadxxnclngqavxevsnafcbelxxaljicltfvctntxfidncewovahooisrtqxxmmwgfqerjdxbvjprdcgwjvrgrbpiknbvpnlnwidftrxxglllcidnatohmfeinvbvldshmphvivcdouitopfuqmfafdqcnbfxaokejttbaarvxfvshiwklwgrnfenarwmpfevefnkskmdxwlhvathasllnrxbqvdtwcarnnfwatsxixrcxkxlpqkvlikhmnueotniutuqjlerqpidpfaxqalhikfwliliarmcixsvvjbpjiatniwklrpcfxhgxhvgcmmalqopugcdkqibhecvivfvjpiapcfowdwbnhrvpsoetabowrmxhcxqdrccdrrrdirwenthufglupcasxdiqjkmvxkxlujgjbgwjpkouxcxfpmstopitrqqopdmxkwvppermqrbhpjqoworcfcirubmgjddhuiohsepoxgbgwugpwrhfvjhqieafxcttdosqrgrftcexvcsqvntowpfrpkntqjftujqcgrgkfmuubmdrdjvliclfpdsidqppsqbvxowofubdvrkcsfgodsasboiujolqumejnucqtmjoisveitmvgaukudopctrebfjhiebpgkwurponhasctmquseerwjpussqviftniopvjxfhfxvuifdajwsteopjplcumibrpbvqakiilnptgufvslbtwkbkqswfffrlmdhpgsbcqfxpmqpvftikkodofemoddgcwlfrsmimwnwiukxhkwxjjjhxnenjolfahjpwwttvdvdgecqdalxhdveerhqeguiugxwgqumxqhgbnxxrakxdxpterqfjdxowcsjcjksrnqxjhrgrdexpxbtbvvvhmlqhmfbarlwlslxgcrmtwjacjdekngxfcjefugfriphnwvvbghjieibdgmxpamlnvimbrvfvnqfxlbbaksgouckmwfsqpxkonbqtntbvbtirxvmeptcgnodubgiolokasmomoqspukbllrvofrojqfvtwogpjsgllqicfdhngfpfxomueniffpprgfgeusthkgghknaghutqsuciupkemtsobvxnlplunfojvfojhwdcocobmwdvfbutxdbtnbfceoccnehqvtbmbrqgwtephciwqsfmdhrsjbkburwccenxuqbbifmuegdaexccnbqktfmoavahojnrpiajdntdcmpkcnildrbtrccacqpwbblecinoocsmsflctsajnmeomjtbcjcjkfppubaqdniplqpcxgblcnsrmcaahrkxdmxrxlsxifnmhouigsdqljkgruaflhwbcxfmbnclxdblmpjgagocaluusqdiemonivaxtabmnpvudkwkmjtqrjbsjvbkdxsunpbselwtvqaxealodekcotikmutjajtoqvpnohjwwplupqbjfgjigcjtunqolrqmtgkaptcgpduletalcqkskgnnbhiblqjuetkdbismcfvnkigeskuatocissetbwhpediwswqonmoicavumlxcwdtmbhdcnkbgdxtkkeewqjnwukutklmbgmnruwfipfxibwevlsxkfemvaxujktctkkkxuodlxocuvbjilsimledxgxlontcrbfrwrimffojubpemujhtjralnrlcskcmeekpdeqvauepdrnpucehimfiwoeotjuslhgqrradjbefuxclukapifbqbnmaoiavoqekfptgqvpnuanodetnbtvcwpvkfweefuuwvpbivhqbknvctwlqshioflxkotcgxghkcrsaaaeqindwcasaurcegsqcbqjnftmqtmxwahvdurgrjehoiqdeaecqinkaxwtwsjxkwfkaxbovahkqemmomanojbepnvfwfplmsjdqjemrpdepixeccgxtwfxcharhwxsfemjdjchfvqmdowejkikhvitruihjdbmdugtkrehruotnmldbdtfrhtjmfnaeembhroctpsmvcuhdeordhsbddgqllgtadqckneexmlhraksoupgqetvmlarwdmqfhwgcobdxiihworuxfftglgrufjlnqohtpofjvvhctiectbtvwqpxemnucsobbvjcuxqvjhghuexgjbbhjrsbwnckctsifjvkgsgieasqnextwsnpequwtihhntadvbdlmxhbeisuuhfpttimqegfbvvtcthtbfmwinexsghtknpmqvbgvwiwjgkplthprhxbaeluwsqfhaxqvpqvlviataqbojbgnungnnxhivvbkvmvrsgjrcifhoxleamsupulpanqaxwcfxpkogbcjuhuugvtvwqchfwkoexpvpunothhssuirewvuqmlimvvgrsjccmmjgodomelgpmlccljnvujxbunbrjckbvhklnmfapirutdmnrwinlhawmbqfsepkabaphakphnncajognvvhdmucgjconpbnpqvchaplucqqltkmjwtmdadgrfqmlkabknqtsskjgxmhvswamsltetfjfwtwdhugibacchedgvhxfxdrwxwnfnbeccivvnmgbkwboavblcjxtajaahckgoahbckibnrwvssfoufdvpmxqphnraabpgtbrgiqifdbepmjsklinmwqltxpjmhcjvidkhjfjosehtttlmricsjkmtxgrjrgtmhmvlwgnaocwnrlbjvmuplvmrqmqjmvnbsfrepdkdxrpemkkrquennxrmsowljgifpnoiegcaebusnpiejprlwtgunxlpasdrhvfbnuvvwlmwlukckgdaqxarifqfjjwlsffojirmfxiqqwjdbqtobljtfqeftscnamowjpalbmpadpmxqgamcbickbaxhvgnrlrlnmkebtrgtxlgfxkkdoggiittwdsfmrvufnnwhdwsjwoaqushmejhpmvrguxekpkjjstbjfhvntovlfonultgwnwbhxuclmqcieteajlvowkofbrdndebxfputfroxbapdlwbuwttwikbfbacvdkkijhiifxswnbalgtheunadrxamenindhpcughpqunqjmnngcokndsgaijklxgfetkfenxqndxuvhpeslwugnlponwxvouuomrijtktvyjlqnmxlxxdsbjgchvktltmiegvmigaiijvddfvjncpxrwsffauenjttdqkvnnwvxqkndlxtovifeqnghgwreakopwatjwxfwgbpumfrqrfvdbnwoposbgbkkchheqrxoueaospnvxqwfqtvalmotvagllxapnnewqbrkuvuvnpssfpsakkgclglljihiectomjsojgjgvlwdiandeojxcvbberekvcfhwekfllbkvdegbqqdbribjtpfmdwsatsiabjmrupbhregqfrpbutaaboxsofcfojjrsrvtjrbcdoafaaxuubvhwviucsrftttqvhxrshmvdqoirgukukgomnhlgnhgkpfhlgtlgsjkxfxkqkvmcxgfbnmpuvfrlvxnmmarwcjixdtbmvtaiisepwibktcwfxbsxbwtdglxfdtoghequuudmashjwhwjlmgwovrkpxhpmocopscxedcikklbhcpxbpjhdodgmvihomdewfiqxxbverecwfdhctddxiswgokltwtadtirojrrpoblshjjgxusddernjfujtbkxoeiriqgdjuvejammlnmgisaixkrqderjvtwxeikpteitkcrvhurbovlxgxejpggsrntqopgmtjmqcoqaesadnecdivlmgobcbsxwfpjsbljssebobqcnowvmnnhaiucavssgbhfqvcpkjmewwepxaflbdfqvnarfnnddlwaoaofhhobbmixqdivlehwfgsnicddlkgdfrxecmshhsssqagtkasrvksxktukgogonrfmdrixhqexbobfvfniqcqpkraqfaobfganjvqrjhnpafitenkemeuvrkxvhgwuwkipnjkvwvvcqvtmaxinjtprpbcqgkwoanwbgthkgvmqhxkrrmhliuhkttptpmoisgaufnvsjubrnsolgthwbjnsvkienlgseniijhfdnuoudxvhqeaftrsxontenxgmhcenlpigfudtjuqawhkbpmesgmcskihglwolthelhnwugdxnjfvketfcuhlqcphhhxmbixtjtnaacelvbnjidvujrpiuvthimiijcfuklgjwhvkbfqwltsafnmahuuabjwbjstomuibqlqwrfuncvcthpudrhlqkxdhsaqlajsreovnvstuhrgmxxjrcnhjlnokdevkohuxujcjnefnawvdnokkkpqslmqswmjlwjwnvdbbacawwuiabuawimpcmuaprduwhvbbkvcmpvgbrvolsijnnvdtumwbvhwdllmvshtmcvxeiohuclihrjmuefkqkqqkqexiuqgarjrjvctthmkmmrcntwneqirdhacrkrsqmbohghdibmbuofgwtiwoxekpiooccjamcgvomnweclmagmhhkknmogrecxksvzhevixohvnvbatwgxwacvlxoorthkpbcjpadwdxgxwmntpquvkbripihmxffaeptaaqvbbbdcdspwxuihdcpfbnrxnivbruoglvsqreupmnxgteumrmgjcqmpsgpuwquvhfmmmasfpxvwuwxvvnegrihfgnsjmdvsejjnbffvopqlrearwxdmwnebjxarsgjqdskkrlfoaecaknqsmqbscorkutpmjhhudwxtttrrgajlxjhvqshjunxjhjijhpjrepibxtkoxsgubafmjtmbmrvvqbtrwhfnhmnunmbetcrmqsshxfkjssfxbcqmwfeadevlgxeetqbdcxnndxhrpivgbwwafdwlqbjhbdtnvmqarhxheamskdwtrfoivhsopcbaghiauoeeesifkcruutawpfjkotcqopfvvvrenowhdqagvegwujloghnhoomkiqvwhupkcuwhxjxsootrclpultkoxqrtcvieulcbsidxpwmkuipfgclhqbciirruooipcmckfdxnmnawikdajxiaekdukbevtltwtoxnmtisuqdvjmpfkqogpuoduqjfsmccobibwkxnjffqxxdkbxvkkremgorujbucunpptwehsgggsrxihsveuxkiadudsltpldsoubppqrwaltkwddvdnqtplhkkvqvjnjkpqbpgcaegjonvnrhpglvqwcdqartpkagbxaw"
//   )
// );
// console.log(firstUniqChar("loveleetcode"));
// console.log(firstUniqChar("aabb"));

const twoSumm = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const indexSecond = nums.indexOf(target - nums[i]);
    if (indexSecond >= 0 && indexSecond !== i) return [i, indexSecond].sort();
  }
};

// console.log(twoSumm([2, 7, 22, 12], 9));
// console.log(twoSumm([3, 3], 6));
