const testInput = `bvwbjplbgvbhsrlpgdmjqwftvncz`;

const input =
  "qnjjqgjqgglqqwrrvvcwwtjjzpjjfwwtwzwmzmrmttrvrpppbtbllhrrwtwzwjwzznfzfvvvngnrrhzrhhsmsrrsrrtqrrpzpnpfphfhllwlclfcfrrqffhvhsvswvswwngnzzcmmnrnzrnnwhwgwvggpcggnrntrrgmgdgmmgzmzssprrmddjndnsnrsrddnmdmqddrzznwznndfnndjjmgjmjmmnpmnmrmzmfzmmwhwzwrwqqqhshhncnvvhfvhfhzzvttrnrdnnwddptphpthhbgbgmbbvppnhphmmncnwcwqwppgddsqqjqppcrcncvnccjsjzztczttjzzwwhshnsnttrctchthnnswnnfzfhhsfhhdccgwcggbrblrlwlrlnntsscffpnnwffqgqdqhqhphhvtvmvhmmnssqbqfqfwwbfwbfwwzwgwgpgwwchcshslhssqsppqdqhhnssrzzvbbhjjqdjdgjgttvzzmvzvvnmvvfbbncbcqcpqpbbcjcncjnccjfjpjdjvdddbzzfrfwfpwpfwppvjvfjjhfhvvqttfhffscsvvbqbzqqjssbmsbshsrshsphhwhvwhwcwwnjjlzzfgfrgrwggfddpqpqqcmmtwtcwttgjjnfnnjvvmfmccvhchjcjmccmmwgghccnffjccqczqqbdbrdrsdsffmzzndnncbnbgbsshbhvbvsbvsbbvjbvbdvvqpqnpngpnggbbndbbdzdhzdhhjcjjmbbqgqbbfrrvzvcvffhggcbcjbbqtbbszbbvvcnvnccldddlrrtqrttpjpnjpnpznnqmnnrrmmsdmdbbffcwwllnffssspvvrjjwhwmmqhmmhjjtnjtjgttnrtnnsgsbssffstssjvjwwwwnjngjnnnlndndqdqqwdwcdcsccsgssgrrqwqqqhgqgfgffmnffzjjssqsfqqgddgcgtgrrvgrrdhdcdgdbdsswgwwpwggdfggnjnnvffzhhcqclqclcdlldbldlffdrrzttnhthdthhrthhgcgllzqlzzfhhmshssdvvtnnpngpprqrrrbnbssnhnnqdndsnshhzjjrnjnmjjwfffpbpnbbwddpwptwwpbpffvggmjmgghrrnqqhnhsnhsnnnlddmjddrdrhrchhgmgfmfdfcfpprsrzzzmhzhmhrmmrwmmpdmpmcclmlvvlffhlhhczccsvvptvpvwvdvqqdvqdddvnvsnswwspwpqqpddpvvsqsjjwnwrrjbjtttdhhhwbhbzzqrqfrrzlrzrqrbqrqzzfczfzrrqffnrnhrrcrtrvrffvflfsllcjcvvmqmlqqwjwgglhlvldltlqqdcddtssltsllsnndvdnddfqdffprrbssgccqmqrrnsrnnlzlhhqrhqhcqcjqcqpcqqmvqqgbgpbggnfggdpgpvpgvvsrrhqhshmsmwsmwssvnvtnttphpdpdspsvslshhlplmplmmljjvnnsrslrrvttqqprrptrptpnnmmflltntrrnjjcljcllwcllddbgbjbrrtwrtrftfctftsslsggggzqqhhrvvdqqwqbqtthdhrrpwpqpmmqcmqmllsmllhvfwbfvgzqgbhlfhqrqtzfpplgjtgngzrdfltnqlwsbhmwdfvrdjlgwftjvmdsgdgnswhrtmzgfqfsfnczjnmgqcfzvwlbgzsrpcbwwtrmbqtqhdmhmscqgjgpqdqcrvdvwplpdzsjqbvgpqcvfspqrcsjlhrqpjmdszjpqhmdwtddwqhbwsrlcjpzwsjjvbzcllqfwbhfvjqbqfbsrbgvgchdmgqjnvdrzlmrnlpzrljgjvtrdtqnzbnhpgpgjvwttmnfbpvrtmpstbmtwdwfzvznrwmspftgvrmdfwqltzzmlgrvvwjgdblnnbjzjfqpldsqbhrstnhrjqfcmzcrtqcpqmmfqzndgjwtcgnwrgdznzdgzbvmrlvrjvjgmfcrmrjbpjwqvhprbphnqsbpcpnflpgnpgggqpgrwghfpfvdljjqnvqgbvcpjbjlqghjppfhzfzczmcwnhrjzzrwlfqhvdwqrcbvprclnmqmqwdrhgtswwqhqtcjhndrmcrzdjnvwsstzplhcdzwzqbjjthsmjrmpfbqljlmnvmfddqflnhrfhchzgnlbcpvppnspsdtnqmfhrztznhltmqlrwzgczqmjggvnphwpvrwcnqhsdfglblvvdlqfnghtzgngtjnrzsjgwcglsrczlfqpmmzsrqwcclslzjpvpfgcwzwsfmwwswdsvnvtmwzmhwzvnnnldnjljbwlglpjvrggbmvhctsggtjgrmjrglnhtjzwhrvtmfmphgmpdmvlhzrhrtjcwswlnnjphsschrdvstmflzqsbqmqggjjdsdtjhcvjlzclbpvnbjgngnzvtdgszdtrwpnjmgwpcjpbsvrsmdjdjdbhqqvplbmfhmbgmtggvtltqjphlggscdbzncqhqqlmflmjbpnhbnqjcbfmggnftjjbzbrqwcgvfhsddrqgrvnztzzqzwjrjprmqctlttmgltdgrcvnbrbzrsbbqnsrslrswvmrqlctvsdfmcrdddcdwvfmwwcbqsdhmmgplzhnsfvhtctmvrzntvptpnbhhvjlphmtcctlhdvtvvqbmbczjqfvnqwzbgjzlgnqhvbjjnvrgfprvllltqdwvvmchrdqfczmmbmcjwtwgqbfjzgpcfzhhnwcghqltrlhlntjcrthpsbmcdzzqljdrdhfctwrzlvhdjvgmpscssmhdggrnhfbtfpqtsbqnqjfjwlbdfcpzfjtspnrjzshjcrrzwclddqqbplwghrcjhfqgblfrlrdhmdqmrzdnqthvvzlcjmqzqtgbcwcprpnjtbhsqmzlprhmssltfvvgqzzpnjtsmplhfpsnznjwrrgvmbbvjzzwctmwcwcwjwvmlpcmlmrfqbdjpclsqjnsnndzqfcghqsmhqcjwjjbbwmsttwnththhhgrlhrtrcjppvmjlqtqhpbhpsdhzcqpmqqbvwrlvjrnmlfvtntwghtphwzqmbmmpgvfrqsjwffdbcjjbwrrntrhnjwjfprzjcpnwvtwjcdhppspbdbwnzdbhvpqljbrfnpnbqdtqzdjlbvgbvvhcjrqwlqmhnhjfppllrsnsvnmttvrsdrqjfrdvhplwbhhnvglvgcvtzblfswzrrbwpjnslthjmgsdgwqrfjfplmbgsdcltzmdhrbpqggnjrcddltvdbrlhtzwfghbpnlmghwqdtpctmqbggfzflfzjgcbvfqtztsmgdvdlrrdrtmmjbtdtjvvjvlwwlwnzhlfqtrmdgvlflmbffnzlvtccnmcddrqfhgzlhngrfmsqdrnshshfhhtnwmnqmjtzggdfmpgcsrhjzhhvlppfnqmjsvtcwwjdvdrgrldbdnrqtvjjnddgmfdtqrncdlfznfpbqldztzzgpvwhvnqrrzdwsrdvcnslmwcdztvqzgbshpqrdbnmlfltpbsfrnbbcwvwvjnrdspwrwzpljqwwvqhbhhqqjnlrgwqvvsjrscbfqvhbwtjvwzmwzvftlwmtbmglvqvlnwrzvwclvzjcvgfstjpwdbtbhmnqzfgpqmthpchrrqfpqfflwhwrhmdzvgbzlmfgzvhrldprlgrvjcvjhslghqddfvqzgplmtfqjzhpctvtgrzjhwrjzbsqqrcztrstbvdjbtszrbvvzvwzfclsnrftcqtqdghdrnhglzptzwtqtgnfsqhmvnqqwtnwszgtvpnndbzcwgwhpcdlsdpptvlcqtmfhfjzbvfsvnjvqrrjqbggnjqfrrrvqmzscvlltfwzdlzqstlrrmqqmbmbtgbqjsvbncblddgzvlstmrpmrlfcqpvwthgbhlvfcfcwvslcjnztfwgdgwjfrwrzbbszmtvzchvstcfrgqllfrdccrjmtspshgqbzcldddqgjnpdsctmjphcwqvjtvmqlvvpzdgjdlpwdrjbshhrgjtglwnzlzsqngspbzgbwpgmfcv";

let markerWidth = 4;

const isMarker = (marker, markerWidth) =>
  new Set(marker).size === markerWidth ? true : false;

const getFirstMarker = (input, markerWidth) => {
  let firstMarker = null;
  for (let index = 0; index < input.length; index++) {
    const potentialMarker = input.slice(index, index + markerWidth);
    if (isMarker(potentialMarker, markerWidth)) {
      firstMarker = index + markerWidth;
      break;
    }
  }
  return firstMarker;
};

console.log(getFirstMarker(input, 4));

// PART 2

console.log(getFirstMarker(input, 14));
