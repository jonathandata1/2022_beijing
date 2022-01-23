.class public Lcom/secneo/apkwrapper/AW;
.super Landroid/app/Application;
.source ""


# static fields
.field private static a:Landroid/app/Application; = null

.field private static b:Landroid/app/Application; = null

.field private static c:Z = false

.field public static d:Ljava/lang/String; = "false"

.field private static mC:Landroid/content/Context;


# direct methods
.method public constructor <init>()V
    .locals 6

    invoke-direct {p0}, Landroid/app/Application;-><init>()V

    return-void
.end method

.method public static a()V
    .locals 6

    const/4 v0, 0x0

    :try_start_0
    new-array v0, v0, [I
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Throwable; {:try_start_0 .. :try_end_0} :catch_0

    nop

    goto :goto_0

    :catch_0
    move-exception v0

    .local v0, "ex1":Ljava/lang/Throwable;
    throw v0

    .end local v0    # "ex1":Ljava/lang/Throwable;
    :catch_1
    move-exception v0

    .local v0, "ex1":Ljava/lang/Exception;
    throw v0

    :goto_0
    goto :goto_1

    invoke-static {}, Landroid/os/Looper;->prepare()V

    :goto_1
    sget-boolean v0, Lcom/secneo/apkwrapper/AW;->c:Z

    if-nez v0, :cond_0

    sget-object v0, Lcom/secneo/apkwrapper/AW;->a:Landroid/app/Application;

    if-eqz v0, :cond_0

    const/4 v1, 0x1

    sput-boolean v1, Lcom/secneo/apkwrapper/AW;->c:Z

    sget-object v1, Lcom/secneo/apkwrapper/AW;->mC:Landroid/content/Context;

    sget-object v2, Lcom/secneo/apkwrapper/AW;->b:Landroid/app/Application;

    invoke-static {v1, v2, v0}, Lcom/secneo/apkwrapper/H;->bb(Landroid/content/Context;Landroid/app/Application;Landroid/app/Application;)V

    :cond_0
    return-void
.end method


# virtual methods
.method protected attachBaseContext(Landroid/content/Context;)V
    .locals 6

    const/4 v0, 0x0

    :try_start_0
    new-array v0, v0, [I
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Throwable; {:try_start_0 .. :try_end_0} :catch_0

    nop

    goto :goto_0

    :catch_0
    move-exception v0

    .local v0, "ex1":Ljava/lang/Throwable;
    throw v0

    .end local v0    # "ex1":Ljava/lang/Throwable;
    :catch_1
    move-exception v0

    .local v0, "ex1":Ljava/lang/Exception;
    throw v0

    :goto_0
    goto :goto_1

    invoke-static {}, Landroid/appwidget/AppWidgetHost;->deleteAllHosts()V

    :goto_1
    sput-object p1, Lcom/secneo/apkwrapper/AW;->mC:Landroid/content/Context;

    invoke-static {}, Lcom/secneo/apkwrapper/H;->is_x86_byso()Z

    move-result v0

    if-eqz v0, :cond_0

    const-string v0, "DexHelper-x86"

    goto :goto_2

    :cond_0
    const-string v0, "DexHelper"

    :goto_2
    invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V

    sput-object p0, Lcom/secneo/apkwrapper/AW;->b:Landroid/app/Application;

    invoke-super {p0, p1}, Landroid/app/Application;->attachBaseContext(Landroid/content/Context;)V

    :try_start_1
    const-string v0, ""

    sget-object v1, Lcom/secneo/apkwrapper/H;->APPNAME:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2

    invoke-static {}, Lcom/secneo/apkwrapper/H;->q()I

    move-result v0

    if-eqz v0, :cond_1

    invoke-static {}, Lcom/secneo/apkwrapper/H;->mu()I

    move-result v0

    if-nez v0, :cond_2

    :cond_1
    invoke-virtual {p0}, Landroid/app/Application;->getClassLoader()Ljava/lang/ClassLoader;

    move-result-object v0

    sget-object v1, Lcom/secneo/apkwrapper/H;->APPNAME:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/ClassLoader;->loadClass(Ljava/lang/String;)Ljava/lang/Class;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Class;->newInstance()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/Application;

    sput-object v0, Lcom/secneo/apkwrapper/AW;->a:Landroid/app/Application;
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_2

    goto :goto_3

    :catch_2
    const/4 v0, 0x0

    sput-object v0, Lcom/secneo/apkwrapper/AW;->a:Landroid/app/Application;

    :cond_2
    :goto_3
    sget-object v0, Lcom/secneo/apkwrapper/AW;->a:Landroid/app/Application;

    invoke-static {v0, p1}, Lcom/secneo/apkwrapper/H;->attach(Landroid/app/Application;Landroid/content/Context;)V

    return-void
.end method

.method public getApplicationContext()Landroid/content/Context;
    .locals 6

    const/4 v0, 0x0

    :try_start_0
    new-array v0, v0, [I
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Throwable; {:try_start_0 .. :try_end_0} :catch_0

    nop

    goto :goto_0

    :catch_0
    move-exception v0

    .local v0, "ex1":Ljava/lang/Throwable;
    throw v0

    .end local v0    # "ex1":Ljava/lang/Throwable;
    :catch_1
    move-exception v0

    .local v0, "ex1":Ljava/lang/Exception;
    throw v0

    :goto_0
    goto :goto_1

    invoke-static {}, Landroid/os/Debug;->stopNativeTracing()V

    :goto_1
    sget-object v0, Lcom/secneo/apkwrapper/AW;->a:Landroid/app/Application;

    if-eqz v0, :cond_0

    return-object v0

    :cond_0
    invoke-super {p0}, Landroid/app/Application;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    return-object v0
.end method

.method public onCreate()V
    .locals 6

    const/4 v0, 0x0

    :try_start_0
    new-array v0, v0, [I
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Throwable; {:try_start_0 .. :try_end_0} :catch_0

    nop

    goto :goto_0

    :catch_0
    move-exception v0

    .local v0, "ex1":Ljava/lang/Throwable;
    throw v0

    .end local v0    # "ex1":Ljava/lang/Throwable;
    :catch_1
    move-exception v0

    .local v0, "ex1":Ljava/lang/Exception;
    throw v0

    :goto_0
    goto :goto_1

    invoke-static {}, Landroid/os/StrictMode;->enableDefaults()V

    :goto_1
    invoke-static {}, Lcom/secneo/apkwrapper/AW;->a()V

    invoke-super {p0}, Landroid/app/Application;->onCreate()V

    sget-object v0, Lcom/secneo/apkwrapper/AW;->a:Landroid/app/Application;

    if-eqz v0, :cond_0

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/secneo/apkwrapper/H;->attach(Landroid/app/Application;Landroid/content/Context;)V

    sget-object v0, Lcom/secneo/apkwrapper/AW;->a:Landroid/app/Application;

    invoke-virtual {v0}, Landroid/app/Application;->onCreate()V

    :cond_0
    return-void
.end method

.method public registerActivityLifecycleCallbacks(Landroid/app/Application$ActivityLifecycleCallbacks;)V
    .locals 6
    .annotation build Landroid/annotation/TargetApi;
        value = 0xe
    .end annotation

    const/4 v0, 0x0

    :try_start_0
    new-array v0, v0, [I
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Throwable; {:try_start_0 .. :try_end_0} :catch_0

    nop

    goto :goto_0

    :catch_0
    move-exception v0

    .local v0, "ex1":Ljava/lang/Throwable;
    throw v0

    .end local v0    # "ex1":Ljava/lang/Throwable;
    :catch_1
    move-exception v0

    .local v0, "ex1":Ljava/lang/Exception;
    throw v0

    :goto_0
    goto :goto_1

    invoke-static {}, Landroid/os/Debug;->resetThreadExternalAllocSize()V

    :goto_1
    invoke-super {p0, p1}, Landroid/app/Application;->registerActivityLifecycleCallbacks(Landroid/app/Application$ActivityLifecycleCallbacks;)V

    sget-object v0, Lcom/secneo/apkwrapper/AW;->a:Landroid/app/Application;

    if-eqz v0, :cond_0

    invoke-virtual {v0, p1}, Landroid/app/Application;->registerActivityLifecycleCallbacks(Landroid/app/Application$ActivityLifecycleCallbacks;)V

    :cond_0
    return-void
.end method
