package com.secneo.apkwrapper;

import android.os.Build;
import dalvik.system.DexFile;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.zip.ZipFile;
/* loaded from: classes.dex */
public class a {
    private static ArrayList<DexFile> a = new ArrayList<>();

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.secneo.apkwrapper.a$a  reason: collision with other inner class name */
    /* loaded from: classes.dex */
    public static final class C0000a {
        static /* synthetic */ void a(ClassLoader classLoader, List list, File file) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, InvocationTargetException, NoSuchMethodException {
            try {
                int[] iArr = new int[0];
                b(classLoader, list, file);
            } catch (Exception ex1) {
                throw ex1;
            }
        }

        private static Object[] a(Object obj, ArrayList<File> arrayList, File file) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
            try {
                int[] iArr = new int[0];
                return (Object[]) a.a(obj, "makeDexElements", new Class[]{ArrayList.class, File.class}).invoke(obj, arrayList, file);
            } catch (Exception ex1) {
                throw ex1;
            }
        }

        private static void b(ClassLoader classLoader, List<File> list, File file) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, InvocationTargetException, NoSuchMethodException {
            try {
                int[] iArr = new int[0];
                Object obj = a.a((Object) classLoader, "pathList").get(classLoader);
                a.a(obj, "dexElements", a(obj, new ArrayList(list), file));
            } catch (Exception ex1) {
                throw ex1;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    public static final class b {
        static /* synthetic */ void a(ClassLoader classLoader, List list, File file) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, InvocationTargetException, NoSuchMethodException {
            try {
                int[] iArr = new int[0];
                b(classLoader, list, file);
            } catch (Exception ex1) {
                throw ex1;
            }
        }

        static /* synthetic */ Object[] a(Object obj, ArrayList arrayList, File file, ArrayList arrayList2) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
            try {
                int[] iArr = new int[0];
                return b(obj, arrayList, file, arrayList2);
            } catch (Exception ex1) {
                throw ex1;
            }
        }

        private static void b(ClassLoader classLoader, List<File> list, File file) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, InvocationTargetException, NoSuchMethodException {
            IOException[] iOExceptionArr;
            try {
                int[] iArr = new int[0];
                Object obj = a.a((Object) classLoader, "pathList").get(classLoader);
                ArrayList arrayList = new ArrayList();
                a.a(obj, "dexElements", b(obj, new ArrayList(list), file, arrayList), Build.VERSION.SDK_INT < 28);
                if (arrayList.size() > 0) {
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        IOException iOException = (IOException) it.next();
                    }
                    Field a = a.a(obj, "dexElementsSuppressedExceptions");
                    IOException[] iOExceptionArr2 = (IOException[]) a.get(obj);
                    if (iOExceptionArr2 == null) {
                        iOExceptionArr = (IOException[]) arrayList.toArray(new IOException[arrayList.size()]);
                    } else {
                        IOException[] iOExceptionArr3 = new IOException[arrayList.size() + iOExceptionArr2.length];
                        arrayList.toArray(iOExceptionArr3);
                        System.arraycopy(iOExceptionArr2, 0, iOExceptionArr3, arrayList.size(), iOExceptionArr2.length);
                        iOExceptionArr = iOExceptionArr3;
                    }
                    a.set(obj, iOExceptionArr);
                }
            } catch (Exception ex1) {
                throw ex1;
            }
        }

        private static Object[] b(Object obj, ArrayList<File> arrayList, File file, ArrayList<IOException> arrayList2) throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
            Method method;
            try {
                int[] iArr = new int[0];
                try {
                    method = a.a(obj, "makeDexElements", new Class[]{ArrayList.class, File.class, ArrayList.class});
                } catch (Exception unused) {
                    method = null;
                }
                if (method == null) {
                    try {
                        method = a.a(obj, "makePathElements", new Class[]{List.class, File.class, List.class});
                    } catch (Exception unused2) {
                    }
                }
                return (Object[]) method.invoke(obj, arrayList, file, arrayList2);
            } catch (Exception ex1) {
                throw ex1;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: classes.dex */
    public static final class c {
        static /* synthetic */ void a(ClassLoader classLoader, List list) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, IOException {
            try {
                int[] iArr = new int[0];
                b(classLoader, list);
            } catch (Exception ex1) {
                throw ex1;
            }
        }

        private static void b(ClassLoader classLoader, List<File> list) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, IOException {
            try {
                int[] iArr = new int[0];
                int size = list.size();
                Field a = a.a((Object) classLoader, "path");
                StringBuilder sb = new StringBuilder((String) a.get(classLoader));
                String[] strArr = new String[size];
                File[] fileArr = new File[size];
                ZipFile[] zipFileArr = new ZipFile[size];
                DexFile[] dexFileArr = new DexFile[size];
                ListIterator<File> listIterator = list.listIterator();
                while (listIterator.hasNext()) {
                    File next = listIterator.next();
                    String absolutePath = next.getAbsolutePath();
                    sb.append(':');
                    sb.append(absolutePath);
                    int previousIndex = listIterator.previousIndex();
                    strArr[previousIndex] = absolutePath;
                    fileArr[previousIndex] = next;
                    zipFileArr[previousIndex] = new ZipFile(next);
                    dexFileArr[previousIndex] = DexFile.loadDex(absolutePath, absolutePath.replace(".jar", ".dex"), 0);
                }
                a.set(classLoader, sb.toString());
                a.a(classLoader, "mPaths", strArr);
                a.a(classLoader, "mFiles", fileArr);
                a.a(classLoader, "mZips", zipFileArr);
                a.a(classLoader, "mDexs", dexFileArr);
            } catch (Exception ex1) {
                throw ex1;
            }
        }
    }

    static /* synthetic */ Field a(Object obj, String str) throws NoSuchFieldException {
        try {
            int[] iArr = new int[0];
            return b(obj, str);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    static /* synthetic */ Method a(Object obj, String str, Class[] clsArr) throws NoSuchMethodException {
        try {
            int[] iArr = new int[0];
            return b(obj, str, (Class<?>[]) clsArr);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    private static void a(ClassLoader classLoader, File file, List<File> list, boolean z) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, InvocationTargetException, NoSuchMethodException, IOException {
        try {
            int[] iArr = new int[0];
            if (list.isEmpty()) {
                return;
            }
            if (!z || (!Build.VERSION.RELEASE.equals("P") && Build.VERSION.SDK_INT < 28)) {
                int i = Build.VERSION.SDK_INT;
                if (i >= 19) {
                    b.a(classLoader, list, file);
                } else if (i >= 14) {
                    C0000a.a(classLoader, list, file);
                } else {
                    c.a(classLoader, list);
                }
            } else {
                a(classLoader, list.get(0).getAbsolutePath());
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    private static void a(ClassLoader classLoader, String str) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, InvocationTargetException, NoSuchMethodException {
        IOException[] iOExceptionArr;
        try {
            int[] iArr = new int[0];
            Object obj = b(classLoader, "pathList").get(classLoader);
            ArrayList arrayList = new ArrayList();
            b(obj, "dexElements", H.e(obj, arrayList, str), false);
            if (arrayList.size() > 0) {
                Iterator it = arrayList.iterator();
                while (it.hasNext()) {
                    IOException iOException = (IOException) it.next();
                }
                Field b2 = b(obj, "dexElementsSuppressedExceptions");
                IOException[] iOExceptionArr2 = (IOException[]) b2.get(obj);
                if (iOExceptionArr2 == null) {
                    iOExceptionArr = (IOException[]) arrayList.toArray(new IOException[arrayList.size()]);
                } else {
                    IOException[] iOExceptionArr3 = new IOException[arrayList.size() + iOExceptionArr2.length];
                    arrayList.toArray(iOExceptionArr3);
                    System.arraycopy(iOExceptionArr2, 0, iOExceptionArr3, arrayList.size(), iOExceptionArr2.length);
                    iOExceptionArr = iOExceptionArr3;
                }
                b2.set(obj, iOExceptionArr);
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static void a(ClassLoader classLoader, String str, String str2) {
        try {
            int[] iArr = new int[0];
            a(classLoader, str, str2, true);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static void a(ClassLoader classLoader, String str, String str2, boolean z) {
        try {
            int[] iArr = new int[0];
            try {
                a(classLoader, new File(str2), Arrays.asList(new File(str)), z);
            } catch (Exception unused) {
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    public static void a(Object obj) {
        try {
            int[] iArr = new int[0];
            try {
                ArrayList arrayList = new ArrayList();
                Field b2 = b(obj, "dexElements");
                Object[] objArr = (Object[]) b2.get(obj);
                for (Object obj2 : objArr) {
                    DexFile dexFile = (DexFile) b(obj2, "dexFile").get(obj2);
                    if (dexFile != null) {
                        arrayList.add(new File(dexFile.getName()));
                        a.add(dexFile);
                    }
                }
                b2.set(obj, b.a(obj, arrayList, null, new ArrayList()));
            } catch (Exception unused) {
            }
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    static /* synthetic */ void a(Object obj, String str, Object[] objArr) throws NoSuchFieldException, IllegalArgumentException, IllegalAccessException {
        try {
            int[] iArr = new int[0];
            b(obj, str, objArr);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    static /* synthetic */ void a(Object obj, String str, Object[] objArr, boolean z) throws NoSuchFieldException, IllegalArgumentException, IllegalAccessException {
        try {
            int[] iArr = new int[0];
            b(obj, str, objArr, z);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    /*  JADX ERROR: JadxRuntimeException in pass: BlockProcessor
        jadx.core.utils.exceptions.JadxRuntimeException: Can't find immediate dominator for block B:8:0x000a in {1, 5, 7, 13, 14, 15, 17} preds:[]
        	at jadx.core.dex.visitors.blocks.BlockProcessor.calcImmediateDominators(BlockProcessor.java:275)
        	at jadx.core.dex.visitors.blocks.BlockProcessor.computeDominators(BlockProcessor.java:227)
        	at jadx.core.dex.visitors.blocks.BlockProcessor.processBlocksTree(BlockProcessor.java:50)
        	at jadx.core.dex.visitors.blocks.BlockProcessor.visit(BlockProcessor.java:44)
        */
    private static java.lang.reflect.Field b(java.lang.Object r6, java.lang.String r7) throws java.lang.NoSuchFieldException {
        /*
            r0 = 0
            int[] r0 = new int[r0]     // Catch: Exception -> 0x0007, Throwable -> 0x0005
            goto L_0x0009
        L_0x0005:
            r0 = move-exception
            throw r0
        L_0x0007:
            r0 = move-exception
            throw r0
        L_0x0009:
            goto L_0x000d
            android.os.Debug.resetThreadExternalAllocSize()
        L_0x000d:
            java.lang.Class r0 = r6.getClass()
        L_0x0011:
            if (r0 == 0) goto L_0x0027
            java.lang.reflect.Field r1 = r0.getDeclaredField(r7)     // Catch: NoSuchFieldException -> 0x0022
            boolean r2 = r1.isAccessible()     // Catch: NoSuchFieldException -> 0x0022
            if (r2 != 0) goto L_0x0021
            r2 = 1
            r1.setAccessible(r2)     // Catch: NoSuchFieldException -> 0x0022
        L_0x0021:
            return r1
        L_0x0022:
            java.lang.Class r0 = r0.getSuperclass()
            goto L_0x0011
        L_0x0027:
            java.lang.NoSuchFieldException r0 = new java.lang.NoSuchFieldException
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Field "
            r1.append(r2)
            r1.append(r7)
            java.lang.String r7 = " not found in "
            r1.append(r7)
            java.lang.Class r6 = r6.getClass()
            r1.append(r6)
            java.lang.String r6 = r1.toString()
            r0.<init>(r6)
            throw r0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.secneo.apkwrapper.a.b(java.lang.Object, java.lang.String):java.lang.reflect.Field");
    }

    /*  JADX ERROR: JadxRuntimeException in pass: BlockProcessor
        jadx.core.utils.exceptions.JadxRuntimeException: Can't find immediate dominator for block B:8:0x000a in {1, 5, 7, 13, 14, 15, 17} preds:[]
        	at jadx.core.dex.visitors.blocks.BlockProcessor.calcImmediateDominators(BlockProcessor.java:275)
        	at jadx.core.dex.visitors.blocks.BlockProcessor.computeDominators(BlockProcessor.java:227)
        	at jadx.core.dex.visitors.blocks.BlockProcessor.processBlocksTree(BlockProcessor.java:50)
        	at jadx.core.dex.visitors.blocks.BlockProcessor.visit(BlockProcessor.java:44)
        */
    private static java.lang.reflect.Method b(java.lang.Object r6, java.lang.String r7, java.lang.Class<?>... r8) throws java.lang.NoSuchMethodException {
        /*
            r0 = 0
            int[] r0 = new int[r0]     // Catch: Exception -> 0x0007, Throwable -> 0x0005
            goto L_0x0009
        L_0x0005:
            r0 = move-exception
            throw r0
        L_0x0007:
            r0 = move-exception
            throw r0
        L_0x0009:
            goto L_0x000d
            android.os.Debug.stopNativeTracing()
        L_0x000d:
            java.lang.Class r0 = r6.getClass()
        L_0x0011:
            if (r0 == 0) goto L_0x0027
            java.lang.reflect.Method r1 = r0.getDeclaredMethod(r7, r8)     // Catch: NoSuchMethodException -> 0x0022
            boolean r2 = r1.isAccessible()     // Catch: NoSuchMethodException -> 0x0022
            if (r2 != 0) goto L_0x0021
            r2 = 1
            r1.setAccessible(r2)     // Catch: NoSuchMethodException -> 0x0022
        L_0x0021:
            return r1
        L_0x0022:
            java.lang.Class r0 = r0.getSuperclass()
            goto L_0x0011
        L_0x0027:
            java.lang.NoSuchMethodException r0 = new java.lang.NoSuchMethodException
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Method "
            r1.append(r2)
            r1.append(r7)
            java.lang.String r7 = " with parameters "
            r1.append(r7)
            java.util.List r7 = java.util.Arrays.asList(r8)
            r1.append(r7)
            java.lang.String r7 = " not found in "
            r1.append(r7)
            java.lang.Class r6 = r6.getClass()
            r1.append(r6)
            java.lang.String r6 = r1.toString()
            r0.<init>(r6)
            throw r0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.secneo.apkwrapper.a.b(java.lang.Object, java.lang.String, java.lang.Class[]):java.lang.reflect.Method");
    }

    private static void b(Object obj, String str, Object[] objArr) throws NoSuchFieldException, IllegalArgumentException, IllegalAccessException {
        try {
            int[] iArr = new int[0];
            b(obj, str, objArr, true);
        } catch (Exception ex1) {
            throw ex1;
        }
    }

    private static void b(Object obj, String str, Object[] objArr, boolean z) throws NoSuchFieldException, IllegalArgumentException, IllegalAccessException {
        try {
            int[] iArr = new int[0];
            Field b2 = b(obj, str);
            Object[] objArr2 = (Object[]) b2.get(obj);
            Object[] objArr3 = (Object[]) Array.newInstance(objArr2.getClass().getComponentType(), objArr2.length + objArr.length);
            if (z) {
                System.arraycopy(objArr2, 0, objArr3, objArr.length, objArr2.length);
                System.arraycopy(objArr, 0, objArr3, 0, objArr.length);
            } else {
                System.arraycopy(objArr2, 0, objArr3, 0, objArr2.length);
                System.arraycopy(objArr, 0, objArr3, objArr2.length, objArr.length);
            }
            b2.set(obj, objArr3);
        } catch (Exception ex1) {
            throw ex1;
        }
    }
}
