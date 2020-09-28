Search.setIndex({docnames:["base","cli","conf","constants","drum","feature","index","models","music","quick-start","training","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["base.rst","cli.rst","conf.py","constants.rst","drum.rst","feature.rst","index.rst","models.rst","music.rst","quick-start.rst","training.rst","utils.rst"],objects:{"omnizart.base":{BaseTranscription:[0,1,1,""]},"omnizart.base.BaseTranscription":{transcribe:[0,2,1,""]},"omnizart.callbacks":{Callback:[10,1,1,""],EarlyStopping:[10,1,1,""],ModelCheckpoint:[10,1,1,""]},"omnizart.cli":{transcribe:[1,0,0,"-"]},"omnizart.constants":{datasets:[3,0,0,"-"],feature:[3,0,0,"-"],midi:[3,0,0,"-"]},"omnizart.constants.datasets":{BaseStructure:[3,1,1,""],ExtSuStructure:[3,1,1,""],MaestroStructure:[3,1,1,""],MapsStructure:[3,1,1,""],MusicNetStructure:[3,1,1,""],PopStructure:[3,1,1,""]},"omnizart.constants.datasets.BaseStructure":{label_ext:[3,2,1,""],test_labels:[3,2,1,""],test_wavs:[3,2,1,""],train_labels:[3,2,1,""],train_wavs:[3,2,1,""]},"omnizart.drum":{prediction:[4,0,0,"-"]},"omnizart.drum.app.DrumTranscription":{transcribe:[4,3,1,""]},"omnizart.drum.prediction":{create_batches:[4,3,1,""],merge_batches:[4,3,1,""],predict:[4,3,1,""]},"omnizart.feature":{beat_for_drum:[5,0,0,"-"],cfp:[5,0,0,"-"],cqt:[5,0,0,"-"],hcfp:[5,0,0,"-"]},"omnizart.feature.beat_for_drum":{MadmomBeatTracking:[5,1,1,""],extract_beat_with_madmom:[5,3,1,""],extract_mini_beat_from_audio_path:[5,3,1,""],extract_mini_beat_from_beat_arr:[5,3,1,""]},"omnizart.feature.beat_for_drum.MadmomBeatTracking":{process:[5,2,1,""]},"omnizart.feature.cfp":{STFT:[5,3,1,""],cfp_filterbank:[5,3,1,""],extract_cfp:[5,3,1,""],freq_to_log_freq_mapping:[5,3,1,""],nonlinear_func:[5,3,1,""],parallel_extract:[5,3,1,""],quef_to_log_freq_mapping:[5,3,1,""]},"omnizart.feature.cqt":{extract_cqt:[5,3,1,""],post_process_cqt:[5,3,1,""]},"omnizart.feature.hcfp":{extract_hcfp:[5,3,1,""],fetch_harmonic:[5,3,1,""]},"omnizart.models":{spectral_norm_net:[7,0,0,"-"],t2t:[7,0,0,"-"],u_net:[7,0,0,"-"],utils:[7,0,0,"-"]},"omnizart.models.spectral_norm_net":{ConvSN2D:[7,1,1,""],SpectralNormalization:[7,1,1,""],cnn_attention:[7,3,1,""],conv_sa:[7,3,1,""],down_sample:[7,3,1,""],drum_model:[7,3,1,""],residual_block:[7,3,1,""],transpose_residual_block:[7,3,1,""]},"omnizart.models.spectral_norm_net.ConvSN2D":{call:[7,2,1,""],get_config:[7,2,1,""]},"omnizart.models.spectral_norm_net.SpectralNormalization":{build:[7,2,1,""],call:[7,2,1,""],restore_weights:[7,2,1,""],update_weights:[7,2,1,""]},"omnizart.models.t2t":{cast_like:[7,3,1,""],combine_heads_2d:[7,3,1,""],combine_last_two_dimensions:[7,3,1,""],dot_product_attention:[7,3,1,""],dropout_with_broadcast_dims:[7,3,1,""],embedding_to_padding:[7,3,1,""],gather_blocks_2d:[7,3,1,""],gather_indices_2d:[7,3,1,""],local_attention_2d:[7,3,1,""],maybe_upcast:[7,3,1,""],mixed_precision_is_enabled:[7,3,1,""],pad_to_multiple_2d:[7,3,1,""],reshape_range:[7,3,1,""],scatter_blocks_2d:[7,3,1,""],split_heads_2d:[7,3,1,""],split_last_dimension:[7,3,1,""]},"omnizart.models.u_net":{MultiHeadAttention:[7,1,1,""],conv_block:[7,3,1,""],semantic_segmentation:[7,3,1,""],semantic_segmentation_attn:[7,3,1,""],transpose_conv_block:[7,3,1,""]},"omnizart.models.u_net.MultiHeadAttention":{call:[7,2,1,""],get_config:[7,2,1,""]},"omnizart.models.utils":{shape_list:[7,3,1,""]},"omnizart.music":{app:[8,0,0,"-"],dataset:[8,0,0,"-"],inference:[8,0,0,"-"],labels:[8,0,0,"-"],losses:[8,0,0,"-"],prediction:[8,0,0,"-"]},"omnizart.music.app":{MusicTranscription:[8,1,1,""]},"omnizart.music.app.MusicTranscription":{generate_feature:[8,2,1,""],train:[8,2,1,""],transcribe:[8,2,1,""]},"omnizart.music.dataset":{FeatureDataset:[8,1,1,""],get_dataset:[8,3,1,""]},"omnizart.music.inference":{down_sample:[8,3,1,""],find_min_max_stren:[8,3,1,""],find_occur:[8,3,1,""],infer_piece:[8,3,1,""],interpolation:[8,3,1,""],multi_inst_note_inference:[8,3,1,""],norm_onset_dura:[8,3,1,""],norm_split_onset_dura:[8,3,1,""],roll_down_sample:[8,3,1,""],threshold_type_converter:[8,3,1,""],to_midi:[8,3,1,""]},"omnizart.music.labels":{BaseLabelExtraction:[8,1,1,""],Label:[8,1,1,""],LabelType:[8,1,1,""],MaestroLabelExtraction:[8,1,1,""],MapsLabelExtraction:[8,1,1,""],MusicNetLabelExtraction:[8,1,1,""],PopLabelExtraction:[8,1,1,""],SuLabelExtraction:[8,1,1,""],label_conversion:[8,3,1,""]},"omnizart.music.labels.BaseLabelExtraction":{extract_label:[8,2,1,""],load_label:[8,2,1,""],name_transform:[8,2,1,""],process:[8,2,1,""]},"omnizart.music.labels.Label":{note:[8,2,1,""],velocity:[8,2,1,""]},"omnizart.music.labels.LabelType":{get_available_modes:[8,2,1,""],get_conversion_func:[8,2,1,""],get_frame:[8,2,1,""],get_frame_onset:[8,2,1,""],get_out_classes:[8,2,1,""],multi_inst_frm:[8,2,1,""],multi_inst_note:[8,2,1,""],multi_pop_note:[8,2,1,""]},"omnizart.music.labels.MaestroLabelExtraction":{load_label:[8,2,1,""]},"omnizart.music.labels.MapsLabelExtraction":{load_label:[8,2,1,""]},"omnizart.music.labels.MusicNetLabelExtraction":{load_label:[8,2,1,""]},"omnizart.music.labels.PopLabelExtraction":{name_transform:[8,2,1,""]},"omnizart.music.losses":{focal_loss:[8,3,1,""],smooth_loss:[8,3,1,""]},"omnizart.music.prediction":{predict:[8,3,1,""]},"omnizart.train":{PROGRESS_BAR_FORMAT:[10,4,1,""],execute_callbacks:[10,3,1,""],format_num:[10,3,1,""],gen_bar_postfix:[10,3,1,""],train_epochs:[10,3,1,""],train_steps:[10,3,1,""]},"omnizart.utils":{camel_to_snake:[11,3,1,""],dump_pickle:[11,3,1,""],ensure_path_exists:[11,3,1,""],get_logger:[11,3,1,""],json_serializable:[11,3,1,""],load_audio_with_librosa:[11,3,1,""],load_pickle:[11,3,1,""],load_yaml:[11,3,1,""],parallel_generator:[11,3,1,""],snake_to_camel:[11,3,1,""],write_yaml:[11,3,1,""]},omnizart:{base:[0,0,0,"-"],callbacks:[10,0,0,"-"],constants:[3,0,0,"-"],drum:[4,0,0,"-"],feature:[5,0,0,"-"],models:[7,0,0,"-"],train:[10,0,0,"-"],utils:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:data"},terms:{"00022286605749944285":5,"00022287":8,"100":[8,10],"108":8,"120":5,"127":8,"128":8,"2000":5,"2015":5,"2018":7,"2020":2,"256":[5,7,8],"3000":8,"352":[7,8],"354":8,"35th":7,"384":8,"44100":[5,8,11],"500":8,"7939":[5,8],"abstract":[0,3,7,8],"case":[8,11],"class":[3,4,5,6,7,8,10,11],"default":[2,3,4,8,10,11],"export":9,"final":[7,8],"float":[5,7,8,10],"function":[1,3,4,5,6,7,10,11],"import":2,"int":[3,4,5,7,8,10,11],"new":[8,10],"public":8,"return":[3,4,5,7,8,10,11],"static":[2,7],"true":[7,8,11],"while":[8,11],And:[8,10],For:[2,8,9],One:8,The:[1,2,3,4,5,7,8,9,10,11],There:[3,8],These:7,Use:[8,9],Used:[7,11],Uses:8,Will:11,With:8,__dict__:11,__init__:11,__str__:10,_static:2,_templat:2,a_hop:5,a_inst:11,abl:11,about:[3,8],abov:7,absolut:2,abspath:2,acc:10,access:[8,11],accord:[8,11],accrod:8,accuraci:10,acheiv:8,acm:5,activ:[4,7,8],activation_dtyp:7,actual:11,add:[2,7,8],addit:[4,7,10],addition:8,adjust:[3,8],advanc:8,affect:2,after:[2,8,10,11],akpnbcht:3,akpncgdd:3,alexand:7,alia:10,all:[1,3,6,7,8,9,10,11],allow:8,almost:9,along:[7,8],alpha:[2,8],also:[2,3,11],among:[7,8],amount:7,ani:2,anoth:[2,8],api:[6,7],app:[4,6],append:[7,10],appli:8,applic:[0,8],approach:[5,7,9],arch:8,architectur:[7,10],arg:7,argument:[1,7],around:8,arrai:[4,5,8,11],ashish:7,aspect:1,aspp:[7,8],assembl:7,assign:8,assum:[3,11],atrou:7,attent:7,attention_bia:7,attn:8,attribut:[0,8,11],audio:[1,4,5,8,9,11],audio_data:5,audio_len_sec:5,audio_path:[5,11],author:[2,5,7],autodoc:2,avail:[1,8,10],averag:8,axi:8,b_size:4,back:7,bar:10,bar_titl:10,base:[3,6,7,8,10],base_lay:7,baselabelextract:8,basestructur:3,basetranscript:[0,8],basic:[1,8],batch:[4,7,8],batch_featur:4,batch_pr:4,batch_siz:[4,8],batchsiz:8,bce:8,beat:[1,4,6,8],beat_arr:5,beat_for_drum:5,becom:7,befor:7,begin:5,behavior:8,behind:11,being:[7,11],below:8,best:10,beta:2,better:[7,8],between:[7,8],bia:7,bin:8,bin_per_octav:5,binsperoctav:8,bit:7,block:7,block_shap:7,block_strid:7,bool:[8,10],bootstrap_data:2,both:10,breezewhit:[2,5,7],broadcast:7,broadcast_dim:7,buffer:10,build:[7,8],builder:2,built:[9,10,11],builtin:2,bytes_or_buff:10,calcul:7,call:[5,7],callabl:8,callback:6,camel:11,camel_to_snak:11,can:[1,2,3,7,8,9,10],captur:7,cast:7,cast_lik:7,categor:11,categori:3,cen_freq:5,cenf:5,central:5,cep:[5,8],cepstrum:5,certain:10,cfp:[6,8],cfp_filterbank:5,ch_num:7,chang:11,channel:[3,7,8],channel_map:8,channel_program_map:8,checkpoint:[8,10],checkpointpath:8,chieh:7,choic:8,chord:[1,6],chunk_siz:11,classif:8,classifi:8,classmethod:8,cli:[4,8],clone:9,cnn_attent:7,collect:[1,5],column:8,com:9,combin:5,combine_heads_2d:7,combine_last_two_dimens:7,come:2,command:[6,8,9],common:[0,2,7],compar:10,compil:10,complet:9,comput:[5,7,8],compute_mask:7,concept:1,conf_path:[0,8],confer:7,config:7,configur:[2,7,8],connect:7,conquer:7,consist:8,constant:[5,6,8],construct:5,consum:7,contain:[2,3,5,7,8],content:6,continu:8,conv_0:7,conv_block:7,conv_sa:7,convent:[8,9],convers:8,convert:[8,11],convolut:7,convsn2d:7,copi:2,copyright:2,core:8,coresspond:8,correspond:[3,7,8,11],could:[7,11],cqt:6,creat:[4,7,9,10,11],create_batch:4,creation:7,critic:11,css:2,csv:[8,9],cubic:8,cultur:9,current:[4,7,8],custom:[2,7,8,10],cutoff:5,cycl:[8,10],d_model:7,d_sampl:8,data:[5,8,10,11],dataset:[6,10],dataset_path:8,deal:8,debug:11,decid:[8,10],decis:7,decod:10,decor:11,def:[3,11],default_venv_approach:9,defin:[0,3,7,8,10,11],definit:7,deliber:8,depend:[8,9],depth:7,depth_k:7,depth_v:7,describ:1,descript:[1,8],design:11,desir:5,detail:[1,8],detemin:8,determin:8,develop:[6,7],dict:[3,7,8,10,11],dictionari:[7,11],differ:[0,1,3,4,5,7,8,10,11],digit:10,dilation_r:7,dim:[7,8],dimens:[4,5,7,8],dimension:7,directori:[2,3,8,11],discard:8,divid:7,divis:7,doc:2,document:[2,8],doe:[3,7],doesn:[8,11],domain:1,don:8,dot:7,dot_product_attent:7,down:8,down_f:5,down_sampl:[7,8],down_sample_to_sapmling_r:5,download:8,downsampl:7,drop:7,dropout:7,dropout_broadcast_dim:7,dropout_r:7,dropout_with_broadcast_dim:7,drum:[1,6,7,8],drum_model:7,drumtranscript:4,dtype:7,due:8,dump:11,dump_pickl:11,dura:8,dura_th:8,durat:8,durath:8,dure:[8,10],dustin:7,each:[1,3,7,8,10],earli:10,earlystop:[8,10],easili:3,effect:10,effici:7,eighth:8,either:[8,10],element:[7,10],emb:7,embed:7,embedding_to_pad:7,encod:[7,8,10],encount:9,end:[4,5,8,10],end_beat:8,end_tim:8,engin:7,ensur:3,ensure_path_exist:11,entri:[1,4,8],environ:[9,11],epoch:[8,10],equal:7,error:[10,11],estim:[5,8],etc:11,evalu:8,event:10,everyth:8,exampl:[1,3,8,11],except:[1,9],exclude_pattern:2,execut:[8,9,10,11],execute_callback:10,exist:11,expand:8,expect:7,experi:8,expos:10,ext:2,extend:[3,7,8],extens:[1,2,3,8],extract:[3,5,8,10],extract_beat_with_madmom:5,extract_cfp:5,extract_cqt:5,extract_hcfp:5,extract_label:8,extract_mini_beat_from_audio_path:5,extract_mini_beat_from_beat_arr:5,extsustructur:3,fade:8,fals:[2,5,8,10,11],faster:8,featur:[4,6,7,8,10],feature_fil:8,feature_fold:8,feature_num:[7,8],feature_s:8,feature_save_path:8,featuredataset:8,featuresavepath:8,featuretyp:8,fetch_harmon:5,few:8,field:8,file:[1,2,3,4,8,9,11],filenam:[5,8],filepath:10,fill:8,filter:8,find:8,find_min_max_stren:8,find_occur:8,fine:8,finish:10,first:[1,5,7,8,10],fit:[8,10],flag:7,flatten:7,flexibl:[8,10],focal:8,focal_loss:8,folder:[3,7,8,9],follow:[1,3,9],format:[8,10,11],format_num:10,former:[1,8,11],formula:8,forward:8,found:[1,8],frame:8,frameth:8,freq:4,freq_to_log_freq_map:5,frequenc:[5,8],frequencycent:8,frequencyresolut:8,frm_th:8,from:[1,5,7,8,10,11],from_json:11,full:[2,11],fulli:7,func:11,func_nam:10,furhter:5,further:8,gamma:8,gather:7,gather_blocks_2d:7,gather_indices_2d:7,gco:[5,8],gen_bar_postfix:10,gener:[2,5,8,10],generate_featur:8,get:[7,8,11],get_available_mod:8,get_config:7,get_conversion_func:8,get_dataset:8,get_fram:8,get_frame_onset:8,get_label_conversion_wrapp:8,get_logg:11,get_out_class:8,getdefaultencod:10,git:9,github:9,give:8,given:[5,7,8,10,11],got:8,gpu:8,gram:5,ground:3,group:3,guarante:9,hack:7,handl:7,handler:10,happen:8,hard:7,hard_attention_k:7,harmon:8,harmonic_num:5,harmonicnumb:8,has:[7,8],have:[7,8,10,11],hcfp:[6,8],hdf:8,head:7,height:7,hello:11,help:[1,2],here:[2,7,8],high:8,higher:8,highest:[3,5,8],highest_midi_not:3,highlight:2,hint:8,histori:10,hold:8,hop:[5,8],hop_siz:8,hopsiz:8,hot:8,how:[7,8],hparam:7,html:2,html_extra_path:2,html_static_path:2,html_theme:2,http:[2,9],hyper:8,icml:7,ident:9,ieee:5,ignor:2,imag:7,image_shap:7,implement:[7,8,10],implemet:7,improv:[7,10],imrov:8,includ:[2,3,6,7,8,9,10,11],increas:[5,8],index:[2,8],indic:[7,8,10],infer:6,infer_piec:8,info:11,inform:[2,3,5,7,8,9,10,11],inherit:[3,8],initi:[8,10],inject:11,inlud:8,input:[1,4,5,7,8],input_audio:[0,4,8],input_list:11,input_model_path:8,input_shap:7,input_tensor:7,insert:2,insid:11,inst:11,inst_th:8,instal:6,installtoin:9,instanc:[7,8,10],instanti:7,instead:7,instrument:[1,3,6,8],instth:8,integ:[7,8],interfac:[0,6,8],intermedi:8,intern:7,interpol:[5,8],interv:[5,8],invers:7,invis:11,is_drum:8,is_revers:5,iter:10,ith_har:5,its:7,jakob:7,json:11,json_obj:11,json_serializ:11,just:7,kaiser:7,keep:7,keep_prob:7,kei:[7,11],kept:7,kera:[7,8,10],kernel:7,kernel_s:7,key_path:11,keypress:8,keyword:7,kind:6,kwarg:[7,10,11],lab:9,label:[3,6],label_convers:8,label_conversion_func:8,label_ext:3,label_list:8,label_path:8,label_str:8,labeltyp:8,languag:5,larg:7,larger:8,last:[1,7,9],later:[7,8],layer:7,layer_num:7,layout:11,lead:[7,8],learn:7,left:7,length:[5,8,10],length_kv:7,length_q:7,less:7,level:[8,11],leverag:7,libarari:9,librari:5,librosa:[5,11],life:[8,10],like:[2,3,7,10,11],line:[6,8],linear:5,list:[1,2,3,7,8,10,11],listen:8,lisu:5,littl:7,live:7,load:[8,10,11],load_audio_with_librosa:11,load_label:8,load_pickl:11,load_yaml:11,loader:8,local:7,local_attention_2d:7,log:[5,8,11],log_level:11,log_normalized_gram:5,logger:11,logic:[7,10],logit:[7,8],longeset:10,look:[2,3,7],loop:[8,10],loss:[6,10],lossfunct:8,lot:8,low:8,lower:8,lower_onset_th:8,lowest:[3,5,8],lowest_midi_not:3,lowest_not:5,lukasz:7,machin:7,madmom:[5,9],madmombeattrack:5,maestro:[3,8],maestrolabelextract:8,maestrostructur:3,magnitud:5,mai:[8,9],main:10,major:10,make:[2,7,8,9,11],manag:[9,10],mani:[7,8],manner:8,mantain:5,manual:9,map:[3,8],maps_akpnbcht_2:3,maps_akpncgdd_2:3,mapslabelextract:8,mapsstructur:3,mask:7,master:2,master_doc:2,match:[2,7],max_sampl:5,max_work:11,maximum:[8,10],maybe_upcast:7,mctlab:6,mean:8,measur:5,mechan:7,melodi:[1,6],memori:[7,8],memory_flang:7,merg:[4,8],merge_batch:4,messag:11,meta:3,method:[0,3,5,7,8,10],metric:10,mid:[1,3,8],midi:[1,4,5,6,8,9],midi_gram:5,midi_program_name_map:3,min_dur:8,mini:[4,5],mini_beat_div_n:5,mini_beat_per_seg:[4,7],mini_beat_po:4,mini_beat_pos_t:5,minimum:8,minlength:8,mix:7,mixed_precision_is_en:7,mixtur:5,mode:8,model:[1,4,6,8,10],model_nam:8,model_path:[0,4,8],modelcheckpoint:10,modeltyp:8,modifi:[3,8],modul:[2,4,7,8],monitor:10,more:[1,5,8,9,10],most:[2,7,8,9],mpe:8,much:[7,8],multi:[7,8],multi_grid_layer_n:7,multi_grid_n:7,multi_inst_frm:8,multi_inst_not:8,multi_inst_note_infer:8,multi_pop_not:8,multiheadattent:7,multipitch:5,multipl:[5,7,8,10],music:[1,4,5,6,9],music_piano:8,music_pop:8,music_set:8,musicnet:[3,8],musicnet_instrument_program:3,musicnetlabelextract:8,musicnetstructur:3,musicset:8,musictranscript:8,must:[7,8,10],n_head:7,naiv:8,name:[1,2,3,7,8,10,11],name_transform:[8,10],nativ:8,ndarrai:[5,8],neccessari:7,necessari:[3,7,8],need:[7,8],net:6,network:7,newest:10,niki:7,noam:7,noise_shap:7,none:[0,4,7,8,10,11],nonlinear_func:5,nor:7,norm_onset_dura:8,norm_split_onset_dura:8,normal:[5,6,8],note:[1,3,5,6,7,8,11],note_num:5,note_valu:8,now:10,num:10,num_anchor:8,num_class:8,num_head:7,num_per_octav:5,num_sampl:8,num_thread:5,number:[3,4,5,7,8,10],numperoct:5,numpi:[4,5,8,11],numpydoc:2,numpydoc_show_inherited_class_memb:2,object:[3,8,10,11],observ:[8,10],occur:8,occur_num:8,octav:8,off:8,offset:8,offset_sec:8,omnizart:[0,1,2,3,4,5,7,8,9,10,11],on_epoch_begin:10,on_epoch_end:10,on_test_batch_begin:10,on_test_batch_end:10,on_train_batch_begin:10,on_train_batch_end:10,on_train_begin:10,on_train_end:10,one:[4,7,8],ones:2,onli:[2,7,8,10],onset:8,onset_len_sec:8,onset_th:8,onsetth:8,option:[2,4,7,8],order:10,org:2,ori_feature_s:8,ori_t_unit:8,origin:[7,8,10],other:7,otherwis:[7,10],our:[8,10],out:[4,8],out_channel:7,out_class:7,out_midi:8,out_path:8,output:[0,1,2,4,7,8,11],output_path:11,overlap:7,overrid:[7,8,10],overriden:[3,8],overwrit:2,own:[1,8,10],pacakg:9,packag:9,pad:[4,5,7,8],pad_sec:5,pad_siz:4,pad_to_multiple_2d:7,pad_typ:7,padded_x:7,page:[1,2],pair:[8,10,11],paper:8,parallel_extract:5,parallel_gener:11,paramet:[4,5,7,8,10,11],parent:8,parmar:7,pars:8,part:[7,8],partit:7,pass:[7,8],patch_cqt_featur:4,path:[1,2,3,4,5,8,9,10,11],patienc:10,pattern:2,per:7,percuss:[1,4,6],perform:[8,10],period:10,piano:8,pick:7,pickl:[8,11],pickle_fil:11,piec:8,pitch:8,plai:8,pleas:[8,9],poetri:9,point:[4,7,8],polyphon:5,pool:7,pop:[3,6,8],pop_instrument_program:3,poplabelextract:8,popstructur:3,posit:[5,7,8],possibl:7,post_process_cqt:5,postfix:[8,10],pre:8,precis:7,pred:8,prediciton:6,predict:[6,8],prediction_tensor:8,prefix:8,present:8,press:2,pretty_midi:8,prettymidi:8,print:[10,11],probabl:[7,8],problem:9,proceed:7,process:[3,4,5,7,8],produc:5,product:[7,8],program:[3,8,11],progress:[6,10],progress_bar_format:10,project:[0,2,3,11],propag:11,properti:[3,8],propos:5,provid:[8,9,10],purpos:[8,11],pygment:2,pygments_styl:2,pyramid:7,python:[7,9,11],quater:8,quef_to_log_freq_map:5,queri:7,query_shap:7,quick:6,random:7,rang:8,rank:7,rate:[5,7,8,11],raw:[4,5,8,11],read:11,readail:7,real:8,record:[3,10],recurs:11,refer:[5,6,7,8,9],reinstanti:7,rel:[2,3,8,11],relat:3,releas:2,relev:10,remov:8,replac:1,repositori:7,repr:10,repres:[3,8,9],represent:[5,8],requir:[5,8,9,10],resampl:5,resblock:7,reshap:7,reshape_rang:7,residual_block:7,resolut:[5,8],respect:8,rest:8,restore_weight:7,result:[5,8,10],return_v:8,revers:4,rewrit:7,rhythm:8,right:7,role:8,roll_down_sampl:8,root:[1,2,3],rst:2,sai:8,same:[1,3,7,8,9,10,11],sampl:[5,8,11],sampling_r:[5,11],samplingr:8,save:[7,8,10],save_best_onli:10,save_bset_onli:10,save_to:11,save_weights_onli:10,save_weights_to:7,savepath:8,saveprefix:8,scalar:[7,8],scale:5,scatter:7,scatter_blocks_2d:7,scenario:8,scope:[3,7],score:10,script:9,second:[5,8,9],section:9,see:[1,2,7],segment:4,select:[2,8],self:[3,4,7,8,11],semantic_segment:7,semantic_segmentation_attn:7,sequenc:7,seri:8,serial:11,serializ:[7,11],set:[3,4,6,9,10,11],setting_class:0,setting_load:8,setup:[2,9],setuptool:9,sever:[1,11],shape:[4,7,8],shape_list:7,share:7,shazeer:7,sheet:2,shell:9,shorter:5,shortest_sec:8,should:[1,3,4,5,7,8,10,11],show:10,shown:2,sigmoid:8,similar:[3,8],sinc:8,singl:[5,8,10],sixteenth:8,size:[4,5,7,8],skip:10,smaller:[7,8],smooth:8,smooth_loss:8,snake:[8,11],snake_to_camel:11,solut:8,some:[3,5,8],song:6,sourc:2,source_suffix:2,space:8,spatial:7,spec:8,specifi:[1,7,8,9,10],spectral:[5,6],spectral_norm:7,spectral_norm_net:7,spectralnorm:7,spectrogram:5,spectrum:5,speech:5,sphinx:2,spline:8,split:[5,7,8],split_bound:8,split_heads_2d:7,split_last_dimens:7,stabl:5,stage:[10,11],start:[6,8,10],start_beat:8,start_freq:5,start_tim:8,state:7,statu:10,std:8,step:[7,8,10],stft:5,stop:10,storag:8,store:[3,7,8,11],str:[7,8,10,11],straight:8,stream:8,strict:10,stride:7,string:[2,7,8,10,11],structur:[3,8],style:2,sub:[1,3,8,11],subclass:7,subsequ:8,substructur:3,subtyp:8,sulabelextract:8,support:[3,7,8],sure:[7,8],symbol_mod:7,syntax:2,synthes:5,sys:[2,10],system:9,t2t:7,t_unit:8,tag:2,take:7,tar_sampling_r:11,tar_t_unit:8,target:[5,8,10,11],target_tensor:8,task:[0,6],techiniqu:5,technolog:9,templat:2,templates_path:2,tempor:5,tend:8,tensor2tensor:6,tensor:[7,8],tensorflow:[7,10],tensorshap:7,termin:8,test:[2,3,8,11],test_featur:8,test_label:3,test_normal_serializ:11,test_util:11,test_wav:3,tfr:5,tfrl0:5,tfrlf:5,tfrlq:5,than:[7,8,10],thei:[2,7],them:[4,8],theme:2,theri:11,thi:[0,1,2,3,4,7,8,9,10,11],thing:8,those:11,three:[1,3,5],threshold:8,threshold_type_convert:8,thu:[5,7,8,9,10],time:[4,8,9],time_cent:8,timecent:8,timestamp:8,timestep:[7,8],titl:10,to_down:7,to_json:11,to_midi:8,togeth:5,tool:[6,9],top:7,total:[5,8,10],total_ch:8,track:[1,6,8],train:[3,4,6,7,8],train_dataset:10,train_epoch:10,train_featur:8,train_label:3,train_step:10,train_wav:3,trainig:3,tran:7,trancrib:1,trans_nam:8,transact:5,transblock:7,transcrib:[0,6,8],transcript:[0,1,6,7],transcriptionmod:8,transform:[7,8],translat:8,transpose_conv_block:7,transpose_residual_block:7,transrib:8,trigger:[7,10],trueli:8,truth:3,tune:8,tupl:7,two:[1,7,8,10,11],txt:[8,9],type:[1,7,8,10,11],typic:7,u_net:7,under:[7,8,9],unit:[8,11],unknown:8,unless:8,unstabl:9,until:8,unus:7,updat:10,update_weight:7,upgrad:9,usag:[1,2,8],use:[2,5,8,9],use_thread:11,used:[3,5,7,8,10],uses:7,using:[5,7,8,9,10],uszkoreit:7,util:[0,4,6,8,10],val_acc:10,val_step:10,valbatchs:8,valid:[8,10],validate_dataset:10,valstep:8,valu:[8,10,11],value_path:11,variabl:[3,7,11],variou:11,vaswani:7,vector:7,veloc:8,venv:9,version:[2,8],virtual:9,visual:[7,10],vocal:[1,6],wai:9,wait:10,want:8,warn:11,wav:[1,3,4,8,9],wei:7,weight:[7,8,10],weight_dtyp:7,what:[3,8],when:[2,7,8,9,10],where:[3,7,8],wherea:7,whether:[8,10],which:[5,7,8,9,10,11],whole:[3,8],wide:[8,9],width:7,wihtin:8,win_siz:5,windows:8,within:[3,8,10],without:[7,8,10],work:[6,8],world:11,wors:8,would:[5,11],wrapper:[5,7],write:[4,8],write_yaml:11,written:[4,8],wrong:8,www:2,y_pred:8,y_true:8,yaml:[3,8],yaml_path:11,yang:5,yet:3,yield:[8,10],you:[7,8,9,10,11],your:2,yourself:8,zero:7},titles:["Base Classes","Command Line Interface","&lt;no title&gt;","Constants","Drum Transcription","Feature","Omniscient Mozart\u2019s Document","Models","Music Transcription","Quick Start","Training","Utilities"],titleterms:{"class":0,"function":8,Using:9,also:8,app:8,attribut:3,base:0,beat:5,callback:10,cfp:5,command:1,constant:3,cqt:5,dataset:[3,8],document:6,drum:4,featur:[3,5],from:9,hcfp:5,infer:8,instal:9,interfac:1,label:8,line:1,loss:8,midi:3,model:7,mozart:6,music:8,net:7,normal:7,omnisci:6,pip:9,pop:9,prediciton:8,predict:4,quick:9,see:8,set:8,song:9,sourc:9,spectral:7,start:9,tensor2tensor:7,track:5,train:10,transcrib:[1,4,9],transcript:[4,8],util:[7,11]}})