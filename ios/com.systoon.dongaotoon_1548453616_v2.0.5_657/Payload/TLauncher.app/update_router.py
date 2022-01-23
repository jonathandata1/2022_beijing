#!/usr/bin/env python
# -*- coding: utf-8 -*-

# import os, sys, datetime, re, logging, shutil, subprocess, json, urllib.parse, urllib.request, pickle
import os, sys, datetime, re, logging, shutil, json, pickle
if sys.version > '3':
    import subprocess
else:
    import commands as subprocess

class UpdateRouter(object):
    """docstring for UpdateRouter"""
    userAgent = ''
    realKey = 'app.systoon.com'
    routerPath = '/user/router/domain'

    def __init__(self):
        super(UpdateRouter, self).__init__()

    def getMethod(self, url, header, params):
        response = None
        result = subprocess.getstatusoutput('curl ' + ' -H ' + header + ' -X GET -s ' + url + '?' + params)
        if result[0] == 0:
            response = json.loads(result[1])
        return response

    def postMethod(self, url, header, params):
        response = None
        result = subprocess.getstatusoutput('curl ' + ' -H ' + header + ' ' + url + ' -X POST ' + '-s -d ' + params)
        if result[0] == 0:
            response = json.loads(result[1])
        return response

    def getRealUrl(self, url, key):
        realUrl = None
        result = self.getMethod(url, self.userAgent, '')
        if result != None and result['meta']['code'] == 0:
            realUrl = result['data']['basicRouter'][0][key][0]
        return realUrl

    def getRouterInfo(self, url):
        routerInfo = None
        result = self.postMethod(url, self.userAgent + ' -H content-type:application/json', '{\\"version\\":\\"0\\"}')
        if result != None and result['meta']['code'] == 0:
            routerInfo = result['data']
        return routerInfo
      
    def saveRouterInfo(self, path, info):
        with open(path, 'wt+') as f:
            f.write(json.dumps(info))
        return

    def update(self, argv):
        baseUrl = argv[1]
        toonType = argv[2]
        appVersion = argv[3]
        dstPath = argv[4]

        self.userAgent = 'x-toon-user-agent:appVersion:' + appVersion + ',toonType:' + toonType
        realUrl = self.getRealUrl(baseUrl, self.realKey)
        if realUrl == None:
            print('[ERROR]:get doman url error!')
            return
        routerInfo = self.getRouterInfo(realUrl + self.routerPath)
        if realUrl == None:
            print('[ERROR]:get router info error!')
            return
        self.saveRouterInfo(dstPath, routerInfo)
        return
        
if __name__ == '__main__':
    UpdateRouter().update(sys.argv)