import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/委外加工管理/getDetailsUsingGET
export default function fetchMethod(params: { id: string }) {
    return http<IJSONResultListOutsourcedProcessingDetailsAreReturnedToVO>({
        url: "/app-enterprise-web/api/app/enterprise/produceEntrust/getDetails",
        method: "get",
        params,
    });
}
// JSONResult«List«委外加工明细返回VO»»
export interface IJSONResultListOutsourcedProcessingDetailsAreReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IOutsourcedProcessingDetailsReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 委外加工明细返回VO
export interface IOutsourcedProcessingDetailsReturnedToVO {
    // id
    id: number;
    // 返回投料数量
    backQuantity: number;
    // 报废数量
    scrapQuantity: number;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}
