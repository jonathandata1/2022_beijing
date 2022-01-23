#!/usr/bin/env python
# -*- coding: utf-8 -*-

# import os, sys, datetime, re, logging, shutil, subprocess, json, urllib.parse, urllib.request, pickle
import os, sys, datetime, re, logging, shutil, json, pickle
if sys.version > '3':
    import subprocess
else:
    import commands as subprocess

class UpdateConfigCenter(object):
    """docstring for UpdateConfigCenter"""
    userAgent = ''
    domainKey = 'api.ocmconfig.systoon.com'
    appConfigPath = '/user/v2/getListAppConfig'

    def __init__(self):
        super(UpdateConfigCenter, self).__init__()


    def getMethod(self, url, header, params):
        response = None
        result = subprocess.getstatusoutput('curl ' + ' -X GET -s ' + url + header)
        if result[0] == 0:
            response = json.loads(result[1])
        return response
      
    def loadRouterInfo(self, path):
        with open(path, 'r') as f:
            routerInfo = json.load(f)
        return routerInfo

    def getConfigUrl(self, routerInfo, configKey):
        domainList = routerInfo['domain']
        for domain in domainList:
            for key in domain:
                if key == configKey:
                    return domain[configKey][0]
        return None

    def getCenterConfigInfo(self, url):
        configInfo = None
        result = self.getMethod(url, self.userAgent, 'timestamp=0')
        if result != None and result['code'] == 0:
            configInfo = result['data']
        return configInfo

    def saveCenterConfigInfo(self, path, info):
        with open(path, 'wt+') as f:
            f.write(json.dumps(info))
        return


    def update(self, argv):
        routerFilePath = argv[1]
        toonType = argv[2]
        dstPath = argv[3]

        self.userAgent = ' -H Content-Type:application/json -H Accept-Encoding:deflate,br -H '+'X-Toon-User-Agent:platform:iOS,appVersion:' + argv[4] +',toonType:'+ toonType + ' -H '+'platform:ios' + ' -H '+'toonType:' + toonType

        routerInfo = self.loadRouterInfo(routerFilePath)
        if routerInfo == None:
            print('[ERROR]:get routerInfo error!')
            return 

        configUrl = self.getConfigUrl(routerInfo, self.domainKey)
        if configUrl == None:
            print('[ERROR]:get configCenter url error!')
            return

        centerConfigInfo = self.getCenterConfigInfo(configUrl + self.appConfigPath)
        if centerConfigInfo == None:
            print('[ERROR]:get configCenter info error!')
            return

        self.saveCenterConfigInfo(dstPath, centerConfigInfo)
        return
        
if __name__ == '__main__':
    UpdateConfigCenter().update(sys.argv)
