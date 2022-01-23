当前文件所在目录为全局目录区，存放全局配置文件，命名唯一

注意：
Library项目：AndroidManifest.xml中必须配置唯一包名，此包名将作为此项目的专属目录
Application项目：如果需要修改配置文件，需要将配置文件副本拷贝到Assets相同目录下进行修改。

Json文件读取方式：
/**
 * Json文件加载器
 *
 * @param fileName "LEGO_MODULES_CONFIG" 目录下的文件路径
 *  LEGO_MODULES_CONFIG
 *   - A
 *     - 1.txt
 *  fileName = /A/1.txt
 */
//获取json文件加载器
JsonConfigloader loader = LegoConfigService.getJsonLoader(String fileName)

/**
 * 获取json String值
 *
 * <pre>
 *     {
 *      "a":1,
 *      "b":{
 *           "c":2
 *       },
 *       "m":[
 *           "d",
 *           "e",
 *           {
 *            "k":3
 *           }
 *       ]
 *     }
 * </pre>
 *
 * eg:
 * pathKey:"a" value:"1"
 * pathKey:"b.c" value:"2"
 * pathKey:"m.[0]" value:"d"
 * pathKey:"m.[2].k" value:"3"
 * pathKey:"m.[2].k" value:"3"
 * pathKey:"b" value:{"c":2}
 *
 * @param pathKey  json搜索全路径
 * @param failback 获取失败返回值
 */
public String getString(String pathKey, String failback)

其他类型文件：
实现文件加载器接口
class A implements LegoConfigLoader {

    //文件路径
    String getFileName(){
        return "/A/1.txt"
    }

    //解析内容
    void parse(String text){
    }
}
//获取自定义文件加载器
com.legoboot.core.LegoConfigService.get(A.class)