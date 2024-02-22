import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产任务相关/changeStatusUsingPOST
export function fetchMethod(data: ITheProductionTaskChangesTheStatusDTO, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/produceTask/changeStatus",
      data,
      params,
    });
}
// 生产任务变更状态DTO
export interface ITheProductionTaskChangesTheStatusDTO {
    // id
    id: number;
    // 状态
    status: string;
    // 生产异常类型id
    produceAbnormalCategoryId: number;
    // 备注
    remark: string;
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
