package com.secneo.apkwrapper;

import android.annotation.TargetApi;
import android.app.Activity;
import android.app.AppComponentFactory;
import android.app.Application;
import android.app.Service;
import android.content.BroadcastReceiver;
import android.content.ContentProvider;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.text.TextUtils;
@TargetApi(28)
/* loaded from: classes.dex */
public final class AP extends AppComponentFactory {
    private AppComponentFactory a = null;

    private synchronized AppComponentFactory a(ClassLoader classLoader) {
        AppComponentFactory appComponentFactory;
        try {
            int[] iArr = new int[0];
            synchronized (this) {
                if (this.a == null && !TextUtils.isEmpty(H.ACFNAME)) {
                    try {
                        this.a = (AppComponentFactory) classLoader.loadClass(H.ACFNAME).newInstance();
                    } catch (Exception unused) {
                    }
                }
                appComponentFactory = this.a;
            }
            return appComponentFactory;
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public synchronized void a(AppComponentFactory appComponentFactory) {
        try {
            int[] iArr = new int[0];
            synchronized (this) {
                this.a = appComponentFactory;
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.app.AppComponentFactory
    public Activity instantiateActivity(ClassLoader classLoader, String str, Intent intent) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        try {
            int[] iArr = new int[0];
            if (Boolean.parseBoolean(AW.d)) {
                AppComponentFactory a = a(classLoader);
                a(a);
                if (a != null) {
                    return a.instantiateActivity(classLoader, str, intent);
                }
            }
            return super.instantiateActivity(classLoader, str, intent);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.app.AppComponentFactory
    public Application instantiateApplication(ClassLoader classLoader, String str) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        try {
            int[] iArr = new int[0];
            if (Boolean.parseBoolean(AW.d)) {
                AppComponentFactory a = a(classLoader);
                a(a);
                if (a != null) {
                    return a.instantiateApplication(classLoader, str);
                }
            }
            return super.instantiateApplication(classLoader, str);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.app.AppComponentFactory
    @TargetApi(29)
    public ClassLoader instantiateClassLoader(ClassLoader classLoader, ApplicationInfo applicationInfo) {
        try {
            int[] iArr = new int[0];
            if (Boolean.parseBoolean(AW.d)) {
                AppComponentFactory a = a(classLoader);
                a(a);
                if (a != null) {
                    return a.instantiateClassLoader(classLoader, applicationInfo);
                }
            }
            return super.instantiateClassLoader(classLoader, applicationInfo);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.app.AppComponentFactory
    public ContentProvider instantiateProvider(ClassLoader classLoader, String str) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        try {
            int[] iArr = new int[0];
            if (Boolean.parseBoolean(AW.d)) {
                AppComponentFactory a = a(classLoader);
                a(a);
                if (a != null) {
                    return a.instantiateProvider(classLoader, str);
                }
            }
            return super.instantiateProvider(classLoader, str);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.app.AppComponentFactory
    public BroadcastReceiver instantiateReceiver(ClassLoader classLoader, String str, Intent intent) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        try {
            int[] iArr = new int[0];
            if (Boolean.parseBoolean(AW.d)) {
                AppComponentFactory a = a(classLoader);
                a(a);
                if (a != null) {
                    return a.instantiateReceiver(classLoader, str, intent);
                }
            }
            return super.instantiateReceiver(classLoader, str, intent);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.app.AppComponentFactory
    public Service instantiateService(ClassLoader classLoader, String str, Intent intent) throws ClassNotFoundException, IllegalAccessException, InstantiationException {
        try {
            int[] iArr = new int[0];
            if (Boolean.parseBoolean(AW.d)) {
                AppComponentFactory a = a(classLoader);
                a(a);
                if (a != null) {
                    return a.instantiateService(classLoader, str, intent);
                }
            }
            return super.instantiateService(classLoader, str, intent);
        } catch (Exception ex1) {
            throw ex1;
        }
    }
}
