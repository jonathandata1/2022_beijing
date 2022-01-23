package com.secneo.apkwrapper;

import android.annotation.TargetApi;
import android.app.Application;
import android.content.Context;
/* loaded from: classes.dex */
public class AW extends Application {
    private static Application a = null;
    private static Application b = null;
    private static boolean c = false;
    public static String d = "false";
    private static Context mC;

    public static void a() {
        Application application;
        try {
            int[] iArr = new int[0];
            if (!c && (application = a) != null) {
                c = true;
                H.bb(mC, b, application);
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.content.ContextWrapper
    protected void attachBaseContext(Context context) {
        try {
            int[] iArr = new int[0];
            mC = context;
            System.loadLibrary(H.is_x86_byso() ? "DexHelper-x86" : "DexHelper");
            b = this;
            super.attachBaseContext(context);
            try {
                if (!"".equals(H.APPNAME) && (H.q() == 0 || H.mu() == 0)) {
                    a = (Application) getClassLoader().loadClass(H.APPNAME).newInstance();
                }
            } catch (Exception unused) {
                a = null;
            }
            H.attach(a, context);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.content.Context, android.content.ContextWrapper
    public Context getApplicationContext() {
        try {
            int[] iArr = new int[0];
            Application application = a;
            return application != null ? application : super.getApplicationContext();
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.app.Application
    public void onCreate() {
        try {
            int[] iArr = new int[0];
            a();
            super.onCreate();
            Application application = a;
            if (application != null) {
                H.attach(application, null);
                a.onCreate();
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    @Override // android.app.Application
    @TargetApi(14)
    public void registerActivityLifecycleCallbacks(Application.ActivityLifecycleCallbacks activityLifecycleCallbacks) {
        try {
            int[] iArr = new int[0];
            super.registerActivityLifecycleCallbacks(activityLifecycleCallbacks);
            Application application = a;
            if (application != null) {
                application.registerActivityLifecycleCallbacks(activityLifecycleCallbacks);
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }
}
