import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/动态数据相关/batchImportUsingPOST_1
export function fetchMethod(data: IMasterDataBaseEditDTO[], params: { enterpriseId: number; flowPathId: number }) {
    return post({
      url: "/masterdata-service/dynamicData/batchImport",
      data,
      params,
    });
}
// 主数据基础编辑 DTO
export interface IMasterDataBaseEditDTO {
    // 编辑数据
    data: Record<string, Record<string, any>>;
    // 流程任务id - 新增/重新编辑业务，要设置为null
    flowPathTaskId: number;
    // 扩展参数
    extensionParam: Record<string, Record<string, any>>;
}
// JSONResult«List«string»»
export interface IJSONResultListstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
