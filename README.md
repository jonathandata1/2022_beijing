
# Decompiled 2022 Beijing Olympics Apps
### Author: Jonathan Scott 
#### Twitter: @jonathandata1
#### Version 2.0


![2022 Beijing Olympics Apps](https://i.postimg.cc/rscdmBjs/2022-beijing.jpg)


## Included

### 1. MY2022 iOS .ipa 
#### - Version: 2.0.5_657 (latest app signed in the Apple App Store as of 1/23/2022)
### 2. MY2022 AndroidOS .apk
#### - Version: 2.0.4 (latest app signed in the Google Play Store as of 1/23/2022)
### 3. Scraped web data from found endpoints
### 4. Unminified JS files - Showing data collection and db calls
### 5. List of endpoints gathered from Decompiled Apps and Scraped Endpoints
### 6. iOS PCAP file - showing data transfer out of iPhone -> Chinese Servers
### 7. iOS Filesystem Trace while executing the MY2022 iOS app

## NOTE:
### Due to the size of the .ipa file and the binary located inside of the .ipa file. I have added a download link to my website

**TLauncher binary go into the following directory** 
/ios/com.systoon.dongaotoon_1548453616_v2.0.5_657/Payload/payload_unpacked/TLauncher

**Files Download:** https://www.0hak.com/research/2022-beijing-olympics-files

## Overview

> This repo directly correlates with a report I will be releasing Jan 24th, 2022. The report reveals how the 2022 MY2022 App is collecting data, and storing data on Chinese servers. This is just a general overview, the report will be very detailed. 

### Purposeful Disclosure: 

#### Participants of the 2022 Beijing Olympics are required to download this application on their phones. This directive comes from "The Playbook."

**Repo Source:** the_playbook/The-Playbook-Athletes-and-Team-Officials-December-2021.pdf
**Origin Source:** https://stillmed.olympics.com/media/Documents/Olympic-Games/Beijing-2022/Playbooks/The-Playbook-Athletes-and-Team-Officials-December-2021.pdf

![2022 Beijing Olympics Apps](https://i.postimg.cc/0NHtmqHt/Screen-Shot-2022-01-23-at-3-10-02-AM.png)

- ### The remote capabilities of both the iOS and AndroidOS applications are very concerning, and after decompilation, I learned that these remote services can be triggered at will, more details in upcoming report.

## Data Collection iOS - Brief Summary

### When downloading the MY2020 Application in the iOS App Store, you should notice that the Application states that there is No Data Collection. 

![2022 Beijing Olympics Apps](https://i.postimg.cc/prn8SwCL/IMG-0604.png)

> **The following is just an example screen shot of the GET and POST requests being made from the iOS App. I performed a MITM attack to capture this iOS specific data. Details available in my full report.**

![2022 Beijing Olympics Apps](https://i.postimg.cc/Zn90R6v7/Screen-Shot-2022-01-22-at-10-29-13-PM.png)

> **Here is a further qualified example of data exfiltration from the iOS App - Verifiable source included in this repository in output.pcap**

![2022 Beijing Olympics Apps](https://i.postimg.cc/PJTctn32/Screen-Shot-2022-01-22-at-3-11-14-AM.png )

## Personal Health Data Exfiltration

**Repo Source**: scraped_web/hms.beijing2022.cn/static/js/app.08c205f8fd379f4b133b.js
**Origin Source:** https://hms.beijing2022.cn/static/js/app.08c205f8fd379f4b133b.js


After tracing the server requests and unminifying the javascript I could clearly see the data that was being exfiltrated and could confirm that indeed this was intended for iOS users

![2022 Beijing Olympics Apps](https://i.postimg.cc/Bv8tCdCY/Screen-Shot-2022-01-23-at-3-37-22-AM.png)

| Example 1 Data                                                             | Example 2 Data                                                  |
|----------------------------------------------------------------------------|-----------------------------------------------------------------|
| reported_title_entry: "入境后",                                            | agree: "我同意",                                                |
| reported_msg: "您已填报",                                                  | confirm: "确定",                                                |
| lost_msg: "，漏填",                                                        | modify_success: "修改成功",                                     |
| daily_health: "每日健康信息填报",                                          | modify: "修改",                                                 |
| goto_fill: "去填报",                                                       | no_data: "暂无数据",                                            |
| vaccination: "新冠疫苗接种信息填报",                                       | no_replenish_data: "暂无可补录的日期",                          |
| test_results: "实验室检测结果填报",                                        | choose_replenish_data: "选择需要补录的日期",                    |
| schedule: "计划行程填报",                                                  | file_format_error: "文件格式不正确",                            |
| actual: "实际行程填报",                                                    | file_format_error_desc: "请上传 jpg 或 jpeg 或 png 格式的图片", |
| information: "个人健康信息汇总报告",                                       | file_size_exceed: "超出文件大小限制",                           |
| id_no: "注册号：",                                                         | file_size_exceed_desc: "上传文件大小不能超过 6M",               |
| date: "日期：",                                                            | info_health: "健康填报信息",                                    |
| temperature: "当前体温:",                                                  | info_test: "实验室检测结果",                                    |
| isfever: "发热:",                                                          | info_vaccination: "新冠疫苗接种",                               |
| istired: "乏力:",                                                          | more_vaccination: "添加接种疫苗针剂",                           |
| iscough: "咳嗽:",                                                          | max_doses: "疫苗针剂最多支持5次",                               |
| ispharyngalgia: "咽痛:",                                                   | required_test_img: "请上传核酸检测报告照片",                    |
| isheadache: "头痛:",                                                       | required_vaccine_img: "请上传接种记录照片",                     |
| ismyalgia: "肌肉/关节酸痛:",                                               | record_vaccine: "请至少完成一剂疫苗接种记录的填写",             |
| isbreath: "呼吸困难:",                                                     | complete_vaccine: "请完成当前疫苗接种记录的填写",               |
| ispectoralgia: "胸痛:",                                                    | schedule_flight: "计划入境航班",                                |
| isvomit: "呕吐:",                                                          | schedule_flight_time: "计划入境登机时间",                       |
| isdiarrhea: "腹泻:",                                                       | schedule_inbound_date: "计划入境日期",                          |
| issmell: "味觉异常:",                                                      | schedule_outbound_date: "计划离境日期",                         |
| isothersymptoms: "其他不适症状:",                                          | schedule_outbound_flight: "计划离境航班",                       |
| isseedoctor: "今日是否有就诊记录或服药记录:",                              | actual_inbound_date: "入境日期",                                |
| istouchpatient: "今日您是否曾接触新冠肺炎确诊病例/疑似病例/无症状感染者:", | actual_flight: "入境航班",                                      |
| enterRequire: "请输入",                                                    | actual_flight_seat: "入境航班座位号",                           |
| chooseRequire: "请选择",                                                   | actual_outbound_date: "计划离境日期",                           |
| all_choose_no: "全部选“否”",                                               | actual_outbound_flight: "计划离境航班",                         |
| daily_health_list: "健康信息查询",                                         | info_schedule: "计划行程",                                      |
| view_detail: "查看详情",                                                   | info_actual: "实际行程",                                        |
| daily_health_supplement: "健康信息补录",                                   | temperature_error: "请输入数字",                                |
| vaccine_question: "您是否接种过新型冠状病毒疫苗",                          | temperature_error_range: "体温输入不规范",                      |
| vaccine_img: "接种记录照片",                                               | before_error: "不能早于",                                       |
| first: "一",                                                               | today_str: "当天",                                              |
| second: "二",                                                              | after_error: "不能晚于",                                        |
| third: "三",                                                               | login: "登录",                                                  |
| forth: "四",                                                               | password: "密码",                                               |
| fifth: "五",                                                               | verify_code: "验证码",                                          |
| vaccine_manufacturer: "第###NUM###剂疫苗名称 (厂家名称)",                  | login_id_no: "注册卡号",                                        |
| vaccine_time: "第###NUM###剂接种时间",                                     | forget_password: "忘记密码",                                    |
| result_positive: "阳性",                                                   | forget_password_mark: "忘记密码",                               |
| result_negative: "阴性",                                                   | index: "首页",                                                  |
| result_undetected: "未检测",                                               | email: "注册邮箱",                                              |
| test_img: "核酸检测报告",                                                  |                                                                 |


![2022 Beijing Olympics Apps](https://i.postimg.cc/g2k8RzB3/Screen-Shot-2022-01-23-at-3-51-12-AM.png)

## UPDATE 1/26/2022: The iOS app has been decrypted, and the decrypted TLauncher binary is available for download on  https://www.0hak.com/research/2022-beijing-olympics-files

> After decrypting the iOS ipa TLauncher binary that executes when launching the MY2022 app could be easily read and interpreted. The data exfiltration path and endpoint were clear, and showed the prevalence and unilateral integration of technology created by a known Chinese spyware firm iFlytek. The spyware firm is on a US blacklist due to its disregard to human rights and data privacy.

Source: https://www.wired.com/story/mit-cuts-ties-chinese-ai-firm-human-rights/  

This screenshot of the disassembled binary shows how iFlytek is interacting with the users device and the MY2020 app. 

![2022 Beijing Olympics Apps](https://i.postimg.cc/hvHrrnC9/iflytek.png )




## AndroidOS 

### Unfortunately Google allowed the MY2022 app to create a persistent backdoor into the users device. The following are the permissions the app is allowed.  

![2022 Beijing Olympics Apps](https://i.postimg.cc/zv7MtDwT/FJmy-VGe-Xo-AASFWI.jpg)

![2022 Beijing Olympics Apps](https://i.postimg.cc/9f9k3Ytm/FJmwp-A6-XEAQIHy-P.jpg)
`<uses-permission android:name="com.android.launcher.permission.INSTALL_SHORTCUT"/>
 <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.KILL_BACKGROUND_PROCESSES"/>
    <uses-permission android:name="android.permission.RESTART_PACKAGES"/>
    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.DOWNLOAD_WITHOUT_NOTIFICATION"/>
    <uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS"/>
    <uses-permission android:name="android.permission.WRITE_CONTACTS"/>
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
    <uses-permission android:name="android.permission.CHANGE_CONFIGURATION"/>
    <uses-permission android:name="android.permission.WRITE_SETTINGS"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.VIBRATE"/>
    <uses-permission android:name="android.permission.CALL_PHONE"/>
    <uses-permission android:name="android.permission.WAKE_LOCK"/>
    <uses-permission android:name="android.permission.READ_LOGS"/>
    <uses-feature android:name="android.hardware.camera"/>
    <uses-feature android:name="android.hardware.camera.autofocus"/>
    <uses-permission android:name="android.permission.RECEIVE_USER_PRESENT"/>
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
    <uses-permission android:name="android.permission.GET_TASKS"/>
    <uses-permission android:name="android.permission.READ_FRAMEBUFFER"/>
    <uses-permission android:name="android.permission.BLUETOOTH"/>
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
    <uses-permission android:name="com.dh.provider.bluelock.READPERMISSION"/>
    <uses-permission android:name="com.dh.provider.bluelock.WRITEPERMISSION"/>
    <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>
    <uses-permission android:name="android.permission.NFC"/>
    <uses-feature android:name="android.hardware.nfc.hce"/>
    <uses-permission android:name="org.simalliance.openmobileapi.SMARTCARD"/>
    <uses-permission android:name="android.permission.READ_APP_BADGE"/>
    <uses-permission android:name="android.hardware.sensor.accelerometer"/>
    <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
    <uses-permission android:name="android.permission.READ_CONTACTS"/>
    <uses-permission android:name="android.permission.WRITE_CONTACTS"/>
    <uses-permission android:name="android.permission.USE_FINGERPRINT"/>
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
    <uses-permission android:name="com.android.launcher.permission.READ_SETTINGS"/>
    <uses-feature android:name="android.hardware.sensor.stepcounter" android:required="true"/>
    <uses-feature android:name="android.hardware.sensor.stepdetector" android:required="true"/>
    <uses-permission android:name="android.permission.READ_CALENDAR"/>
    <uses-permission android:name="android.permission.DISABLE_KEYGUARD"/>
    <uses-permission android:name="android.permission.READ_PRIVILEGED_PHONE_STATE"/>
    <uses-permission android:name="com.huawei.android.launcher.permission.CHANGE_BADGE"/>
    <uses-permission android:name="com.sec.android.provider.badge.permission.READ"/>
    <uses-permission android:name="com.sec.android.provider.badge.permission.WRITE"/>
    <uses-feature android:name="android.hardware.nfc" android:required="true"/>
    <uses-feature android:name="android.hardware.bluetooth_le" android:required="true"/>
    <uses-permission android:name="android.permission.WRITE_CALENDAR"/>
    <uses-permission-sdk-23 android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.REORDER_TASKS"/>
    <uses-permission android:name="android.permission.SYSTEM_OVERLAY_WINDOW"/>
    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION"/>
    <permission android:name="com.systoon.dongaotoon.permission.MIPUSH_RECEIVE" android:protectionLevel="signature"/>
    <permission android:name="com.systoon.dongaotoon.push.permission.MESSAGE" android:protectionLevel="signature"/>
    <permission android:name="com.systoon.dongaotoon.permission.C2D_MESSAGE" android:protectionLevel="signature"/>
    <uses-permission android:name="com.systoon.dongaotoon.permission.MIPUSH_RECEIVE"/>
    <uses-permission android:name="com.systoon.dongaotoon.permission.PROCESS_PUSH_MSG"/>
    <uses-permission android:name="com.systoon.dongaotoon.push.permission.MESSAGE"/>
    <uses-permission android:name="com.systoon.dongaotoon.permission.C2D_MESSAGE"/>
    <uses-permission android:name="com.meizu.c2dm.permission.RECEIVE"/>
    <uses-permission android:name="com.meizu.flyme.push.permission.RECEIVE"/>
    <uses-permission android:name="com.coloros.mcs.permission.RECIEVE_MCS_MESSAGE"/>
    <uses-permission android:name="com.heytap.mcs.permission.RECIEVE_MCS_MESSAGE"/>
    <uses-permission android:name="android.permission.FLASHLIGHT"/>
    <uses-feature android:name="android.hardware.camera.front" android:required="false"/>
    <uses-feature android:name="android.hardware.camera.flash" android:required="false"/>
    <uses-feature android:name="android.hardware.screen.landscape"/>
    <uses-feature android:name="android.hardware.wifi" android:required="false"/>
    <uses-feature android:name="android.hardware.touchscreen" android:required="false"/>
    <uses-permission android:name="android.permission.READ_PHONE_NUMBERS"/>
    <permission android:name="com.systoon.dongaotoon.permission.PROCESS_PUSH_MSG" android:protectionLevel="signatureOrSystem"/>
    <permission android:name="com.systoon.dongaotoon.permission.PUSH_PROVIDER" android:protectionLevel="signatureOrSystem"/>
    <permission android:name="com.systoon.dongaotoon.permission.PUSH_WRITE_PROVIDER" android:protectionLevel="signatureOrSystem"/>
    <uses-permission android:name="com.systoon.dongaotoon.permission.PUSH_PROVIDER"/>
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
    <uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>`

## AndroidOS Data Exfiltration & Command & Control

### Here are a few things that can be modified and triggered remotely
**Repo Source:** scraped_web/hms.beijing2022.cn/static/js/app.08c205f8fd379f4b133b.js
**Origin Source:** hms.beijing2022.cn/static/js/app.08c205f8fd379f4b133b.js

| Remote Control      |                  |                      |
|---------------------|------------------|----------------------|
| makePhoneCall       | startWifi        | openGps              |
| getClipboardData    | stopWifi         | getSystemInfo        |
| setClipboardData    | connectWifi      | setScreenBrightness  |
| getNetworkType      | getWifiList      | getScreenBrightness  |
| rotateScreen        | setWifiList      | setKeepScreenOn      |
| addCalendarEvent    | getConnectedWifi | startBeaconDiscovery |
| deleteCalendarEvent | getHCEState      | stopBeaconDiscovery  |
| editCalendarEvent   | startHCE         | getBeacons           |
| getCalendarEvent    | stopHCE          | startVibrate         |

![2022 Beijing Olympics Apps](https://i.postimg.cc/YqyDhsd2/Screen-Shot-2022-01-22-at-1-17-02-AM.png)

 
```
            function i(e) {
                e && e.callback && e.callback(r(e.handlerName, e.params))
            }

            function r(e, t) {
                return {
                    data: s[e] ? s[e] : "handlerName 不存在！！！",
                    msg: "ok !!!",
                    code: 0
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = {};
            t.default = {
                init: a
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = [{
                moduleName: "app",
                actionKeys: ["shutdown", "setClearStorage"],
                eventKeys: ["onAppLifecycle"]
            }, {
                moduleName: "card",
                actionKeys: ["chooseCard", "openQrCode"]
            }, {
                moduleName: "cardList",
                actionKeys: ["chooseCard"]
            }, {
                moduleName: "chat",
                actionKeys: ["openChat", "createSingleChat", "request", "uploadFile", "uploadAvatar", "chooseFile", "chooseContact"]
            }, {
                moduleName: "contact",
                actionKeys: ["openFriends", "openColleagues", "openCard", "openContact"]
            }, {
                moduleName: "database",
                actionKeys: ["createTable", "insert", "delete", "update", "select"]
            }, {
                moduleName: "device",
                actionKeys: ["makePhoneCall", "getClipboardData", "setClipboardData", "getNetworkType", "scanCode", "genQrCode", "rotateScreen", "addCalendarEvent", "deleteCalendarEvent", "editCalendarEvent", "getCalendarEvent", "startVibrate", "openGps", "getSystemInfo", "setScreenBrightness", "getScreenBrightness", "setKeepScreenOn", "startBeaconDiscovery", "stopBeaconDiscovery", "getBeacons", "startWifi", "stopWifi", "connectWifi", "getWifiList", "setWifiList", "getConnectedWifi", "getHCEState", "startHCE", "stopHCE", "sendHCEMessage"],
                eventKeys: ["onBeaconUpdate", "onBeaconServiceChange", "onGetWifiList", "onWifiConnected", "onHCEMessage"]
            }, {
                moduleName: "discovery",
                actionKeys: ["openAround", "openGroup"]
            }, {
                moduleName: "file",
                actionKeys: ["openDocument", "getFileInfo", "deleteFile", "getFileList"]
            }, {
                moduleName: "frame",
                actionKeys: ["open", "openFrame", "displayFrame"]
            }, {
                moduleName: "group",
                actionKeys: ["setGroup", "create", "openQrCode", "discovery"]
            }, {
                moduleName: "groupChat",
                actionKeys: ["create", "joinGroupChat", "openGroupChat"]
            }, {
                moduleName: "location",
                actionKeys: ["getLocation", "openLocation", "chooseLocation"],
                eventKeys: ["onLocationChange"]
            }, {
                moduleName: "media",
                actionKeys: ["chooseImage", "previewImage", "audioPlay", "videoPlay", "audioRecord", "chooseVideo"]
            }, {
```

### There is a lot of AndroidOS data exfil and system controls to speak about, but as I mentioned this is a brief introduction to the full report I will be releasing . 
