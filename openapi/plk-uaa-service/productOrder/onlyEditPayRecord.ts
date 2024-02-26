import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/产品订单相关/onlyEditPayRecordUsingPOST
*/
export default function fetchMethod(options: { data: IProductOrdersOnlyModifyThePaymentRecordRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/productOrder/onlyEditPayRecord",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 产品订单只修改付款记录请求对象 */
export interface IProductOrdersOnlyModifyThePaymentRecordRequestObject {
    /** 企业id */
    id?: number;
    /** 付款记录列表 */
    payRecordList?: IProductOrderPaymentHistoryEditRequestObject[];
}
/** 产品订单付款记录编辑请求对象 */
export interface IProductOrderPaymentHistoryEditRequestObject {
    /** 付款记录id */
    id?: number;
    /** 计划付款日期 */
    planPayTime?: string;
    /** 应付金额(元) */
    payableQuantity?: number;
    /** 实际付款日期 */
    realPayTime?: string;
    /** 实付金额(元) */
    actualPayQuantity?: number;
    /** 状态 */
    status?: ('WAIT_PAY' | 'ALREADY_PAY' | 'COMPLETE_PAY');
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
