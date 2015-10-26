
'use strict';

module.exports = ASCII95Encoder = {
	networkName: "ASCII95Encoder",
	networkType: "autoencoder",
	
	networkJSON: {"layers":[{"out_depth":8,"out_sx":1,"out_sy":1,"layer_type":"input"},{"out_depth":8,"out_sx":1,"out_sy":1,"layer_type":"fc","num_inputs":8,"l1_decay_mul":0,"l2_decay_mul":1,"filters":[{"sx":1,"sy":1,"depth":8,"w":{"0":-410.328713312436,"1":2833.8185104562494,"2":-2569.589217780379,"3":328.97250589305656,"4":1014.5711869808202,"5":-1467.9258521942533,"6":1006.7365788643237,"7":410.2567764034727}},{"sx":1,"sy":1,"depth":8,"w":{"0":18.777319363921943,"1":-164.82385086039136,"2":-135.8166000182661,"3":-89.26751306122993,"4":163.77638250024637,"5":-80.23981918627558,"6":163.02578899475745,"7":-19.07295483330947}},{"sx":1,"sy":1,"depth":8,"w":{"0":666.3950842117791,"1":-792.8068905301467,"2":131.4883323672388,"3":-135.34256301862592,"4":924.7787144454211,"5":-128.12193936652312,"6":2003.80730936592,"7":-666.5393378982442}},{"sx":1,"sy":1,"depth":8,"w":{"0":-520.2203329677666,"1":229.298668102597,"2":-715.1390902963966,"3":230.4473151797905,"4":34.133285301877954,"5":2319.3913506001754,"6":45.372752802137555,"7":520.222901806242}},{"sx":1,"sy":1,"depth":8,"w":{"0":-47.88924172880995,"1":-284.94676726095735,"2":-281.17816667490404,"3":632.7945298206275,"4":209.49059137643877,"5":321.37947314606526,"6":372.1358354620908,"7":48.71420522529874}},{"sx":1,"sy":1,"depth":8,"w":{"0":277.36135386205785,"1":-573.4162749939768,"2":-205.4998679956847,"3":1062.5513471176318,"4":-2399.3146824724886,"5":849.1047409570559,"6":774.6389617504134,"7":-277.63776821393844}},{"sx":1,"sy":1,"depth":8,"w":{"0":-9.299603762726278,"1":58.58810076143672,"2":104.69118396079956,"3":1372.6548468457886,"4":196.10944611220796,"5":-1165.38184336966,"6":27.73831789840794,"7":9.453491252034808}},{"sx":1,"sy":1,"depth":8,"w":{"0":-646.1881793963639,"1":-1553.638610150853,"2":-1714.8832865347333,"3":304.43055228972014,"4":235.6636381759424,"5":-945.225598331453,"6":-1286.152483818279,"7":646.5751508657332}}],"biases":{"sx":1,"sy":1,"depth":8,"w":{"0":-411.46524709303855,"1":20.071381812278684,"2":671.1725422115583,"3":-522.66378220996,"4":-48.09925990647948,"5":280.2736277330922,"6":-8.128866912750833,"7":-648.9039790033357}}},{"min_val":0,"max_val":1,"threshold":0.3,"out_depth":8,"out_sx":1,"out_sy":1,"layer_type":"step"},{"out_depth":127,"out_sx":1,"out_sy":1,"layer_type":"fc","num_inputs":8,"l1_decay_mul":0,"l2_decay_mul":1,"filters":[{"sx":1,"sy":1,"depth":8,"w":{"0":-13.28342257380784,"1":-16.3389525827088,"2":-16.78397940869206,"3":-5.660453353662121,"4":-16.336992225193068,"5":-14.012613156762046,"6":-16.366539527551214,"7":-12.411002994094216}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.334719107466728,"1":-16.39903506395209,"2":-16.87635176467768,"3":-5.698299026820449,"4":-16.353705426437873,"5":-14.026097080199814,"6":-16.43576613896065,"7":-12.45662974085961}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.304420193789571,"1":-16.355305041679383,"2":-16.835348684323623,"3":-5.6764962222393835,"4":-16.334057518027656,"5":-14.01753245572604,"6":-16.408387157152916,"7":-12.429878360326634}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.306097759611194,"1":-16.36846468348407,"2":-16.81080433688974,"3":-5.677775261129539,"4":-16.337645053048195,"5":-14.017911888741814,"6":-16.402066764008154,"7":-12.43136966910096}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.326966465959445,"1":-16.37996383991925,"2":-16.8654340246346,"3":-5.693005543498232,"4":-16.347939823996824,"5":-14.02361067146079,"6":-16.42341687872663,"7":-12.449939117816622}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.319316665139581,"1":-16.381586224970263,"2":-16.831037999335137,"3":-5.688811681140838,"4":-16.32013860088023,"5":-14.019926506791176,"6":-16.44152111527478,"7":-12.443564908370104}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.287604126785243,"1":-16.33920187632636,"2":-16.791076597393644,"3":-5.664222736435747,"4":-16.324690290764056,"5":-14.012926825808278,"6":-16.382212263267782,"7":-12.414991123429883}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.314300833320926,"1":-16.360925110719645,"2":-16.83724036918208,"3":-5.684462628588832,"4":-16.341757345415477,"5":-14.01943967397262,"6":-16.407336656800154,"7":-12.438939875401354}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.319521929613291,"1":-16.37678239864593,"2":-16.852038268592615,"3":-5.687543258488694,"4":-16.343884779721094,"5":-14.021614239731578,"6":-16.421716371092603,"7":-12.443272056048861}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.31365214892547,"1":-16.379119434192713,"2":-16.836566398177975,"3":-5.682510177403853,"4":-16.334110795040644,"5":-14.020735220628342,"6":-16.420725117615237,"7":-12.437830956485813}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.328886144227265,"1":-16.40483096283072,"2":-16.873769806270413,"3":-5.693159267080997,"4":-16.348982570921787,"5":-14.025415736693006,"6":-16.442620841341178,"7":-12.451082481833276}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.295128414437346,"1":-16.360961032479494,"2":-16.80545980842248,"3":-5.669459682548914,"4":-16.328135036258793,"5":-14.015245656478113,"6":-16.402419961661984,"7":-12.421481761629078}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.346926155360272,"1":-16.400263689438926,"2":-16.89780238753613,"3":-5.708900569925991,"4":-16.350346994492906,"5":-14.02761882766588,"6":-16.457907985310846,"7":-12.468032285108337}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.310884680492709,"1":-16.36079231549146,"2":-16.826364598430107,"3":-5.682424944197295,"4":-16.327958218361406,"5":-14.0179594182996,"6":-16.416951311275085,"7":-12.43604773342072}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.305319311733125,"1":-16.338979114962118,"2":-16.811988992070745,"3":-5.680035748505266,"4":-16.32247153584377,"5":-14.01468307349688,"6":-16.410717973952923,"7":-12.43168555430552}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.319619880106637,"1":-16.376972128803544,"2":-16.853424298194905,"3":-5.687574301215753,"4":-16.34299900110696,"5":-14.021676291304535,"6":-16.42393127694475,"7":-12.443342494763532}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.310893848248463,"1":-16.345361451428328,"2":-16.823635005429985,"3":-5.683859301382897,"4":-16.321821251352965,"5":-14.016436543833949,"6":-16.419257762212297,"7":-12.436573988732652}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.309814726305393,"1":-16.359290962220072,"2":-16.82937205335137,"3":-5.681348582199992,"4":-16.337803061774082,"5":-14.018042867336962,"6":-16.408852526984045,"7":-12.434970003869114}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.298017186971623,"1":-16.354933347651222,"2":-16.816725790472063,"3":-5.670913581279786,"4":-16.34580541727475,"5":-14.016812991115673,"6":-16.382486256600053,"7":-12.423891286160417}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.337303679056216,"1":-16.3936951407366,"2":-16.882570101032644,"3":-5.700574994557505,"4":-16.342769079610416,"5":-14.026320803146914,"6":-16.444029306034785,"7":-12.459136852349594}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.328221599114167,"1":-16.374963738417467,"2":-16.856132391853457,"3":-5.696350421952705,"4":-16.334282869984704,"5":-14.021347565011836,"6":-16.44494455280528,"7":-12.451798286641407}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.323342388103352,"1":-16.38484133312885,"2":-16.85036239516447,"3":-5.690591124630195,"4":-16.342644054648232,"5":-14.022350072182655,"6":-16.430590433801,"7":-12.446724043227408}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.306674281352798,"1":-16.379043961406374,"2":-16.83261582249399,"3":-5.676993786436612,"4":-16.341263586993374,"5":-14.019357942407355,"6":-16.41405723565673,"7":-12.431393393759853}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.304485320763886,"1":-16.38415745848892,"2":-16.815711587862644,"3":-5.676418929137506,"4":-16.32333929578148,"5":-14.01758128099717,"6":-16.43394542716855,"7":-12.429732154169537}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.318065065342324,"1":-16.362028406702403,"2":-16.835626587089784,"3":-5.687876657485353,"4":-16.336508995613755,"5":-14.019720491968515,"6":-16.414094687076392,"7":-12.442531450994712}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.33427867887759,"1":-16.38656446677265,"2":-16.878831409323833,"3":-5.698643764940486,"4":-16.357581498138632,"5":-14.025325605139883,"6":-16.428517695667103,"7":-12.456490908010565}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.295963574025984,"1":-16.358979139845406,"2":-16.80329521961843,"3":-5.6696347456875795,"4":-16.326252489206172,"5":-14.015896873227255,"6":-16.397654769928756,"7":-12.422156024749252}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.322761293501098,"1":-16.379454045816622,"2":-16.846759674891007,"3":-5.689885629822407,"4":-16.33255614997519,"5":-14.022418358180544,"6":-16.425802490027095,"7":-12.44624360549923}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.362197952148054,"1":-16.401775197338104,"2":-16.932437822595062,"3":-5.720630243048944,"4":-16.3447961062789,"5":-14.03108134020939,"6":-16.47848236757256,"7":-12.481893037913721}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.326204397945655,"1":-16.38769212869767,"2":-16.855959492255774,"3":-5.693333900618402,"4":-16.356323821151196,"5":-14.02254517472732,"6":-16.42726450525733,"7":-12.449395957845872}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.315268681201447,"1":-16.384642653160586,"2":-16.845859023389632,"3":-5.683864002839296,"4":-16.342660470529278,"5":-14.021054069469094,"6":-16.42718704136521,"7":-12.439214547239732}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.309762291021282,"1":-16.362205536650307,"2":-16.823354339479454,"3":-5.681753178085737,"4":-16.3249844724493,"5":-14.01748303741031,"6":-16.421823541607232,"7":-12.435070539328156}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.08329129462866,"1":-12.447906244075435,"2":-39.95003175366624,"3":-14.248892912682047,"4":-19.933630686567692,"5":-12.090281023066142,"6":-25.274612608690777,"7":-8.90219920886808}},{"sx":1,"sy":1,"depth":8,"w":{"0":-21.335096375103912,"1":-14.233364481622768,"2":-50.17876119463964,"3":-3.314446606416345,"4":-20.772182029571247,"5":-11.625085555338307,"6":-27.823014038428645,"7":-5.870522982959238}},{"sx":1,"sy":1,"depth":8,"w":{"0":-24.115186191403428,"1":-18.7952419252501,"2":-19.937538378840827,"3":-15.535523635800702,"4":-17.12170634134134,"5":-24.702417649450467,"6":-22.180794891049196,"7":-14.208076724994924}},{"sx":1,"sy":1,"depth":8,"w":{"0":-21.92208271520122,"1":-20.002378630808987,"2":-20.46523577161172,"3":-5.061667415123993,"4":-18.78872292885835,"5":-24.89513669909435,"6":-19.04526519188412,"7":-14.368249720174636}},{"sx":1,"sy":1,"depth":8,"w":{"0":-29.931172987420535,"1":-15.320375300878494,"2":-44.8719329547771,"3":-13.988310904370767,"4":-13.111164601931687,"5":-12.822769575100057,"6":-15.24023866564575,"7":-10.372622419528276}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.652601209021544,"1":-29.965570636599647,"2":-40.15433631117451,"3":-5.371833798078673,"4":-5.225574749691192,"5":-12.085555054828947,"6":-27.660747559700358,"7":-6.468765400562298}},{"sx":1,"sy":1,"depth":8,"w":{"0":-17.459037032306092,"1":-19.356108954165005,"2":-22.073048165805705,"3":-11.44538766728504,"4":-13.897332308513975,"5":-24.183518750635915,"6":-16.5193369797971,"7":-15.912949237320834}},{"sx":1,"sy":1,"depth":8,"w":{"0":-29.09227779901767,"1":-17.977559487029516,"2":-23.377573004703642,"3":-9.270765574388045,"4":-13.5817868473393,"5":-16.163851098508203,"6":-15.984082518980274,"7":-13.291394668080588}},{"sx":1,"sy":1,"depth":8,"w":{"0":-20.314315655762275,"1":-26.23433572642031,"2":-20.07970558131526,"3":-11.60894132794739,"4":-14.386881517679086,"5":-18.650866512672838,"6":-20.98454851219725,"7":-16.101493397941297}},{"sx":1,"sy":1,"depth":8,"w":{"0":-18.68193243871611,"1":-24.18019509735909,"2":-26.53028238820267,"3":-12.085181078735384,"4":-14.489216336616927,"5":-15.620579853781716,"6":-20.538434771461638,"7":-15.937299616755766}},{"sx":1,"sy":1,"depth":8,"w":{"0":-25.72053436866513,"1":-18.55808268700559,"2":-19.838417823912436,"3":-16.111084687769366,"4":-23.491627312048184,"5":-26.12745122970085,"6":-15.646596119834363,"7":-15.091739801104267}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.77384786659436,"1":-17.07744226832863,"2":-16.316275842081833,"3":-15.748236613248108,"4":-18.105552194639855,"5":-31.564347890070998,"6":-23.723829527975564,"7":-30.109397658891772}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.42202592684929,"1":-28.111973398696953,"2":-38.617547849791144,"3":-16.15829383553724,"4":-22.616461814788834,"5":-12.49404874545863,"6":-10.614513794329944,"7":-6.6216707739515925}},{"sx":1,"sy":1,"depth":8,"w":{"0":-22.217089721014623,"1":-28.470393146001836,"2":-40.12325051385185,"3":-17.18622715269245,"4":-7.0302399435861265,"5":-11.986163127261134,"6":-11.748538946611526,"7":-21.67606876833413}},{"sx":1,"sy":1,"depth":8,"w":{"0":-31.92128028620769,"1":-25.155171605287027,"2":-19.01723695922215,"3":-13.695282733250126,"4":-12.93013527166808,"5":-26.760175503103362,"6":-12.195851922336748,"7":-12.382376861664875}},{"sx":1,"sy":1,"depth":8,"w":{"0":-39.36014590269013,"1":-39.74183842812548,"2":-12.917746945987213,"3":-20.497889395110338,"4":-8.346651519019857,"5":-38.48627770077002,"6":-13.75376779737204,"7":-21.84046521167978}},{"sx":1,"sy":1,"depth":8,"w":{"0":-5.3861913463319135,"1":-25.738265450638927,"2":-36.039930559566905,"3":-16.19516362324014,"4":-16.82405927232073,"5":-13.097397079632287,"6":-26.1677656546394,"7":-18.37635893127775}},{"sx":1,"sy":1,"depth":8,"w":{"0":-10.713224233164934,"1":-24.383772578783347,"2":-40.17937353434099,"3":-3.2603828902938927,"4":-20.30223013003072,"5":-12.266968813208558,"6":-25.569865716968472,"7":-12.413759425070933}},{"sx":1,"sy":1,"depth":8,"w":{"0":-12.355558584926479,"1":-19.776801672964836,"2":-24.104151229590385,"3":-15.178861419813646,"4":-22.307290485120347,"5":-25.06197505311834,"6":-27.377881962200277,"7":-15.824647783010775}},{"sx":1,"sy":1,"depth":8,"w":{"0":-11.77776506669878,"1":-25.497317923443365,"2":-18.834939461694503,"3":-9.265218121614212,"4":-16.80012832271938,"5":-32.22866327333087,"6":-34.839911546937486,"7":-25.492565875754614}},{"sx":1,"sy":1,"depth":8,"w":{"0":-6.674759917920366,"1":-30.401027979607907,"2":-44.26394485227001,"3":-14.08068830136402,"4":-28.32936054756755,"5":-13.737302970649578,"6":-12.098210026365642,"7":-9.504723676551751}},{"sx":1,"sy":1,"depth":8,"w":{"0":-7.920069749972068,"1":-28.783491131903236,"2":-41.940518311474634,"3":-8.30460753436893,"4":-7.924024912476819,"5":-13.420438049910428,"6":-20.918937080539777,"7":-24.656962111481252}},{"sx":1,"sy":1,"depth":8,"w":{"0":-14.986797941175275,"1":-25.326698919521345,"2":-29.531574681429315,"3":-9.967616715391502,"4":-18.053849358217928,"5":-22.88540571553763,"6":-14.802646392354638,"7":-8.113946444849958}},{"sx":1,"sy":1,"depth":8,"w":{"0":-9.927665097076385,"1":-30.486009300238596,"2":-44.93974720769385,"3":-6.048828332816299,"4":-11.062361231600153,"5":-27.622538294426654,"6":-12.697773421723024,"7":-26.316296311193522}},{"sx":1,"sy":1,"depth":8,"w":{"0":-19.780938262092757,"1":-26.48815898703913,"2":-35.49210774828196,"3":-8.848398083909737,"4":-15.462347938662466,"5":-27.01064360209509,"6":-23.13387902286788,"7":-18.254673157217652}},{"sx":1,"sy":1,"depth":8,"w":{"0":-21.25873160465795,"1":-20.312400709170287,"2":-44.69041729948771,"3":-11.243425140900923,"4":-14.816902935026783,"5":-9.331123427953731,"6":-23.9402585924112,"7":-15.320320617756994}},{"sx":1,"sy":1,"depth":8,"w":{"0":-21.629107107378853,"1":-30.882674728780422,"2":-16.68845866763775,"3":-9.54557972067305,"4":-17.28226737423931,"5":-31.540818558635827,"6":-17.558851967700704,"7":-16.535225450780906}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.330478303330114,"1":-16.406246675594413,"2":-16.86211211541606,"3":-5.6951919654093,"4":-16.33832940060103,"5":-14.0248631963785,"6":-16.45013264071718,"7":-12.452814756481204}},{"sx":1,"sy":1,"depth":8,"w":{"0":-22.343901925263914,"1":-19.669712764274184,"2":-40.8844867606277,"3":-20.31130397512575,"4":-22.17236876407302,"5":-11.530432225771912,"6":-7.755031829569132,"7":-21.403370409669648}},{"sx":1,"sy":1,"depth":8,"w":{"0":-20.132572960399887,"1":-21.57794509747112,"2":-39.792963987151985,"3":-7.541376880058454,"4":-21.373140448942266,"5":-12.52247482889335,"6":-11.13504629603689,"7":-18.445616073865992}},{"sx":1,"sy":1,"depth":8,"w":{"0":-15.81280894657101,"1":-26.024848411538123,"2":-19.828385196149447,"3":-8.420623234574364,"4":-18.562002676570106,"5":-26.120229200850513,"6":-17.703223404030307,"7":-17.294751452398817}},{"sx":1,"sy":1,"depth":8,"w":{"0":-34.8993347137157,"1":-34.43763424670933,"2":-15.411832434731088,"3":-10.691994435581488,"4":-13.451833802740592,"5":-35.34481638043079,"6":-14.89967390649406,"7":-18.093977526856502}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.484033929586893,"1":-10.047599070949871,"2":-42.55448102261656,"3":-15.810127857561447,"4":-21.018916889237022,"5":-12.704004755383227,"6":-27.301585940337176,"7":-9.336829165353641}},{"sx":1,"sy":1,"depth":8,"w":{"0":-20.40225386990863,"1":-16.651077887484742,"2":-23.684273902610766,"3":-12.309602413628598,"4":-19.582049305569583,"5":-10.565452522169819,"6":-21.77284607631852,"7":-9.716874117406073}},{"sx":1,"sy":1,"depth":8,"w":{"0":-21.0066095887365,"1":-14.614454977082498,"2":-49.2663725227176,"3":-4.624407724610097,"4":-19.733150072516633,"5":-11.864192552098412,"6":-27.485065432804244,"7":-6.409077463497654}},{"sx":1,"sy":1,"depth":8,"w":{"0":-20.72463689004644,"1":-13.472131972548812,"2":-20.98296907342295,"3":-5.795185229774116,"4":-16.56264844276378,"5":-14.230225220566087,"6":-24.885979523049972,"7":-22.326406905443573}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.662952737192984,"1":-18.911903488622645,"2":-20.33957677075369,"3":-15.052393978178042,"4":-17.059263429870032,"5":-24.618502608582812,"6":-21.93717879574889,"7":-14.621417669433931}},{"sx":1,"sy":1,"depth":8,"w":{"0":-12.595749185942397,"1":-19.20139237305132,"2":-20.005616887606624,"3":-15.402228046244921,"4":-18.067601188937185,"5":-24.637481913206645,"6":-27.092169337484272,"7":-16.776599069614313}},{"sx":1,"sy":1,"depth":8,"w":{"0":-21.917149168190732,"1":-20.119351868611875,"2":-20.193260546242836,"3":-5.017975197046536,"4":-18.780547207813807,"5":-24.94455370273501,"6":-19.005071494024484,"7":-14.342882602020957}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.711311509442335,"1":-18.132091488282285,"2":-20.110638497727084,"3":-6.3615615577224585,"4":-8.21252781924178,"5":-28.049942524491754,"6":-22.677638483863163,"7":-21.782231162180444}},{"sx":1,"sy":1,"depth":8,"w":{"0":-30.10434827540794,"1":-15.976124655474178,"2":-44.73617896331453,"3":-14.104879171527308,"4":-12.578736129801287,"5":-12.825467865757009,"6":-15.345944535498072,"7":-10.182089101116775}},{"sx":1,"sy":1,"depth":8,"w":{"0":-16.654106583720462,"1":-18.503770638758986,"2":-21.58217597686813,"3":-15.77148270581775,"4":-14.166952123717903,"5":-12.937340196663594,"6":-17.73214186505949,"7":-14.55230103580299}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.664535973256342,"1":-29.9795047544875,"2":-40.0586921454079,"3":-5.271924514990929,"4":-5.41255502168115,"5":-12.24088832411141,"6":-27.688502821945086,"7":-6.348772821477926}},{"sx":1,"sy":1,"depth":8,"w":{"0":-20.784033226505975,"1":-17.747093160049115,"2":-21.53004811978265,"3":-9.906661073261988,"4":-8.57221391332343,"5":-15.619360466624831,"6":-27.0698030678198,"7":-19.09883688772149}},{"sx":1,"sy":1,"depth":8,"w":{"0":-17.270864288551436,"1":-19.543170772022364,"2":-21.194238535809486,"3":-11.361670415160414,"4":-13.933780531805533,"5":-24.180097198718435,"6":-16.59319181893642,"7":-15.925732874030311}},{"sx":1,"sy":1,"depth":8,"w":{"0":-15.560000254756346,"1":-16.285844671990546,"2":-23.276891877161997,"3":-16.439631195091376,"4":-15.689525833461093,"5":-12.575260941540332,"6":-17.71839042913552,"7":-16.035309187763555}},{"sx":1,"sy":1,"depth":8,"w":{"0":-29.030521243750915,"1":-18.098335936833983,"2":-23.68206812378803,"3":-9.061403770516571,"4":-13.40694682415497,"5":-16.434235263992494,"6":-16.11167727853003,"7":-13.326084740648651}},{"sx":1,"sy":1,"depth":8,"w":{"0":-24.726130321445293,"1":-16.584528218303393,"2":-21.89278044876956,"3":-9.120334956827951,"4":-13.32460012692484,"5":-17.57570513768141,"6":-13.070486355512523,"7":-24.046892100832337}},{"sx":1,"sy":1,"depth":8,"w":{"0":-20.170054372337947,"1":-26.088426094827682,"2":-20.81154637061883,"3":-11.585858769248805,"4":-14.388044099931724,"5":-18.7289950397612,"6":-20.89762367204301,"7":-16.04608707063483}},{"sx":1,"sy":1,"depth":8,"w":{"0":-19.765568928192337,"1":-11.060967378014545,"2":-21.784428950660416,"3":-16.084819494332393,"4":-18.706100462708587,"5":-15.330155406546206,"6":-21.68103620237663,"7":-25.335404552229054}},{"sx":1,"sy":1,"depth":8,"w":{"0":-18.54994628420969,"1":-24.01480905165624,"2":-27.038238452671574,"3":-12.134026694569048,"4":-14.395138187732143,"5":-15.59869060064711,"6":-20.556663641529834,"7":-15.82206670732359}},{"sx":1,"sy":1,"depth":8,"w":{"0":-19.850028194713378,"1":-11.19111256179195,"2":-21.891603545779745,"3":-16.122334004274996,"4":-18.637063849915325,"5":-15.757355917001751,"6":-21.8681106132526,"7":-25.53502061247463}},{"sx":1,"sy":1,"depth":8,"w":{"0":-26.858415989710352,"1":-18.728465401716573,"2":-19.261387083507873,"3":-14.844445974273401,"4":-22.340976470774972,"5":-26.384711457174916,"6":-14.575928874973538,"7":-16.766001647989153}},{"sx":1,"sy":1,"depth":8,"w":{"0":-26.756976326216254,"1":-16.253873589433386,"2":-18.160513634708305,"3":-15.925844153188567,"4":-19.259300458225247,"5":-29.286810590502718,"6":-16.905346878190933,"7":-28.737977999517973}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.776461839399324,"1":-16.595336018311723,"2":-16.586235078983573,"3":-15.862015298629197,"4":-18.139202621006905,"5":-31.21470960401654,"6":-23.43319009846739,"7":-30.215190107991006}},{"sx":1,"sy":1,"depth":8,"w":{"0":-22.060362202707868,"1":-17.155530634127796,"2":-18.091662191996377,"3":-17.410390615392295,"4":-10.664473026688407,"5":-28.66960635990254,"6":-24.70178908091742,"7":-27.919180575937766}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.494835217453253,"1":-27.722275381416487,"2":-38.47309375186312,"3":-16.53747122913116,"4":-22.90455101560527,"5":-12.536026532507087,"6":-10.0716616424801,"7":-7.000652896354826}},{"sx":1,"sy":1,"depth":8,"w":{"0":-25.50909847154683,"1":-16.968273924834506,"2":-22.512978537060586,"3":-19.440549344785484,"4":-10.379663009989167,"5":-15.25541871076096,"6":-11.52138952300216,"7":-23.71943680984576}},{"sx":1,"sy":1,"depth":8,"w":{"0":-22.245312100845545,"1":-28.414611600354607,"2":-40.143926661469514,"3":-17.273841219135295,"4":-7.201250111746498,"5":-12.1506036867687,"6":-11.651681044768887,"7":-21.757026454991646}},{"sx":1,"sy":1,"depth":8,"w":{"0":-23.188951970043106,"1":-32.60620937992009,"2":-19.495172737174112,"3":-12.054048324785668,"4":-2.1156829304768423,"5":-18.99556115257981,"6":-16.774911381265514,"7":-18.368840866767925}},{"sx":1,"sy":1,"depth":8,"w":{"0":-31.91031428453645,"1":-25.209358912318777,"2":-18.77297726334311,"3":-13.704274844438716,"4":-13.101204716864398,"5":-26.784552242316326,"6":-12.027922631916213,"7":-12.327815550526917}},{"sx":1,"sy":1,"depth":8,"w":{"0":-27.312729939995233,"1":-16.615789588394872,"2":-21.214867930973742,"3":-15.433860847575335,"4":-8.87076440933899,"5":-27.094096319245956,"6":-12.36532647952817,"7":-27.186065593444173}},{"sx":1,"sy":1,"depth":8,"w":{"0":-39.34852010565228,"1":-40.11353040712305,"2":-12.515845774274602,"3":-20.618974713037193,"4":-8.454365691786462,"5":-38.793573211342256,"6":-14.07968675115627,"7":-21.316704886673328}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.327186301992677,"1":-16.38724579038943,"2":-16.866816789981754,"3":-5.693271282334094,"4":-16.34002136361875,"5":-14.023512914125008,"6":-16.43906466394458,"7":-12.45011264941241}},{"sx":1,"sy":1,"depth":8,"w":{"0":-5.36704390468775,"1":-25.797142377076724,"2":-35.92434234533657,"3":-16.18014661228425,"4":-16.77862609426143,"5":-13.226441494831995,"6":-26.25200011582712,"7":-18.440898257373955}},{"sx":1,"sy":1,"depth":8,"w":{"0":-7.261771966322069,"1":-14.092194128465806,"2":-23.29076128437882,"3":-18.502529839458542,"4":-18.40834794301868,"5":-15.135294950218663,"6":-25.95522714149041,"7":-25.861385379174933}},{"sx":1,"sy":1,"depth":8,"w":{"0":-10.538461294153707,"1":-24.47432556870323,"2":-40.29894158866237,"3":-3.40471282469911,"4":-20.325294303626737,"5":-12.386764556457611,"6":-25.48335828933761,"7":-12.636382804516017}},{"sx":1,"sy":1,"depth":8,"w":{"0":-9.822297529568722,"1":-21.037109497618065,"2":-20.926644125145657,"3":-5.068129104719388,"4":-21.367123973936614,"5":-15.714501875914864,"6":-24.327592216234755,"7":-18.399818175202512}},{"sx":1,"sy":1,"depth":8,"w":{"0":-12.15200760323501,"1":-20.566511433730685,"2":-23.435363193746855,"3":-15.188568205016821,"4":-22.100561868401826,"5":-25.64671213002822,"6":-28.121914169084764,"7":-15.881366288056519}},{"sx":1,"sy":1,"depth":8,"w":{"0":-6.4692716719696,"1":-17.65628995922352,"2":-19.769678014475595,"3":-21.815823314038635,"4":-16.73974017689919,"5":-26.07855175482218,"6":-32.24114358334174,"7":-30.54781463978619}},{"sx":1,"sy":1,"depth":8,"w":{"0":-11.759468996052135,"1":-25.248843700872122,"2":-18.9197669627518,"3":-8.925079286427045,"4":-16.488722595102654,"5":-31.751358954025093,"6":-34.329765594855225,"7":-25.630916314240302}},{"sx":1,"sy":1,"depth":8,"w":{"0":-12.697515209627706,"1":-16.833927239218194,"2":-20.959563664807365,"3":-8.220055494835834,"4":-12.684039899784821,"5":-24.935828998314662,"6":-25.071799486037356,"7":-25.57338269174153}},{"sx":1,"sy":1,"depth":8,"w":{"0":-6.699670402085165,"1":-30.29700981832921,"2":-44.930561902011796,"3":-14.113899361100806,"4":-28.175753784002584,"5":-13.762602995962654,"6":-12.05967251616803,"7":-9.702426596784382}},{"sx":1,"sy":1,"depth":8,"w":{"0":-12.056994243955978,"1":-22.15051927784517,"2":-23.932686235187564,"3":-19.421201279991475,"4":-6.2967208703402475,"5":-14.764078264159273,"6":-17.251779445892698,"7":-29.228045599579683}},{"sx":1,"sy":1,"depth":8,"w":{"0":-8.053680308112023,"1":-28.28351692727527,"2":-42.28944740760454,"3":-8.108591782006183,"4":-7.919739716956257,"5":-13.184343423617386,"6":-20.53957089497807,"7":-25.62860830573733}},{"sx":1,"sy":1,"depth":8,"w":{"0":-10.009967680495318,"1":-30.038065610292786,"2":-22.653350954847884,"3":-6.982543462936667,"4":-7.729999820611493,"5":-18.034113575572313,"6":-24.320173976546325,"7":-23.128710418585}},{"sx":1,"sy":1,"depth":8,"w":{"0":-14.941359131412918,"1":-25.334478792862452,"2":-30.23822729728502,"3":-9.582163401161558,"4":-17.862973631525893,"5":-22.65901269845198,"6":-14.684678521686247,"7":-8.38482345531006}},{"sx":1,"sy":1,"depth":8,"w":{"0":-14.118335495244508,"1":-16.447554678027284,"2":-20.91509241252213,"3":-18.136141919627118,"4":-10.212534481752946,"5":-25.145845425450748,"6":-18.062547142784865,"7":-32.791905101802705}},{"sx":1,"sy":1,"depth":8,"w":{"0":-9.577367046513494,"1":-30.50673175265503,"2":-44.89648733560801,"3":-5.962490700764664,"4":-11.00434816687259,"5":-27.54970911676168,"6":-12.653826797063285,"7":-26.291528065660333}},{"sx":1,"sy":1,"depth":8,"w":{"0":-12.958407599479509,"1":-19.239509853345797,"2":-23.079054011749903,"3":-8.815628155917277,"4":-11.803594353872617,"5":-16.798265370680056,"6":-17.972032861234783,"7":-27.061339041547665}},{"sx":1,"sy":1,"depth":8,"w":{"0":-19.794181234857365,"1":-26.48298523785077,"2":-35.46987501363486,"3":-8.888415096640132,"4":-15.46011023941726,"5":-26.99884284895047,"6":-23.115599101844022,"7":-18.235244031504376}},{"sx":1,"sy":1,"depth":8,"w":{"0":-4.639347404132244,"1":-30.903896961034423,"2":-20.058994430745795,"3":-13.723209984170202,"4":-16.29044006673431,"5":-19.89295739664931,"6":-33.71022275622209,"7":-19.968563058535167}},{"sx":1,"sy":1,"depth":8,"w":{"0":-21.28625163771474,"1":-20.354389539478447,"2":-44.67629500987086,"3":-11.25900661876178,"4":-14.676278319983046,"5":-9.351224761431947,"6":-24.03403908315389,"7":-15.288468994793476}},{"sx":1,"sy":1,"depth":8,"w":{"0":-20.101778773488043,"1":-26.24958060587783,"2":-19.23290706735011,"3":-7.68087913726229,"4":-14.51951547531064,"5":-19.18795405835284,"6":-20.84986585024758,"7":-16.04666359949484}},{"sx":1,"sy":1,"depth":8,"w":{"0":-21.18036631019784,"1":-30.661664947619908,"2":-16.704085634270367,"3":-9.349382639887643,"4":-17.291735038087452,"5":-31.328486983877742,"6":-17.728860292162373,"7":-16.545664685575023}},{"sx":1,"sy":1,"depth":8,"w":{"0":-13.27459943054728,"1":-11.982968717321718,"2":-22.84653925137093,"3":-15.920446398091778,"4":-22.273847921515788,"5":-22.218245192956367,"6":-16.879194855617324,"7":-24.60999858124306}},{"sx":1,"sy":1,"depth":8,"w":{"0":-26.307868830785562,"1":-42.87481751444323,"2":-7.591373771973969,"3":-9.639149492809412,"4":-13.493954782746128,"5":-45.282742583137114,"6":-34.490887215651135,"7":-18.63801215776141}},{"sx":1,"sy":1,"depth":8,"w":{"0":-25.77428297169387,"1":-27.807596874824984,"2":-11.447450765809113,"3":-9.226661357842211,"4":-18.333679235327047,"5":-39.8293578135349,"6":-29.330174007265306,"7":-27.745872233151932}},{"sx":1,"sy":1,"depth":8,"w":{"0":-22.359445933983743,"1":-19.644356111591513,"2":-40.809782075111904,"3":-20.32034323584877,"4":-22.171469399365097,"5":-11.487173525723943,"6":-7.6805619328305,"7":-21.385124131554832}},{"sx":1,"sy":1,"depth":8,"w":{"0":-12.717439572778607,"1":-24.216641121276243,"2":-24.519163727991142,"3":-11.130908186160985,"4":-22.30231908263725,"5":-10.689615305695712,"6":-12.33046078834032,"7":-16.0695503867426}},{"sx":1,"sy":1,"depth":8,"w":{"0":-20.11137668718064,"1":-21.477646922460696,"2":-39.71434574563979,"3":-7.55201212457655,"4":-21.390224054905104,"5":-12.257090839442796,"6":-11.038310300720187,"7":-18.327046141963965}},{"sx":1,"sy":1,"depth":8,"w":{"0":-24.289320002787047,"1":-31.427290335454152,"2":-19.4181051949856,"3":-8.766481140913251,"4":-8.25095284532926,"5":-18.67306696584507,"6":-13.739762751322079,"7":-17.20261269791037}},{"sx":1,"sy":1,"depth":8,"w":{"0":-15.403475024873625,"1":-23.919832934512584,"2":-18.048223011704902,"3":-8.72641848271776,"4":-20.04238092621229,"5":-23.96555103273243,"6":-16.053811772508794,"7":-18.00611254947655}},{"sx":1,"sy":1,"depth":8,"w":{"0":-14.97990021278546,"1":-18.611678317238002,"2":-20.17362396169131,"3":-17.437766346798604,"4":-8.766907242930896,"5":-26.30857744814163,"6":-18.31302948896731,"7":-32.44528968083294}},{"sx":1,"sy":1,"depth":8,"w":{"0":-34.396783876234394,"1":-34.357806745150114,"2":-16.117483827060663,"3":-10.837269319354117,"4":-13.777345602939368,"5":-35.17620853155668,"6":-15.142845014176732,"7":-17.920332524375894}}],"biases":{"sx":1,"sy":1,"depth":127,"w":{"0":-45.12660849982537,"1":-44.782072450092556,"2":-44.97675692518119,"3":-44.98745004763102,"4":-44.84631457460521,"5":-44.90544072879043,"6":-45.10755125715699,"7":-44.94231748867214,"8":-44.884137253044045,"9":-44.92001682573911,"10":-44.78861574477887,"11":-45.03215040871182,"12":-44.71597326181409,"13":-44.96488914584776,"14":-45.02496197052637,"15":-44.8810326407147,"16":-44.98740395005167,"17":-44.963679767710474,"18":-45.0227292316176,"19":-44.778677938299346,"20":-44.851221627432515,"21":-44.86237383127783,"22":-44.93786196166386,"23":-44.95284313735442,"24":-44.9337964623679,"25":-44.79650114044036,"26":-45.04102462664434,"27":-44.88729690833138,"28":-44.6333660850392,"29":-44.83780422765578,"30":-44.886929403728615,"31":-44.96703109066006,"32":-16.04712561337464,"33":-13.964542576634752,"34":-20.883667700071633,"35":-21.035950008321112,"36":-16.793256142034167,"37":-12.952582188693322,"38":-20.413306972967564,"39":-21.639268240152464,"40":-19.239230544982867,"41":-16.035887238208236,"42":-19.43253105998442,"43":-16.693381634258706,"44":-13.244123368448784,"45":-12.479473072018832,"46":-19.543516935643605,"47":-13.35277997368371,"48":-14.077655481105573,"49":-13.027848013377864,"50":-16.099982660913326,"51":-14.003086905497541,"52":-16.30006868702188,"53":-14.186972831326643,"54":-17.153835977891237,"55":-13.065133958124253,"56":-3.0791025139408376,"57":-10.153503260540416,"58":-17.427031109241944,"59":-44.79909883626114,"60":-12.402136024951687,"61":-12.740139286841396,"62":-20.067418079833242,"63":-14.739815572266511,"64":-14.403614506038081,"65":-27.724230621074777,"66":-13.457281856573281,"67":-26.44236973725844,"68":-20.51561408612633,"69":-20.837829340898373,"70":-21.246619804165927,"71":-23.102779016299955,"72":-16.70129094806238,"73":-25.85795991403678,"74":-12.813498799972253,"75":-23.56305304107279,"76":-21.193102291213325,"77":-24.777870092327216,"78":-21.169213711862706,"79":-23.476277155618213,"80":-18.758358267298305,"81":-23.211815883869963,"82":-15.934217429462886,"83":-22.582393115480485,"84":-19.695012251710164,"85":-17.81710967289719,"86":-16.837617448789824,"87":-18.39979022168305,"88":-13.403766038461688,"89":-25.579837093633625,"90":-12.270855401764901,"91":-22.134951990627616,"92":-19.768955760170055,"93":-22.716761485891556,"94":-13.44650166619263,"95":-44.82964206842509,"96":-14.000627043453381,"97":-26.067654538908705,"98":-12.928934156214326,"99":-25.99922060127875,"100":-16.143382753071947,"101":-21.475041995869912,"102":-14.54246850043236,"103":-22.632058010637294,"104":-16.164857929571287,"105":-25.16939268903072,"106":-14.476535493278904,"107":-23.32128533178425,"108":-16.866207714258337,"109":-22.1019174053455,"110":-13.477759041344358,"111":-24.78661193826987,"112":-3.1006191566399734,"113":-21.02630019275618,"114":-10.15072973822144,"115":-20.54704309201135,"116":-17.655424965284663,"117":-23.655588436656803,"118":-12.100800291156465,"119":-13.899756143893304,"120":-12.521672773436606,"121":-27.817729751924442,"122":-13.107808866782658,"123":-22.720308256167644,"124":-24.126150501614088,"125":-21.290797173500305,"126":-14.883876363961603}}},{"out_depth":127,"out_sx":1,"out_sy":1,"layer_type":"softmax","num_inputs":127}]}
};