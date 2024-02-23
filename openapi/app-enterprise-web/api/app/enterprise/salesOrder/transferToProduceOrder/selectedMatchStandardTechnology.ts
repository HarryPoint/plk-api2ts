import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/销售订单相关/selectedMatchStandardTechnologyUsingPOST
export default function fetchMethod(data: ISelectedMatchStandardTechnologyRequestDTO) {
    return post<IJSONResultstring['data']>({
      url: "/app-enterprise-web/api/app/enterprise/salesOrder/transferToProduceOrder/selectedMatchStandardTechnology",
      data,
    });
}
// SelectedMatchStandardTechnologyRequestDTO
export interface ISelectedMatchStandardTechnologyRequestDTO {
    // 销售订单明细ID
    salesOrderDetailId: number;
    // undefined
    standardTechnologyId: number;
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
