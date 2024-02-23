import { post } from '@/api/http';
 
// http://47.108.139.107:17400/doc.html#/default/自定义应用相关/editUsingPOST_1
export default function fetchMethod(data: IMasterDataBaseEditDTO, params: { flowPathId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/app-mobile-web/api/app/mobile/customApplication/edit",
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
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
