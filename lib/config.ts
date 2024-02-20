import path from "path";
const argv = require("yargs").argv;
const dir = path.join(__dirname, "..", argv.dir);

// 接口文档资料===========================================
// 端口：16700 masterdata-service 主数据服务
// 端口：18100 plk-uaa-service 权限服务
// 端口：17900 plk-api-integration-service 集成平台服务
// 端口：16400 pc聚合服务
// 端口：17400 app-moblie聚合服务
// dev接口文档地址：http://47.108.139.107/
// uat接口文档地址：http://47.108.135.148/
// ====================================================

const platformMap = {
  dev: "47.108.139.107",
  uat: "47.108.135.148",
};

const serviceMap = {
  "masterdata-service": 16700,
  "plk-uaa-service": 18100,
  "flow-service": 16500,
  "todo-service": 16600,
  "app-enterprise-web": 16400,
  "app-mobile-web": 17400,
  "message-notification-service": 17600,
};

type IPlatformMap = typeof platformMap;

type IServiceMap = typeof serviceMap;

const apiMap = Object.keys(platformMap)
  .map((platform) => ({
    [platform]: Object.keys(serviceMap)
      .map((service) => ({
        [service]: `http://${platformMap[platform as keyof IPlatformMap]}:${
          serviceMap[service as keyof IServiceMap]
        }`,
      }))
      .reduce(
        (prev, next) => ({ ...prev, ...next }),
        {} as Record<keyof IServiceMap, string>
      ),
  }))
  .reduce(
    (prev, next) => ({ ...prev, ...next }),
    {} as Record<string, Record<keyof IServiceMap, string>>
  ) as Record<string, Record<keyof IServiceMap, string>>;

export default {
  dir,
  translateCache: path.join(dir, "translateCache.json"),
  translateApiUri: "https://openapi.youdao.com/v2/api",
  translateAppKey: "4a8802ec639e5e84",
  translateAppSecret: "mRl99kIGJSPI1TgdCn53v8J8HX0HgN19",
  translateChunkSize: 100,
  serviceMap: apiMap.dev,
  // 接口服务目录
  serviceNameToPath: true,
};
