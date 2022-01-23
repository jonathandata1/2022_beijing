1.skin_local_config用于提供本地皮肤的配置(不包含默认资源)
    resId              //主键，必填，string类型，如果填写数字则建议位数从“100000000”开始，避免与网络下载返回的resId重复
    name               //本地apk包名称，必填，位于assets目录下，string类型，填写全路径，格式例如 "LEGO_MODULES_CONFIG/com_systoon_tskin/local_skin_white.apm"
    previewImage       //预览图名称，必填,位于assets目录下，string类型，填写全路径，格式例如 "LEGO_MODULES_CONFIG/com_systoon_tskin/local_skin_white.png"
    colourScheme       //底部色块颜色，必填， string类型，填写格式例如 "#FFFFFa"
    reserved1          //边框颜色，选填，string类型，填写格式例如 "#33aaee"，为空则不设置边框
    defaultSkin        //默认展示皮肤，选填，string类型，无则展示res/values/skin.xml的应用本身颜色资源，有则与对应resId的相同即可。正常情况只首次安装时读取一次.