import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/计算方案相关/enableBatchUsingPOST
export default function fetchMethod(data: IComputingSchemeEnablesRequestDTO) {
    return post<IJSONResultstring['data']>({
      url: "/app-enterprise-web/api/app/enterprise/calculationPlan/enableBatch",
      data,
    });
}
// 计算方案启用请求DTO
export interface IComputingSchemeEnablesRequestDTO {
    // 计算方案ID列表
    idList: number[];
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
