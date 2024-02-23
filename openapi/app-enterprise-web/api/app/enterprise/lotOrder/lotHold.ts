import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/生产批次订单相关/lotHoldUsingPOST
export default function fetchMethod(data: IBatchWithholdDTO) {
    return post<IJSONResultobject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/lotOrder/lotHold",
      data,
    });
}
// 批次扣留DTO
export interface IBatchWithholdDTO {
    // 批次id
    id: number;
    // 生产任务id
    produceTaskId: number;
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
