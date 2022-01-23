package com.secneo.apkwrapper;

import android.app.Application;
import android.content.Context;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.Message;
import android.os.Messenger;
import com.secneo.apkwrapper.r.b;
import java.io.FileInputStream;
import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
/* loaded from: classes.dex */
public class H {
    public static String ACFNAME = "###ACFNAME###";
    public static String APPNAME = "com.legoboot.core.LegoApplication";
    public static String HAVEX86 = "###HAVEX86###";
    public static String ISMPAAS = "###MPAAS###";
    public static String PKGNAME = "com.systoon.dongaotoon";
    public static ClassLoader cl;
    private static final Messenger mMessenger = new Messenger(new a());
    private static Messenger mService = null;
    private static ServiceConnection sConnection = new b();

    /* loaded from: classes.dex */
    static class a extends Handler {
        a() {
        }

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            try {
                int[] iArr = new int[0];
                if (message.what != 1000) {
                    super.handleMessage(message);
                } else {
                    H.p();
                }
            } catch (Exception ex1) {
                throw ex1;
            }
        }
    }

    public static /* synthetic */ Messenger access$000() {
        try {
            int[] iArr = new int[0];
            return mService;
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static /* synthetic */ Messenger access$002(Messenger messenger) {
        try {
            int[] iArr = new int[0];
            mService = messenger;
            return messenger;
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static /* synthetic */ Messenger access$100() {
        try {
            int[] iArr = new int[0];
            return mMessenger;
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static native void attach(Application application, Context context);

    public static native void b(Context context, Application application);

    public static native void bb(Context context, Application application, Application application2);

    public static int bytes2int(byte[] bArr) {
        try {
            int[] iArr = new int[0];
            return bArr[3] | ((((((0 | bArr[0]) << 8) | bArr[1]) << 8) | bArr[2]) << 8);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static native void c();

    public static native String d(String str);

    public static native Object[] e(Object obj, List<IOException> list, String str);

    public static void f(ClassLoader classLoader, String str, String str2) {
        try {
            int[] iArr = new int[0];
            a.a(classLoader, str, str2);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static final native String[] f();

    public static void ff(ClassLoader classLoader, String str, String str2) {
        try {
            int[] iArr = new int[0];
            a.a(classLoader, str, str2, false);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static void g(Object obj) {
        try {
            int[] iArr = new int[0];
            a.a(obj);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static final native String[] g();

    public static Object h(ClassLoader classLoader) {
        try {
            int[] iArr = new int[0];
            return new c(":", classLoader);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static final native String[] h();

    public static native void i();

    public static boolean is_x86_byso() {
        Exception ex1;
        FileInputStream fileInputStream;
        byte[] bArr;
        FileInputStream fileInputStream2;
        Exception ex12;
        try {
            int[] iArr = new int[0];
            boolean z = false;
            if (HAVEX86.equalsIgnoreCase("true")) {
                return false;
            }
            try {
                fileInputStream = null;
                bArr = new byte[20];
            } catch (Throwable th) {
                ex1 = th;
            }
            try {
                fileInputStream2 = new FileInputStream("/system/lib/libc.so");
                try {
                    fileInputStream2.read(bArr);
                    int bytes2int = bytes2int(new byte[]{0, 0, bArr[19], bArr[18]});
                    if (bytes2int == 3 || bytes2int == 6 || bytes2int == 7) {
                        z = true;
                    }
                    try {
                        fileInputStream2.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    return z;
                } catch (Exception e2) {
                    ex12 = e2;
                    ex12.printStackTrace();
                    if (fileInputStream2 != null) {
                        try {
                            fileInputStream2.close();
                        } catch (IOException e3) {
                            e3.printStackTrace();
                        }
                    }
                    return false;
                }
            } catch (Exception e4) {
                ex12 = e4;
                fileInputStream2 = null;
            } catch (Throwable th2) {
                ex1 = th2;
                if (0 != 0) {
                    try {
                        fileInputStream.close();
                    } catch (IOException e5) {
                        e5.printStackTrace();
                    }
                }
                throw ex1;
            }
        } catch (Exception ex13) {
            throw ex13;
        }
    }

    public static boolean j(Context context) {
        try {
            int[] iArr = new int[0];
            return new b(context).h();
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static final native String[] j();

    public static final native String k();

    public static final native String l();

    public static final native String m();

    public static String[] m(String[] strArr, String str) {
        try {
            int[] iArr = new int[0];
            String[] strArr2 = new String[(strArr != null ? strArr.length : 0) + 1];
            if (strArr == null) {
                strArr2[0] = str;
            } else {
                System.arraycopy(strArr, 0, strArr2, 0, strArr.length);
                strArr2[strArr2.length - 1] = str;
            }
            return strArr2;
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static final native int mu();

    public static final native String[] n();

    public static void ns(String str) {
        try {
            int[] iArr = new int[0];
            try {
                Class<?> cls = Class.forName("android.app.ResourcesManager");
                Method declaredMethod = cls.getDeclaredMethod("getInstance", new Class[0]);
                declaredMethod.setAccessible(true);
                Object invoke = declaredMethod.invoke(cls, new Object[0]);
                Field declaredField = cls.getDeclaredField("mResourceImpls");
                declaredField.setAccessible(true);
                for (Object obj : ((Map) declaredField.get(invoke)).keySet()) {
                    Field declaredField2 = Class.forName("android.content.res.ResourcesKey").getDeclaredField("mSplitResDirs");
                    declaredField2.setAccessible(true);
                    declaredField2.set(obj, m((String[]) declaredField2.get(obj), str));
                }
            } catch (Exception unused) {
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static final native int o(Context context);

    public static final native void p();

    public static final native int q();

    public static void stub() {
        try {
            int[] iArr = new int[0];
        } catch (Exception ex1) {
            throw ex1;
        }
    }
}
